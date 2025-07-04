import React, { useState, useEffect } from "react";

import Breadcrumb from "@/components/ui/Breadcrumb";
import { PanelLeftIcon, SearchIcon } from "lucide-react";

import { IconButton, IconButtonR, Button } from "@/components/ui/Button";

import { PlusIcon, Calendar1Icon, ChevronDown, ChevronRight, TrendingUp } from 'lucide-react'
import LineChart from "@/components/chart/lineChart";
import EmissionsChart from "@/components/chart/piChart";
import api from "@/lib/api";
import {saveEmissionDataCategoriesToLocalStorage, saveDashboardRecommendationSummery} from '@/lib/utilsDashboard';

function Dashboard() {

  const [totalEmmision, setTotalEmmision] = useState(15.11);

  {/*Goal progress*/ }
  const currentGoalProgress = 1789;
  const totalGoalForProgress = 2500;
  const goalProgressPercentage = (currentGoalProgress / totalGoalForProgress) * 100;

  {/*Emmision per employee*/ }
  const currentEmissions = 50;
  const benchmarkEmissions = 110;
  const emissionsProgressPercentage = (currentEmissions / benchmarkEmissions) * 100;


  saveEmissionDataCategoriesToLocalStorage()
  const monthlyEmissions = JSON.parse(localStorage.getItem("monthlyEmissions"));
  const total = JSON.parse(localStorage.getItem("totalEmissions"));

  saveDashboardRecommendationSummery();

  const RECOMMENDATIONS = JSON.parse(localStorage.getItem("dashboardRecommendations"));

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
        <div className="flex-1 p-4 rounded-2xl outline-1 outline-offset-[-1px] outline-base-border inline-flex flex-col justify-start items-start gap-3 relative">
          <div
            className="absolute inset-0 z-10 backdrop-blur-md bg-black/20 pointer-events-auto"
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
          <div className="self-stretch inline-flex justify-center items-center gap-2 relative z-20">
            <div className="flex-1 justify-start text-base-muted-foreground text-sm font-medium font-['Inter'] leading-tight">Goal Progress</div>
            <Button variant='secondaryOutlined' className="relative z-30 pointer-events-auto">See All</Button>
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
          <div className="flex-1 justify-start text-base-muted-foreground text-sm font-medium font-['Inter'] leading-tight">
            Total Emissions
          </div>
          <div className="flex-1 text-right justify-start text-lime-400 text-sm font-medium font-['Inter'] leading-tight">
            +{totalEmmision}%
          </div>
        </div>
        <div className="self-stretch justify-start text-base-foreground text-3xl font-semibold font-['Inter'] leading-9">
          {Intl.NumberFormat('en-US').format(total)} kg CO₂e
        </div>

        <LineChart emissionsData={monthlyEmissions} />
      </div>



      <div className="self-stretch p-4 rounded-2xl outline-1 outline-offset-[-1px] outline-base-border flex justify-start items-start gap-6 mx-6">
        <div className="flex-1 min-w-80 flex flex-col justify-between gap-6">
          <div className="flex-1 flex flex-col justify-between gap-4">
            <EmissionsChart />
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
              {RECOMMENDATIONS.map((rec, idx) => (
                <div
                  key={idx}
                  className="self-stretch px-2 py-1 bg-neutral-700/20 rounded-md inline-flex justify-between items-center gap-2"
                >
                  <div className="flex-1 justify-start text-base-card-foreground text-sm font-medium font-['Inter'] leading-none">
                    {rec}
                  </div>
                  <ChevronRight className="w-5 h-5 text-base-muted-foreground" />
                </div>
              ))}
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
