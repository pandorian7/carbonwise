import React, { useEffect, useRef } from "react";
import Model from "@/components/ui/model/Model";
import Chart from "chart.js/auto";

/**
 * Renders the ReportModel component.
 *
 * @param {Object} props
 * @param {string} props.title - Title of the report.
 * @param {Object} props.emissoin - Emission breakdown.
 * @param {number} props.emissoin.energy
 * @param {number} props.emissoin.transport
 * @param {number} props.emissoin.water
 * @param {number} props.emissoin.waste
 * @param {number} props.emissoin.other
 * @param {Object} props.recommendations - Recommendation details.
 * @param {number} props.recommendations.count
 * @param {number} props.recommendations.finantialCost
 * @param {number} props.recommendations.implementationCost
 */
function ReportModel({ title, emission, recommendation, onClose }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const {energy, transport, water, waste, other} = emission;
  const totalEmission = energy + transport + water + waste + other;


  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: [
            "Energy",
            "Transport",
            "Water",
            "Waste",
            "Others",
          ],
          datasets: [
            {
              data: [energy, transport, water, waste, other],
              backgroundColor: [
                "#3B82F6", // Blue
                "#EC4899", // Pink
                "#F59E0B", // Orange
                "#8B5CF6", // Purple
                "#EAB308", // Yellow
                "#06B6D4", // Cyan
              ],
              borderWidth: 0,
              cutout: "60%",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              titleColor: "#fff",
              bodyColor: "#fff",
              borderColor: "#374151",
              borderWidth: 1,
              callbacks: {
                label: function (context) {
                  return (
                    context.label + ": " + context.parsed + " kg CO₂e (36%)"
                  );
                },
              },
            },
          },
          elements: {
            arc: {
              borderWidth: 0,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <Model
      title={title}
      className="max-w-[1200px]"
      childrenClassName="p-0 py-2"
      hideButtons={true}
      onClose={onClose}
    >
      {/* Scrollable content wrapper with fixed width */}

      <div
        style={{
          width: "100%",
          maxHeight: "60vh",
          overflowY: "auto",
          paddingRight: "3rem",
          paddingLeft: "3rem",
        }}
      >
        <div className="mb-6 flex-1">
          <h3 className="text-lg font-medium mb-4">
            Carbon Assessment Summary:
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">
                Estimated Carbon Footprint:
              </span>
              <span className="text-lg font-semibold text-white">
                {totalEmission} tonnes CO₂e/year
              </span>
            </div>
            {/* <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Equivalent to:</span>
                <span className="text-lg font-semibold text-white">
                  $8,460 in potential energy savings
                </span>
              </div> */}
            {/* <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">
                  Industry Standing:
                </span>
                <span className="text-lg font-semibold text-white">
                  15% below similar businesses in your sector
                </span>
              </div> */}
          </div>
        </div>

        {/* Current Footprint Breakdown */}
        <div className="mb-6 flex-1">
          <h3 className="text-lg font-medium mb-4">
            Current Footprint Breakdown:
          </h3>
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
                    <span className="text-sm">Energy</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">{energy} kg CO₂e</span>
                    <span className="text-xs text-gray-400 ml-2">36%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Transport</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">{transport} kg CO₂e</span>
                    <span className="text-xs text-gray-400 ml-2">36%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">Water</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">{water} kg CO₂e</span>
                    <span className="text-xs text-gray-400 ml-2">36%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Waste</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">{waste} kg CO₂e</span>
                    <span className="text-xs text-gray-400 ml-2">36%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Other</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">{other} kg CO₂e</span>
                    <span className="text-xs text-gray-400 ml-2">36%</span>
                  </div>
                </div>
                {/* <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm">Others</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">450 kg CO₂e</span>
                    <span className="text-xs text-gray-400 ml-2">36%</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Financial Breakdown */}
        <div className="mb-6 flex-1">
          <h3 className="text-lg font-medium mb-4">Financial Breakdown:</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">
                Total Number of Recommendations:
              </span>
              <span className="text-lg font-semibold">{recommendation.count}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">
                Total Finantial Cost:
              </span>
              <span className="text-lg font-semibold">${recommendation.finantialCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">
                Total Implementation Cost:
              </span>
              <span className="text-lg font-semibold">${recommendation.implementationCost.toLocaleString()}</span>
            </div>
            {/* <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">
                  Annual energy cost savings:
                </span>
                <span className="text-lg font-semibold">$142,500</span>
              </div> */}
            {/* <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">
                  Maintenance cost reduction:
                </span>
                <span className="text-lg font-semibold">$18,800</span>
              </div> */}
            {/* <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">
                  Potential demand charge avoidance:
                </span>
                <span className="text-lg font-semibold">$24,200</span>
              </div> */}
            {/* <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">
                  Total implementation cost:
                </span>
                <span className="text-lg font-semibold">$325,000</span>
              </div> */}
            {/* <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">ROI:</span>
                <span className="text-lg font-semibold">45% over 5 years</span>
              </div> */}
          </div>
        </div>

        {/* Action Buttons */}
        {/* <div className="flex gap-4 justify-end mt-auto">
            <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition-colors">
              Decline
            </button>
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition-colors">
              Accept
            </button>
          </div> */}
      </div>
    </Model>
  );
}

export default ReportModel;
