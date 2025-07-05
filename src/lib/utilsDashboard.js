import api from '@/lib/api';

const dataCache = {
  monthlyEmissions: null,
  categoryEmissions: null,
  totalEmissions: 0,
  currentUserTotalEmissions: 0,
  dashboardRecommendations: null,
  lastUpdated: null,
  periodEmissions: {
    Daily: 0,
    Monthly: 0,
    Annually: 0
  }
};

const getFromStorage = (key, fallback = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (error) {
    console.error(`Error reading from localStorage for key ${key}:`, error);
    return fallback;
  }
};

const saveToStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving to localStorage for key ${key}:`, error);
  }
};

const processEmissionData = (data) => {
  const monthMap = {
    0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun',
    6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec'
  };

  const categoryMap = {
    Energy: { types: ["Energy"], color: "#2563eb" },
    Transport: { types: ["Transport"], color: "#ef4444" },
    Waste: { types: ["Waste"], color: "#f59e0b" },
    Water: { types: ["Water"], color: "#8b5cf6" },
    Material: { types: ["Material"], color: "#10b981" },
    Others: { types: [], color: "#374151" }
  };

  // Initialize aggregation objects
  const monthlyEmissions = {};
  const categoryEmissions = {
    Energy: 0,
    Transport: 0,
    Waste: 0,
    Water: 0,
    Material: 0,
    Others: 0
  };

  let totalEmission = 0;

  data.forEach(entry => {
    if (!entry.co2Emission || typeof entry.co2Emission !== 'number') return;

    const emission = entry.co2Emission;
    totalEmission += emission;

    // Process monthly data
    if (entry.date) {
      const dateObj = new Date(entry.date);
      const monthIndex = dateObj.getMonth();
      const month = monthMap[monthIndex];
      if (!monthlyEmissions[month]) {
        monthlyEmissions[month] = 0;
      }
      monthlyEmissions[month] += emission;
    }

    // Process category data
    if (entry.type) {
      let matched = false;
      for (const [categoryName, { types }] of Object.entries(categoryMap)) {
        if (types.includes(entry.type)) {
          categoryEmissions[categoryName] += emission;
          matched = true;
          break;
        }
      }
      if (!matched) {
        categoryEmissions.Others += emission;
      }
    }
  });

  // Format monthly data
  const orderedMonths = Object.values(monthMap);
  const monthEmissionArray = orderedMonths
    .filter(month => monthlyEmissions[month])
    .map(month => ({
      month,
      value: parseFloat(monthlyEmissions[month].toFixed(2))
    }));

  // Format category data
  const categoryDataArray = Object.entries(categoryEmissions).map(
    ([name, value]) => ({
      name,
      value: parseFloat(value.toFixed(2)),
      color: categoryMap[name].color
    })
  );

  return {
    monthlyEmissions: monthEmissionArray,
    categoryEmissions: categoryDataArray,
    totalEmissions: parseFloat(totalEmission.toFixed(2))
  };
};

export async function fetchAndStoreEmissionData() {
  try {
    const response = await api.emissionEntries.get();
    const data = Array.isArray(response) && response.length > 0 ? response : [];

    // Process data once for both monthly and category summaries
    const processedData = processEmissionData(data);

    // Update cache
    dataCache.monthlyEmissions = processedData.monthlyEmissions;
    dataCache.categoryEmissions = processedData.categoryEmissions;
    dataCache.totalEmissions = processedData.totalEmissions;
    dataCache.lastUpdated = Date.now();

    // Save to localStorage for persistence
    saveToStorage("monthlyEmissions", processedData.monthlyEmissions);
    saveToStorage("categoryEmissions", processedData.categoryEmissions);
    saveToStorage("totalEmissions", processedData.totalEmissions);


    console.log("Emission data processed and cached:", processedData);

    return data;
  } catch (error) {
    console.error("Error fetching emissions data:", error);
    // Return fallback data if fetch fails
    return getFallbackEmissionData();
  }
}

// New function to calculate and cache all period emissions at once
export const calculateAndCacheAllPeriodEmissions = (data) => {
  const periods = ['Daily', 'Monthly', 'Annually'];
  const periodData = {};
  
  periods.forEach(period => {
    periodData[period] = calculateEmissionsByPeriod(data, period);
  });
  
  // Update cache
  dataCache.periodEmissions = periodData;
  
  // Save to localStorage
  saveToStorage("periodEmissions", periodData);
  
  console.log("All period emissions calculated and cached:", periodData);
  return periodData;
};

// Function to get cached emissions for a specific period
export const getCachedPeriodEmissions = (selectedPeriod) => {
  const cachedData = dataCache.periodEmissions || getFromStorage("periodEmissions", {});
  return cachedData[selectedPeriod] || 0;
};

export async function fetchAndStoreUserEmissionData(selectedPeriod = 'Daily') {
  try {
    const response = await api.emissionEntries.get();
    const data = Array.isArray(response) && response.length > 0 ? response : [];
    
    // Calculate all periods at once and cache them
    const allPeriodEmissions = calculateAndCacheAllPeriodEmissions(data);
    
    // Return the requested period's emissions
    const userTotal = parseFloat(allPeriodEmissions[selectedPeriod].toFixed(2));
    
    // Update legacy cache for backward compatibility
    dataCache.currentUserTotalEmissions = userTotal;
    saveToStorage("currentUserTotalEmissions", userTotal);
    
    return userTotal;
  } catch (error) {
    console.error("Error fetching user emissions data:", error);
    // Return fallback data if fetch fails
    const fallbackTotal = 0;
    dataCache.currentUserTotalEmissions = fallbackTotal;
    saveToStorage("currentUserTotalEmissions", fallbackTotal);
    return fallbackTotal;
  }
}

// New function to calculate emissions based on selected period
export const calculateEmissionsByPeriod = (data, selectedPeriod) => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDay = today.getDate();

  return data.reduce((sum, entry) => {
    if (!entry.date || typeof entry.co2Emission !== 'number') return sum;

    const entryDate = new Date(entry.date);

    switch (selectedPeriod) {
      case 'Daily':
        // Only include entries from today
        if (entryDate.getDate() === currentDay &&
          entryDate.getMonth() === currentMonth &&
          entryDate.getFullYear() === currentYear) {
          return sum + entry.co2Emission;
        }
        break;
      case 'Monthly':
        // Only include entries from current month
        if (entryDate.getMonth() === currentMonth &&
          entryDate.getFullYear() === currentYear) {
          return sum + entry.co2Emission;
        }
        break;
      case 'Annually':
        // Only include entries from current year
        if (entryDate.getFullYear() === currentYear) {
          return sum + entry.co2Emission;
        }
        break;
      default:
        // Default to daily
        if (entryDate.getDate() === currentDay &&
          entryDate.getMonth() === currentMonth &&
          entryDate.getFullYear() === currentYear) {
          return sum + entry.co2Emission;
        }
    }

    return sum;
  }, 0);
};

// Function to get benchmark based on selected period
export const getBenchmarkByPeriod = (selectedPeriod) => {
  switch (selectedPeriod) {
    case 'Daily':
      return 100000; // Daily benchmark
    case 'Monthly':
      return 6000000; // Monthly benchmark
    case 'Annually':
      return 36500000; // Annual benchmark
    default:
      return 10000000; // Default benchmark
  }
};

export async function fetchAndStoreRecommendations() {
  try {
    const response = await api.recommendations.get();
    const data = Array.isArray(response) && response.length > 0 ? response : [];

    processTopCategoryRecommendations(data);
    return data;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    // Return null to trigger loading state instead of fallback recommendations
    dataCache.dashboardRecommendations = null;
    return null;
  }
}

// Legacy function names for backward compatibility
export function saveEmissionDataCategoriesToLocalStorage() {
  return fetchAndStoreEmissionData();
}

export function saveUserEmissionDataToLocalStorage() {
  return fetchAndStoreUserEmissionData();
}

export function saveDashboardRecommendationSummery() {
  return fetchAndStoreRecommendations();
}


const processTopCategoryRecommendations = (allRecommendations) => {
  const categoryEmissions = dataCache.categoryEmissions || getFromStorage("categoryEmissions", []);

  if (!categoryEmissions || categoryEmissions.length === 0) {
    // If no category data, return null to trigger loading state
    dataCache.dashboardRecommendations = null;
    return;
  }

  // Take up to 4 recommendations (not more than available)
  const limitedRecommendations = allRecommendations
    .slice(0, 4) // Take only first 4, not more
    .map(rec => rec.title || rec);

  // If we have recommendations, use them; otherwise return null for loading state
  if (limitedRecommendations.length > 0) {
    dataCache.dashboardRecommendations = limitedRecommendations;
    saveToStorage("dashboardRecommendations", limitedRecommendations);
    console.log("Saved recommendations (max 4):", limitedRecommendations);
  } else {
    dataCache.dashboardRecommendations = null;
  }

};


const getFallbackEmissionData = () => {
  const fallbackMonthlyData = [
    { month: 'Jan', value: 150.5 },
    { month: 'Feb', value: 180.2 },
    { month: 'Mar', value: 165.8 },
    { month: 'Apr', value: 190.1 },
    { month: 'May', value: 175.3 },
    { month: 'Jun', value: 200.7 }
  ];

  const fallbackTotal = fallbackMonthlyData.reduce((sum, item) => sum + item.value, 0);

  dataCache.monthlyEmissions = fallbackMonthlyData;
  dataCache.totalEmissions = fallbackTotal;

  saveToStorage("monthlyEmissions", fallbackMonthlyData);
  saveToStorage("totalEmissions", fallbackTotal);

  return fallbackMonthlyData;
};

export const getCachedData = () => {
  // Ensure periodEmissions is always present in cache
  if (!dataCache.periodEmissions) {
    dataCache.periodEmissions = {
      Daily: 0,
      Monthly: 0,
      Annually: 0
    };
  }
  return dataCache;
};

export const clearCache = () => {
  // Clear in-memory cache
  Object.keys(dataCache).forEach(key => {
    dataCache[key] = null;
  });
  dataCache.lastUpdated = null;
  
  // Reset period emissions cache
  dataCache.periodEmissions = {
    Daily: 0,
    Monthly: 0,
    Annually: 0
  };
  
  // Clear localStorage items
  const localStorageKeys = [
    "monthlyEmissions",
    "categoryEmissions", 
    "totalEmissions",
    "currentUserTotalEmissions",
    "dashboardRecommendations",
    "periodEmissions"
  ];
  
  localStorageKeys.forEach(key => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key ${key}:`, error);
    }
  });
  
  console.log("All dashboard cache and localStorage data cleared");
};

