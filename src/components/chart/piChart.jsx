import React from "react";
import { Pie, PieChart, Cell } from "recharts";
import { getCachedData } from '@/lib/utilsDashboard';

export default function EmissionsChart() {
  // Try to get data from cache first, then fallback to localStorage
  const cachedData = getCachedData();
  const chartData = cachedData.categoryEmissions || 
    (() => {
      try {
        const rawData = localStorage.getItem("categoryEmissions");
        return rawData ? JSON.parse(rawData) : [];
      } catch (error) {
        console.error("Error reading category emissions from localStorage:", error);
        return [];
      }
    })();

  const totalValue = chartData.reduce((sum, item) => sum + item.value, 0);

  if (!chartData.length || totalValue === 0) {
    return (
      <div className="text-center text-gray-400">
        No emissions data available to display.
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-start items-start px-4">
      <div className="flex justify-between w-full">
        <span className="text-base font-medium text-base-muted-foreground">
          Where Your Emissions Come From
        </span>
        <span className="text-sm font-medium text-lime-400">+25.66%</span>
      </div>

      <div className="flex w-full items-center gap-8">
        <PieChart width={200} height={200}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
            ))}
          </Pie>
        </PieChart>

        <div className="flex-1 flex flex-col gap-0.5">
          {chartData.map((item) => (
            <div
              key={item.name}
              className="grid grid-cols-[auto_minmax(120px,auto)_70px] gap-2 items-center text-sm text-white font-medium"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span>{item.name}</span>
              </div>
              <span className="text-right">{item.value} kg CO₂e</span>
              <span className="text-right text-gray-400">
                {((item.value / totalValue) * 100).toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
