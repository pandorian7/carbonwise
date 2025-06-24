import React, { useState } from "react";

import Breadcrumb from "@/Components/ui/Breadcrumb";
import { PanelLeftIcon, SearchIcon } from "lucide-react";

import { IconButton, IconButtonR, Button } from "@/Components/ui/Button";

import { PlusIcon, Calendar1Icon, ChevronDown, ChevronRight, TrendingUp } from 'lucide-react'

function Dashboard() {

  const [totalEmmision, setTotalEmmision] = useState(15.11);

  const currentGoalProgress = 1789;
  const totalGoalForProgress = 2500;
  const goalProgressPercentage = (currentGoalProgress / totalGoalForProgress) * 100;

  const currentEmissions = 50;
  const benchmarkEmissions = 110;
  const emissionsProgressPercentage = (currentEmissions / benchmarkEmissions) * 100;

  const emissionsData = [
    { month: 'Jan', value: 300 },
    { month: 'Feb', value: 180 },
    { month: 'Mar', value: 250 },
    { month: 'Apr', value: 100 },
    { month: 'May', value: 300 },
    { month: 'Jun', value: 280 },
    { month: 'Jly', value: 180 },
  ];

  const totalChartEmissions = emissionsData.reduce((sum, data) => sum + data.value, 0);

  const CHART_HEIGHT = 192;
  const CHART_WIDTH = 1440;

  const PADDING_TOP = 20;
  const PADDING_RIGHT = 20;
  const PADDING_BOTTOM = 40;
  const PADDING_LEFT = 40;

  const innerChartWidth = CHART_WIDTH - PADDING_LEFT - PADDING_RIGHT;
  const innerChartHeight = CHART_HEIGHT - PADDING_TOP - PADDING_BOTTOM;

  const allValues = emissionsData.map(d => d.value);
  const maxValue = Math.max(...allValues);
  const minValue = 0;

  const yScale = (value) => {
    return PADDING_TOP + innerChartHeight - ((value - minValue) / (maxValue - minValue)) * innerChartHeight;
  };

  const xScale = (index) => {
    return PADDING_LEFT + (index / (emissionsData.length - 1)) * innerChartWidth;
  };

  const linePath = emissionsData.map((data, index) => {
    const x = xScale(index);
    const y = yScale(data.value);
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  const numYAxisLines = 5;
  const yAxisLabels = [];
  const yAxisGridLines = [];
  const yAxisValueStep = Math.ceil(maxValue / (numYAxisLines - 1) / 100) * 100;

  for (let i = 0; i < numYAxisLines; i++) {
    const labelValue = i * yAxisValueStep;
    const y = yScale(labelValue);

    yAxisGridLines.push(
      <line
        key={`grid-y-${i}`}
        x1={PADDING_LEFT}
        y1={y}
        x2={CHART_WIDTH - PADDING_RIGHT}
        y2={y}
        stroke="#4B5563"
        strokeWidth="0.5"
        strokeOpacity="0.8"
      />
    );

    yAxisLabels.push(
      <text
        key={`label-y-${i}`}
        x={PADDING_LEFT - 10}
        y={y + 4}
        textAnchor="end"
        fill="#9CA3AF"
        fontSize="10"
      >
        {labelValue}
      </text>
    );
  }


  return (
    <>
      <div data-breadcrumb="false" data-breakpoint="Desktop" data-button-1="true" data-button-2="true" data-button-3="false" data-button-4="false" data-buttons="true" data-description="false" data-page-select="false" className="self-stretch py-4 bg-base-background border-b border-base-border inline-flex flex-col justify-start items-center gap-4 mx-6">
        <div className="self-stretch inline-flex justify-between items-center overflow-hidden">
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-start text-base-foreground text-3xl font-bold font-['Inter'] leading-9">Overview</div>
          </div>
          <div className="flex-1 flex justify-end items-center gap-2">
            <IconButton Icon={SearchIcon} variant='secondaryOutlined'>Search</IconButton>
            <IconButton Icon={PlusIcon} variant='default'>New Calculation</IconButton>
          </div>
        </div>
      </div>

      <div className="self-stretch inline-flex justify-between items-center  my-6 mx-6">
        <div data-active="Yes" data-show-description="false" data-show-label="false" data-state="Default" className="w-72 inline-flex flex-col justify-start items-start gap-2">

          <IconButton Icon={Calendar1Icon} variant='secondaryOutlined'>Jan 20, 2022 - Jun 09, 2022</IconButton>
        </div>
        <div className="flex justify-start items-center gap-3">
          <IconButtonR Icon={ChevronDown} variant='secondaryOutlined'>Daily</IconButtonR>
        </div>
      </div>

      <div className="self-stretch rounded-md inline-flex justify-start items-start gap-6 mx-6">
        <div className="flex-1 p-4 rounded-2xl outline-1 outline-offset-[-1px] outline-base-border inline-flex flex-col justify-start items-start gap-3">
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="flex-1 justify-start text-base-muted-foreground text-sm font-medium font-['Inter'] leading-tight">Goal Progress</div>
            <Button variant='secondaryOutlined'>See All</Button>
          </div>
          <div className="self-stretch justify-start text-base-foreground text-3xl font-semibold font-['Inter'] leading-9">1,789</div>
          <div
            data-active="False"
            data-horizontal="True"
            data-show-custom-label="false"
            data-show-value="false"
            data-type="Stacked"
            className="self-stretch h-10 inline-flex justify-start items-center gap-2
                       rounded-lg outline-1 outline-offset-[-1px] outline-purple-500"
          >
            <div className="flex-1 self-stretch relative overflow-hidden rounded-lg">
              <div
                className="h-10 left-0 top-0 absolute bg-lime-400"
                style={{ width: `${goalProgressPercentage}%` }}
              />
              <div className="w-full h-full bg-neutral-700 rounded-lg" />
            </div>
          </div>

          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-start items-start gap-2 flex-wrap content-start">
              <div className="flex-1 justify-start text-base-card-foreground text-sm font-medium font-['Inter'] leading-none">Great progress! You're on track.</div>
              <TrendingUp className="w-4 h-4 text-lime-400" />
              <div className="text-right justify-start text-lime-400 text-sm font-medium font-['Inter'] leading-tight">+25.66%</div>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 rounded-2xl outline-1 outline-offset-[-1px] outline-base-border inline-flex flex-col justify-start items-start gap-3">
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="flex-1 justify-start text-base-muted-foreground text-sm font-medium font-['Inter'] leading-tight">Emissions per Employee</div>
            <Button variant='secondaryOutlined'>See All</Button>
          </div>
          <div className="self-stretch justify-start text-base-foreground text-3xl font-semibold font-['Inter'] leading-9">{currentEmissions} kg CO₂e</div>

          <div
            data-active="False"
            data-horizontal="True"
            data-show-custom-label="false"
            data-show-value="false"
            data-type="Stacked"
            className="self-stretch h-10 inline-flex justify-start items-center gap-2
                       rounded-lg outline-1 outline-offset-[-1px] outline-purple-500"
          >
            <div className="flex-1 self-stretch relative overflow-hidden rounded-lg">
              <div className="w-full h-full bg-neutral-700 rounded-lg" />
              <div
                className="h-10 left-0 top-0 absolute bg-lime-400"
                style={{ width: `${emissionsProgressPercentage}%` }}
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-start items-start gap-2 flex-wrap content-start">
              <div className="flex-1 justify-start text-base-card-foreground text-sm font-medium font-['Inter'] leading-none">Benchmark: 110 kg (industry average)</div>
              <TrendingUp className="w-4 h-4 text-lime-400" />
              <div className="text-right justify-start text-lime-400 text-sm font-medium font-['Inter'] leading-tight">+25.66%</div>
            </div>
          </div>
        </div>
      </div>

      {/*Graph */}
      <div className="self-stretch p-4 rounded-2xl outline-1 outline-offset-[-1px] outline-base-border inline-flex flex-col justify-start items-start gap-3 my-6 mx-6">
        <div className="self-stretch inline-flex justify-center items-center gap-2">
          <div className="flex-1 justify-start text-base-muted-foreground text-sm font-medium font-['Inter'] leading-tight">Total Emissions</div>
          <div className="flex-1 text-right justify-start text-lime-400 text-sm font-medium font-['Inter'] leading-tight">+{totalEmmision}%</div>
        </div>
        <div className="self-stretch justify-start text-base-foreground text-3xl font-semibold font-['Inter'] leading-9">
          {Intl.NumberFormat('en-US').format(totalChartEmissions)} kg CO₂e
        </div>

        <div className="self-stretch py-6 flex flex-col justify-start items-start gap-2.5">
          <div data-show-grid="true" data-show-legend="false" data-type="Linear" className="self-stretch h-48 flex flex-col justify-end items-center gap-9">
            <div className="self-stretch flex-1 relative">
              <svg
                width="100%"
                height="100%"
                viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
                preserveAspectRatio="xMidYMid meet"
                className="absolute left-0 top-0"
              >
                {yAxisGridLines}

                <path
                  d={linePath}
                  fill="none"
                  stroke="#84CC16"
                  strokeWidth="2"
                />

                {emissionsData.map((data, index) => {
                  const x = xScale(index);
                  const y = yScale(data.value);
                  const isLastPoint = index === emissionsData.length - 1;
                  return (
                    <g key={`point-${data.month}`}>
                      <circle
                        cx={x}
                        cy={y}
                        r={isLastPoint ? 4 : 2}
                        fill={isLastPoint ? "#84CC16" : "#84CC16"}
                      />
                      {isLastPoint && (
                        <text
                          x={x}
                          y={y - 10}
                          textAnchor="middle"
                          fill="#F9FAFB"
                          fontSize="12"
                        >
                          {Intl.NumberFormat('en-US').format(data.value)}
                        </text>
                      )}
                    </g>
                  );
                })}

                {emissionsData.map((data, index) => (
                  <text
                    key={`month-label-${data.month}`}
                    x={xScale(index)}
                    y={CHART_HEIGHT - PADDING_BOTTOM + 20}
                    textAnchor="middle"
                    fill="#9CA3AF"
                    fontSize="10"
                  >
                    {data.month}
                  </text>
                ))}

                {yAxisLabels}

              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch p-4 rounded-2xl outline-1 outline-offset-[-1px] outline-base-border flex justify-start items-start gap-6 mx-6">
        <div className="flex-1 min-w-80 flex flex-col justify-start items-start gap-3">
          <div className="self-stretch flex justify-between items-center gap-2">
            <div className="flex-1 text-base-muted-foreground text-sm font-medium font-['Inter'] leading-tight">Where Your Emissions Come From</div>
            <div className="flex-1 text-right text-lime-400 text-sm font-medium font-['Inter'] leading-tight">+25.66%</div>
          </div>
          <div className="self-stretch py-2 flex flex-wrap content-center justify-start items-center gap-3">
            <div className="px-2 flex justify-center items-center gap-2.5">
              <div data-show-text="false" data-type="Basic" className="w-36 h-36 flex flex-col justify-center items-center gap-7">
                <div data-stroke="No" className="w-36 h-36 relative">
                  <div className="w-36 h-36 left-0 top-0 absolute bg-base-chart-1 rounded-full" />
                  <div className="w-36 h-36 left-0 top-0 absolute bg-base-chart-5 rounded-full" />
                  <div className="w-36 h-36 left-0 top-0 absolute bg-base-chart-4 rounded-full" />
                  <div className="w-36 h-36 left-0 top-0 absolute bg-base-chart-3 rounded-full" />
                  <div className="w-36 h-36 left-0 top-0 absolute bg-base-chart-2 rounded-full" />
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-80 flex flex-col justify-start items-start gap-2">
              <div className="self-stretch inline-flex justify-center items-center gap-2">
                <div className="w-2 h-2 bg-base-chart-1 rounded-full" />
                <div className="flex-1 justify-start text-base-card-foreground text-sm font-medium font-['Inter'] leading-none">Electricity</div>
                <div className="flex-1 justify-start text-base-card-foreground text-sm font-medium font-['Inter'] leading-none">450 kg CO₂e</div>
                <div className="w-12 justify-start text-Text-Secondary/80 text-sm font-medium font-['Inter'] leading-none">36%</div>
              </div>
              <div className="self-stretch inline-flex justify-center items-center gap-2">
                <div className="w-2 h-2 bg-pink-600 rounded-full" />
                <div className="flex-1 justify-start text-base-card-foreground text-sm font-medium font-['Inter'] leading-none">Transport</div>
                <div className="flex-1 justify-start text-base-card-foreground text-sm font-medium font-['Inter'] leading-none">450 kg CO₂e</div>
                <div className="w-12 justify-start text-Text-Secondary/80 text-sm font-medium font-['Inter'] leading-none">36%</div>
              </div>
              <div className="self-stretch inline-flex justify-center items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                <div className="flex-1 justify-start text-base-card-foreground text-sm font-medium font-['Inter'] leading-none">Waste</div>
                <div className="flex-1 justify-start text-base-card-foreground text-sm font-medium font-['Inter'] leading-none">450 kg CO₂e</div>
                <div className="w-12 justify-start text-Text-Secondary/80 text-sm font-medium font-['Inter'] leading-none">36%</div>
              </div>
              <div className="self-stretch inline-flex justify-center items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <div className="flex-1 justify-start text-base-card-foreground text-sm font-medium font-['Inter'] leading-none">Water</div>
                <div className="flex-1 justify-start text-base-card-foreground text-sm font-medium font-['Inter'] leading-none">450 kg CO₂e</div>
                <div className="w-12 justify-start text-Text-Secondary/80 text-sm font-medium font-['Inter'] leading-none">36%</div>
              </div>
              <div className="self-stretch inline-flex justify-center items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <div className="flex-1 justify-start text-base-card-foreground text-sm font-medium font-['Inter'] leading-none">Purchased Goods</div>
                <div className="flex-1 justify-start text-base-card-foreground text-sm font-medium font-['Inter'] leading-none">450 kg CO₂e</div>
                <div className="w-12 justify-start text-Text-Secondary/80 text-sm font-medium font-['Inter'] leading-none">36%</div>
              </div>
              <div className="self-stretch inline-flex justify-center items-center gap-2">
                <div className="w-2 h-2 bg-base-chart-1 rounded-full" />
                <div className="flex-1 justify-start text-base-card-foreground text-sm font-medium font-['Inter'] leading-none">Others</div>
                <div className="flex-1 justify-start text-base-card-foreground text-sm font-medium font-['Inter'] leading-none">450 kg CO₂e</div>
                <div className="w-12 justify-start text-Text-Secondary/80 text-sm font-medium font-['Inter'] leading-none">36%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full border-l border-base-border mx-3"></div>

        <div className="flex-1 min-w-60 flex flex-col justify-start items-start gap-3">
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="flex-1 justify-start text-base-muted-foreground text-sm font-medium font-['Inter'] leading-tight">Recommendations Just for You</div>
            <Button variant='secondaryOutlined'>See All</Button>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch px-2 py-1 bg-neutral-700/20 rounded-md inline-flex justify-between items-center gap-2">
                <div className="flex-1 justify-start text-base-card-foreground text-sm font-medium font-['Inter'] leading-none">Switch to LED lighting in office spaces.</div>
                <ChevronRight className="w-5 h-5 text-base-muted-foreground" />
              </div>

              <div className="self-stretch px-2 py-1 bg-neutral-700/20 rounded-md inline-flex justify-between items-center gap-2">
                <div className="flex-1 justify-start text-base-card-foreground text-sm font-medium font-['Inter'] leading-none">Optimize delivery routes to reduce fuel usage.</div>
                <ChevronRight className="w-5 h-5 text-base-muted-foreground" />
              </div>

              <div className="self-stretch px-2 py-1 bg-neutral-700/20 rounded-md inline-flex justify-between items-center gap-2">
                <div className="flex-1 justify-start text-base-card-foreground text-sm font-medium font-['Inter'] leading-none">Start a waste separation system for recycling.</div>
                <ChevronRight className="w-5 h-5 text-base-muted-foreground" />
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-center items-start gap-2">
              <div className="self-stretch justify-start text-base-muted-foreground text-sm font-normal font-['Inter'] leading-none">*Based on your recent data</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
