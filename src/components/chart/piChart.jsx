import React, { useState } from "react";
import { Pie, PieChart, Cell } from "recharts";

const initialChartData = [
  { name: "Electricity", value: 450, color: "#2563eb" }, // Blue
  { name: "Transport", value: 450, color: "#ef4444" }, // Red
  { name: "Waste", value: 450, color: "#f59e0b" }, // Yellow
  { name: "Water", value: 450, color: "#8b5cf6" }, // Purple
  { name: "Purchased Goods", value: 450, color: "#10b981" }, // Green
  { name: "Others", value: 450, color: "#374151" }, // Gray
];

export default function EmissionsChart() {
  const [chartData] = useState(initialChartData);
  const totalValue = chartData.reduce((sum, item) => sum + item.value, 0);

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
