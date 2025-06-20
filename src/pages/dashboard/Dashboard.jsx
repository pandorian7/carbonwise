import React from "react";

import Breadcrumb from "@/Components/ui/Breadcrumb";
import { PanelLeftIcon, SearchIcon } from "lucide-react";

import { IconButton, IconButtonR, } from "@/Components/ui/Button";

import { PlusIcon, Calendar1Icon, ChevronDown, ChevronRight, TrendingUp } from 'lucide-react'

function Dashboard() {
  const currentGoalProgress = 1789; 
  const totalGoalForProgress = 2500; 
  const goalProgressPercentage = (currentGoalProgress / totalGoalForProgress) * 100;
  
  const currentEmissions = 50;
  const benchmarkEmissions = 110; 
  const emissionsProgressPercentage = (currentEmissions / benchmarkEmissions) * 100;

  return (
    <>
      <div data-breadcrumb="false" data-breakpoint="Desktop" data-button-1="true" data-button-2="true" data-button-3="false" data-button-4="false" data-buttons="true" data-description="false" data-page-select="false" className="self-stretch py-4 bg-base-background border-b border-base-border inline-flex flex-col justify-start items-center gap-4">
        <div className="w-full max-w-[1280px] px-6 flex flex-col justify-start items-start gap-6">
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
            <div data-show-left-icon="false" data-show-right-icon="false" data-size="sm" data-state="Default" data-variant="Outline" className="h-9 px-3 py-2 bg-base-background rounded-md outline-1 outline-offset-[-1px] outline-base-input flex justify-center items-center gap-2">
              <div className="justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">See All</div>
            </div>
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
            <div data-show-left-icon="false" data-show-right-icon="false" data-size="sm" data-state="Default" data-variant="Outline" className="h-9 px-3 py-2 bg-base-background rounded-md outline-1 outline-offset-[-1px] outline-base-input flex justify-center items-center gap-2">
              <div className="justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">See All</div>
            </div>
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

      <div className="self-stretch p-4 rounded-2xl outline-1 outline-offset-[-1px] outline-base-border inline-flex flex-col justify-start items-start gap-3 my-6 mx-6">
        <div className="self-stretch inline-flex justify-center items-center gap-2">
          <div className="flex-1 justify-start text-base-muted-foreground text-sm font-medium font-['Inter'] leading-tight">Total Emissions</div>
          <div className="flex-1 text-right justify-start text-lime-400 text-sm font-medium font-['Inter'] leading-tight">+15.11%</div>
        </div>
        <div className="self-stretch justify-start text-base-foreground text-3xl font-semibold font-['Inter'] leading-9">1,245 kg CO₂e</div>
        <div className="self-stretch pl-6 py-6 flex flex-col justify-start items-start gap-2.5">
          <div data-show-grid="true" data-show-legend="false" data-type="Linear" className="self-stretch h-48 flex flex-col justify-end items-center gap-9">
            <div className="self-stretch flex-1 relative">
              <div data-horizontal="False" data-show-x-axis="true" data-show-y-axis="true" className="w-[1040.64px] h-48 left-[10.38px] top-0 absolute inline-flex flex-col justify-between items-start">
                <div className="self-stretch h-0 opacity-80 outline-1 outline-offset-[-0.50px] outline-base-border" />
                <div className="self-stretch h-0 opacity-80 outline-1 outline-offset-[-0.50px] outline-base-border" />
                <div className="self-stretch h-0 opacity-80 outline-1 outline-offset-[-0.50px] outline-base-border" />
                <div className="self-stretch h-0 opacity-80 outline-1 outline-offset-[-0.50px] outline-base-border" />
                <div className="self-stretch h-0 opacity-80 outline-1 outline-offset-[-0.50px] outline-base-border" />
                <div className="w-[1065px] left-[-12px] top-[212px] absolute inline-flex justify-between items-center">
                  <div className="text-right justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-3">Jan</div>
                  <div className="text-center justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-3">Feb</div>
                  <div className="text-center justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-3">Mar</div>
                  <div className="text-center justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-3">Apr</div>
                  <div className="text-center justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-3">May</div>
                  <div className="text-center justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-3">Jun</div>
                </div>
                <div className="w-6 h-52 left-[-35px] top-[-6px] absolute flex flex-col justify-between items-center">
                  <div className="self-stretch text-right justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-3">400</div>
                  <div className="self-stretch text-right justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-3">300</div>
                  <div className="self-stretch text-right justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-3">200</div>
                  <div className="self-stretch text-right justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-3">100</div>
                  <div className="self-stretch text-right justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-3">0</div>
                </div>
              </div>
              <div className="w-[1064px] h-36 left-0 top-[48.25px] absolute">
                <div className="w-[1038.76px] h-28 left-[12.13px] top-[3.43px] absolute outline-2 outline-offset-[-1px] outline-lime-400" />
                <div data-custom="False" data-show-dot="false" data-show-label="false" data-size="8" className="max-w-2 min-w-2 max-h-2 min-h-2 left-[8.13px] top-[57.30px] absolute inline-flex flex-col justify-start items-center gap-px" />
                <div data-custom="False" data-show-dot="false" data-show-label="false" data-size="8" className="max-w-2 min-w-2 max-h-2 min-h-2 left-[215.88px] top-[-0.57px] absolute inline-flex flex-col justify-start items-center gap-px" />
                <div data-custom="False" data-show-dot="false" data-show-label="false" data-size="8" className="max-w-2 min-w-2 max-h-2 min-h-2 left-[631.39px] top-[112.25px] absolute inline-flex flex-col justify-start items-center gap-px" />
                <div data-custom="False" data-show-dot="false" data-show-label="false" data-size="8" className="max-w-2 min-w-2 max-h-2 min-h-2 left-[423.63px] top-[32.49px] absolute inline-flex flex-col justify-start items-center gap-px" />
                <div data-custom="False" data-show-dot="true" data-show-label="true" data-size="8" className="max-w-2 min-w-2 max-h-2 min-h-2 left-[839.14px] top-[46.12px] absolute inline-flex flex-col justify-start items-center gap-px">
                  <div className="w-2 h-2 max-w-2 max-h-2 bg-base-chart-1 rounded-full" />
                  <div className="left-[-12px] top-[-16px] absolute text-center justify-start text-base-foreground text-xs font-normal font-['Inter'] leading-3">1,245</div>
                </div>
                <div data-custom="False" data-show-dot="false" data-show-label="false" data-size="8" className="max-w-2 min-w-2 max-h-2 min-h-2 left-[1046.88px] top-[43.68px] absolute inline-flex flex-col justify-start items-center gap-px" />
              </div>
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
            <div data-show-left-icon="false" data-show-right-icon="false" data-size="sm" data-state="Default" data-variant="Outline" className="h-9 px-3 py-2 bg-base-background rounded-md outline-1 outline-offset-[-1px] outline-base-input flex justify-center items-center gap-2">
              <div className="justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">See All</div>
            </div>
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
