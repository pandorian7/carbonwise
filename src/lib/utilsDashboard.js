import api from '@/lib/api';

const dataCache = {
  monthlyEmissions: null,
  categoryEmissions: null,
  totalEmissions: 0,
  currentUserTotalEmissions: 0,
  dashboardRecommendations: null,
  lastUpdated: null
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

  // Single pass through data to aggregate both monthly and category data
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
    const response = await api.allEmissionEnties.get();
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
    
    // console.log("Emission data processed and cached:", processedData);
    return data;
  } catch (error) {
    console.error("Error fetching emissions data:", error);
    // Return fallback data if fetch fails
    return getFallbackEmissionData();
  }
}

export async function fetchAndStoreUserEmissionData() {
  try {
    const response = await api.emissionEntries.get();
    const data = Array.isArray(response) && response.length > 0 ? response : [];
    
    const totalEmission = data.reduce((sum, entry) => {
      if (!entry.date || typeof entry.co2Emission !== 'number') return sum;
      return sum + entry.co2Emission;
    }, 0);

    const userTotal = parseFloat(totalEmission.toFixed(2));
    
    // Update cache
    dataCache.currentUserTotalEmissions = userTotal;
    
    // Save to localStorage
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

export async function fetchAndStoreRecommendations() {
  try {
    const response = await api.recommendations.get();
    const data = Array.isArray(response) && response.length > 0 ? response : [];
    
    processTopCategoryRecommendations(data);
    return data;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    // Return fallback recommendations if fetch fails
    const fallbackRecommendations = [
      "Consider switching to renewable energy sources",
      "Implement energy-efficient lighting systems",
      "Optimize your transportation routes",
      "Reduce paper usage and go digital"
    ];
    dataCache.dashboardRecommendations = fallbackRecommendations;
    saveToStorage("dashboardRecommendations", fallbackRecommendations);
    return fallbackRecommendations;
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

// Helper function to process recommendations
const processTopCategoryRecommendations = (allRecommendations) => {
  const categoryEmissions = dataCache.categoryEmissions || getFromStorage("categoryEmissions", []);
  
  if (!categoryEmissions || categoryEmissions.length === 0) {
    // If no category data, use fallback recommendations
    const fallbackRecommendations = [
      "Consider switching to renewable energy sources",
      "Implement energy-efficient lighting systems",
      "Optimize your transportation routes",
      "Reduce paper usage and go digital"
    ];
    dataCache.dashboardRecommendations = fallbackRecommendations;
    saveToStorage("dashboardRecommendations", fallbackRecommendations);
    return;
  }

  const topTwoCategories = categoryEmissions
    .sort((a, b) => b.value - a.value)
    .slice(0, 1)
    .map(item => item.name);

  const selectedTitles = [];

  topTwoCategories.forEach(categoryName => {
    const filtered = allRecommendations.filter(rec =>
      rec.emissionEntry?.type === categoryName
    );

    const shuffled = filtered.sort(() => 0.5 - Math.random());
    const titles = shuffled.slice(0, 4).map(rec => rec.title);
    selectedTitles.push(...titles);
  });

  // If no recommendations found, use fallback
  if (selectedTitles.length === 0) {
    selectedTitles.push(
      "Consider switching to renewable energy sources",
      "Implement energy-efficient lighting systems",
      "Optimize your transportation routes",
      "Reduce paper usage and go digital"
    );
  }

  dataCache.dashboardRecommendations = selectedTitles;
  saveToStorage("dashboardRecommendations", selectedTitles);
  // console.log("Saved dashboard recommendation titles:", selectedTitles);
};

// Fallback data functions
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

export const getCachedData = () => dataCache;

export const clearCache = () => {
  Object.keys(dataCache).forEach(key => {
    dataCache[key] = null;
  });
  dataCache.lastUpdated = null;
};

