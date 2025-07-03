import React from "react";

export default function LineChart({ emissionsData, chartWidth = 1440, chartHeight = 192 }) {
  // Chart dimensions and padding
  const CHART_HEIGHT = chartHeight;
  const CHART_WIDTH = chartWidth;
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
    <div className="self-stretch py-6 flex flex-col justify-start items-start gap-2.5">
      <div
        data-show-grid="true"
        data-show-legend="false"
        data-type="Linear"
        className="self-stretch h-48 flex flex-col justify-end items-center gap-9"
      >
        <div className="self-stretch flex-1 relative">
          <svg
            width="100%"
            height="100%"
            viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
            preserveAspectRatio="none"
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
                y={CHART_HEIGHT - 20}
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
  );
} 