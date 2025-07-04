import api from '@/lib/api';

const getFromStorage = (key, fallback = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (error) {
    console.error(`Error reading from localStorage for key ${key}:`, error);
    return fallback;
  }
};

// Helper function to save data to localStorage
const saveToStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving to localStorage for key ${key}:`, error);
  }
};

export async function fetchAndStoreEmissionData() {
  try {
    const response = await api.allEmissionEnties.get();
    const data = Array.isArray(response) && response.length > 0 ? response : [];
    
    // Store month data
    storeMonthData(data);
    // Store category data
    storeCategoryData(data);
    
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
    
    const totalEmission = storeTotalEmission(data);
    saveToStorage("currentUserTotalEmissions", totalEmission);
    
    return totalEmission;
  } catch (error) {
    console.error("Error fetching user emissions data:", error);
    // Return fallback data if fetch fails
    const fallbackTotal = 0;
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

const storeMonthData = (data) => {
  const monthMap = {
    0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun',
    6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec'
  };

  const monthlyEmissions = {};

  data.forEach(entry => {
    if (!entry.date || !entry.co2Emission) return;
    const dateObj = new Date(entry.date);
    const monthIndex = dateObj.getMonth();
    const month = monthMap[monthIndex];
    if (!monthlyEmissions[month]) {
      monthlyEmissions[month] = 0;
    }
    monthlyEmissions[month] += entry.co2Emission;
  });

  const orderedMonths = Object.values(monthMap);

  const monthEmissionArray = orderedMonths
    .filter(month => monthlyEmissions[month])
    .map(month => ({
      month,
      value: parseFloat(monthlyEmissions[month].toFixed(2))
    }));

  const totalEmission = monthEmissionArray.reduce((sum, item) => sum + item.value, 0);
  saveToStorage("totalEmissions", parseFloat(totalEmission.toFixed(2)));
  saveToStorage("monthlyEmissions", monthEmissionArray);
  
  console.log("Monthly CO2 Emissions saved to local storage:", monthEmissionArray);
};

// Helper function to store category data
const storeCategoryData = (data) => {
  const categoryMap = {
    Energy: { types: ["Energy"], color: "#2563eb" },
    Transport: { types: ["Transport"], color: "#ef4444" },
    Waste: { types: ["Waste"], color: "#f59e0b" },
    Water: { types: ["Water"], color: "#8b5cf6" },
    Material: { types: ["Material"], color: "#10b981" },
    Others: { types: [], color: "#374151" }
  };

  const categoryEmissions = {
    Energy: 0,
    Transport: 0,
    Waste: 0,
    Water: 0,
    Material: 0,
    Others: 0
  };

  data.forEach(entry => {
    if (!entry.co2Emission || !entry.type) return;

    let matched = false;
    for (const [categoryName, { types }] of Object.entries(categoryMap)) {
      if (types.includes(entry.type)) {
        categoryEmissions[categoryName] += entry.co2Emission;
        matched = true;
        break;
      }
    }

    if (!matched) {
      categoryEmissions.Others += entry.co2Emission;
    }
  });

  const categoryDataArray = Object.entries(categoryEmissions).map(
    ([name, value]) => ({
      name,
      value: parseFloat(value.toFixed(2)),
      color: categoryMap[name].color
    })
  );

  saveToStorage("categoryEmissions", categoryDataArray);
  console.log("Category-wise CO2 Emissions saved:", categoryDataArray);
};

// Helper function to store total emission
const storeTotalEmission = (data) => {
  if (!Array.isArray(data)) return 0;

  const totalEmission = data.reduce((sum, entry) => {
    if (!entry.date || typeof entry.co2Emission !== 'number') return sum;
    return sum + entry.co2Emission;
  }, 0);

  return parseFloat(totalEmission.toFixed(2));
};

// Helper function to process recommendations
const processTopCategoryRecommendations = (allRecommendations) => {
  const rawData = localStorage.getItem("categoryEmissions");
  if (!rawData) {
    // If no category data, use fallback recommendations
    const fallbackRecommendations = [
      "Consider switching to renewable energy sources",
      "Implement energy-efficient lighting systems",
      "Optimize your transportation routes",
      "Reduce paper usage and go digital"
    ];
    saveToStorage("dashboardRecommendations", fallbackRecommendations);
    return;
  }

  const categoryEmissions = JSON.parse(rawData);

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

  saveToStorage("dashboardRecommendations", selectedTitles);
  console.log("Saved dashboard recommendation titles:", selectedTitles);
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
  
  saveToStorage("monthlyEmissions", fallbackMonthlyData);
  saveToStorage("totalEmissions", fallbackTotal);
  
  return fallbackMonthlyData;
};

