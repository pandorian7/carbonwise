import api from '@/lib/api';
import { useState, useEffect } from "react";

export function saveEmissionDataCategoriesToLocalStorage() {
    const [userEmissionData, setUserEmissionData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.emissionEntries.get();
                const data = Array.isArray(response) && response.length > 0 ? response : [];
                setUserEmissionData(data);
                storeMonthData(data);
                storeCategoryData(data);
            } catch (error) {
                console.error("Error fetching emissions data:", error);
            }
        }
        fetchData();
    }, []);


    //To store the month data 
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
        localStorage.setItem("totalEmissions", JSON.stringify(parseFloat(totalEmission.toFixed(2))));
        localStorage.setItem("monthlyEmissions", JSON.stringify(monthEmissionArray));
        console.log("Monthly CO2 Emissions saved to local storage:", monthEmissionArray);
    };

    const storeCategoryData = (data) => {
        const categoryMap = {
            Energy: { types: ["Energy"], color: "#2563eb" }, // Blue
            Transport: { types: ["Transport"], color: "#ef4444" },     // Red
            Waste: { types: ["Waste"], color: "#f59e0b" },             // Yellow
            Water: { types: ["Water"], color: "#8b5cf6" },             // Purple
            Material: { types: ["Material"], color: "#10b981" },       // Green
            Others: { types: [], color: "#374151" }                    // Gray (default)
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

        localStorage.setItem("categoryEmissions", JSON.stringify(categoryDataArray));
        console.log("Category-wise CO2 Emissions saved:", categoryDataArray);
    };


    return null;
}
