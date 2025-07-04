import React, { useEffect, useRef } from "react"
import Model, { ModelEntry, ModelEntryContainer } from "@/components/ui/model/Model";
import { Input } from "@/components/ui/input";
import ToggleGroup from "@/components/ui/ToggleGroup";
import api from "@/lib/api";
import Chart from "chart.js/auto";

function Reports(){
   const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Electricity', 'Transport', 'Waste', 'Water', 'Purchased Goods', 'Others'],
          datasets: [{
            data: [450, 450, 450, 450, 450, 450],
            backgroundColor: [
              '#3B82F6', // Blue
              '#EC4899', // Pink
              '#F59E0B', // Orange
              '#8B5CF6', // Purple
              '#EAB308', // Yellow
              '#06B6D4'  // Cyan
            ],
            borderWidth: 0,
            cutout: '60%'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              titleColor: '#fff',
              bodyColor: '#fff',
              borderColor: '#374151',
              borderWidth: 1,
              callbacks: {
                label: function(context) {
                  return context.label + ': ' + context.parsed + ' kg CO₂e (36%)';
                }
              }
            }
          },
          elements: {
            arc: {
              borderWidth: 0
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <Model title={"Q2 2025 Headquarters Assessment"} >
      {/* Scrollable content wrapper with fixed width */}
      
      <div
        style={{
          width: "1200px",
          maxHeight: "60vh",
          overflowY: "auto",
          paddingRight: "1rem"
        }}
      >
        <div className="mb-6 flex-1">
          <h3 className="text-lg font-medium mb-4">Carbon Assessment Summary:</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Estimated Carbon Footprint:</span>
              <span className="text-lg font-semibold text-white">42.3 tonnes CO₂e/year</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Equivalent to:</span>
              <span className="text-lg font-semibold text-white">$8,460 in potential energy savings</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Industry Standing:</span>
              <span className="text-lg font-semibold text-white">15% below similar businesses in your sector</span>
            </div>
          </div>
        </div>


        {/* Current Footprint Breakdown */}
        <div className="mb-6 flex-1">
          <h3 className="text-lg font-medium mb-4">Current Footprint Breakdown:</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex justify-center">
            <div className="relative w-[400px] h-[400px]">
                <canvas ref={chartRef} width="400" height="400"></canvas>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="space-y-2">
                {/* ...legend items... */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Electricity</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">450 kg CO₂e</span>
                    <span className="text-xs text-gray-400 ml-2">36%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Transport</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">450 kg CO₂e</span>
                    <span className="text-xs text-gray-400 ml-2">36%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">Waste</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">450 kg CO₂e</span>
                    <span className="text-xs text-gray-400 ml-2">36%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Water</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">450 kg CO₂e</span>
                    <span className="text-xs text-gray-400 ml-2">36%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Purchased Goods</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">450 kg CO₂e</span>
                    <span className="text-xs text-gray-400 ml-2">36%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm">Others</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">450 kg CO₂e</span>
                    <span className="text-xs text-gray-400 ml-2">36%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Breakdown */}
        <div className="mb-6 flex-1">
          <h3 className="text-lg font-medium mb-4">Financial Breakdown:</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Annual energy cost savings:</span>
              <span className="text-lg font-semibold">$142,500</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Maintenance cost reduction:</span>
              <span className="text-lg font-semibold">$18,800</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Potential demand charge avoidance:</span>
              <span className="text-lg font-semibold">$24,200</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Total implementation cost:</span>
              <span className="text-lg font-semibold">$325,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">ROI:</span>
              <span className="text-lg font-semibold">45% over 5 years</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-end mt-auto">
          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition-colors">
            Decline
          </button>
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition-colors">
            Accept
          </button>
        </div>
      </div>
    </Model>
  );
}
export default Reports;