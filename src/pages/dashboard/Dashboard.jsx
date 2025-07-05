import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { PanelLeftIcon, SearchIcon } from "lucide-react";
import { IconButton, IconButtonR, Button } from "@/components/ui/Button";
import { PlusIcon, Calendar1Icon, ChevronDown, ChevronRight, TrendingUp } from 'lucide-react'
import LineChart from "@/components/chart/lineChart";
import EmissionsChart from "@/components/chart/piChart";
import { MoonLoader } from "react-spinners";
import { 
  fetchAndStoreEmissionData, 
  fetchAndStoreRecommendations,
  getCachedData,
  getBenchmarkByPeriod
} from '@/lib/utilsDashboard';
import api from '@/lib/api';

function Dashboard({ changeView }) {

  const [totalEmmision, setTotalEmmision] = useState(15.11);
  const [selectedPeriod, setSelectedPeriod] = useState('Daily');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const [monthlyEmissions, setMonthlyEmissions] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentEmissions, setCurrentEmissions] = useState(0);
  const [recommendations, setRecommendations] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // New state for categorized period emissions
  const [periodEmissions, setPeriodEmissions] = useState({
    Daily: 0,
    Monthly: 0,
    Annually: 0
  });

  useEffect(() => {
    loadDashboardData();
  }, []);

  // Update current emissions when selected period changes
  useEffect(() => {
    if (periodEmissions[selectedPeriod] !== undefined) {
      setCurrentEmissions(periodEmissions[selectedPeriod]);
      console.log('Period changed to:', selectedPeriod, 'Emissions:', periodEmissions[selectedPeriod]);
    }
  }, [selectedPeriod, periodEmissions]);

  // Single function to calculate all period emissions from raw data
  const calculateAllPeriodEmissions = (data) => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const currentDay = today.getDate();
    
    const periods = {
      Daily: 0,
      Monthly: 0,
      Annually: 0
    };
    
    data.forEach(entry => {
      if (!entry.date || typeof entry.co2Emission !== 'number') return;
      
      const entryDate = new Date(entry.date);
      const emission = entry.co2Emission;
      
      // Daily - only today's entries
      if (entryDate.getDate() === currentDay && 
          entryDate.getMonth() === currentMonth && 
          entryDate.getFullYear() === currentYear) {
        periods.Daily += emission;
      }
      
      // Monthly - current month's entries
      if (entryDate.getMonth() === currentMonth && 
          entryDate.getFullYear() === currentYear) {
        periods.Monthly += emission;
      }
      
      // Annually - current year's entries
      if (entryDate.getFullYear() === currentYear) {
        periods.Annually += emission;
      }
    });
    
    // Round to 2 decimal places
    Object.keys(periods).forEach(period => {
      periods[period] = parseFloat(periods[period].toFixed(2));
    });
    
    return periods;
  };

  const loadDashboardData = async () => {
    setIsLoading(true);
    try {
      const cachedData = getCachedData();
      
      if (cachedData.lastUpdated) {
        setMonthlyEmissions(cachedData.monthlyEmissions || []);
        setTotal(cachedData.totalEmissions || 0);
        setRecommendations(cachedData.dashboardRecommendations);
        
        // Use cached period emissions if available
        if (cachedData.periodEmissions) {
          setPeriodEmissions(cachedData.periodEmissions);
          setCurrentEmissions(cachedData.periodEmissions[selectedPeriod] || 0);
        }
        
        setIsLoading(false);
      } else {
        // Fallback to localStorage if cache is empty
        const storedMonthlyEmissions = JSON.parse(localStorage.getItem("monthlyEmissions") || "[]");
        const storedTotal = JSON.parse(localStorage.getItem("totalEmissions") || "0");
        const storedRecommendations = JSON.parse(localStorage.getItem("dashboardRecommendations") || "null");
        const storedPeriodEmissions = JSON.parse(localStorage.getItem("periodEmissions") || "null");

        setMonthlyEmissions(storedMonthlyEmissions);
        setTotal(storedTotal);
        setRecommendations(storedRecommendations);
        
        if (storedPeriodEmissions) {
          setPeriodEmissions(storedPeriodEmissions);
          setCurrentEmissions(storedPeriodEmissions[selectedPeriod] || 0);
        }
        
        setIsLoading(false);
      }

      // Fetch fresh data in background and update cache
      const [emissionData, recommendationsData] = await Promise.allSettled([
        fetchAndStoreEmissionData(),
        fetchAndStoreRecommendations()
      ]);

      // Update state with fresh data if successful
      if (emissionData.status === 'fulfilled') {
        const freshCachedData = getCachedData();
        setMonthlyEmissions(freshCachedData.monthlyEmissions || []);
        setTotal(freshCachedData.totalEmissions || 0);
      }

      if (recommendationsData.status === 'fulfilled') {
        const freshCachedData = getCachedData();
        setRecommendations(freshCachedData.dashboardRecommendations);
      }

      // Fetch user emission data directly and calculate periods
      try {
        const userEmissionResponse = await api.emissionEntries.get();
        const userData = Array.isArray(userEmissionResponse) && userEmissionResponse.length > 0 ? userEmissionResponse : [];
        
        const calculatedPeriods = calculateAllPeriodEmissions(userData);
        setPeriodEmissions(calculatedPeriods);
        
        // Set current emissions based on selected period
        setCurrentEmissions(calculatedPeriods[selectedPeriod]);
        
        // Update cache with period emissions
        const updatedCache = getCachedData();
        updatedCache.periodEmissions = calculatedPeriods;
        updatedCache.lastUpdated = Date.now();
        
        // Save to localStorage
        localStorage.setItem("periodEmissions", JSON.stringify(calculatedPeriods));
        
        console.log('Calculated period emissions:', calculatedPeriods);
        console.log('Selected period:', selectedPeriod);
        console.log('Current emissions set to:', calculatedPeriods[selectedPeriod]);
      } catch (error) {
        console.error("Error fetching user emission data:", error);
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error loading dashboard data:", error);
      setIsLoading(false);
    }
  };

  // Function to format date based on selected period
  const getFormattedDate = () => {
    const today = new Date();
    
    switch (selectedPeriod) {
      case 'Daily':
        return today.toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric' 
        });
      case 'Monthly':
        return today.toLocaleDateString('en-US', { 
          month: 'long', 
          year: 'numeric' 
        });
      case 'Annually':
        return `${today.getFullYear()} Year`;
      default:
        return today.toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric' 
        });
    }
  };

  // Function to handle period selection
  const handlePeriodSelect = (period) => {
    setSelectedPeriod(period);
    setIsDropdownOpen(false);
  };

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  {/*Goal progress*/ }
  const currentGoalProgress = 1789;
  const totalGoalForProgress = 2500;
  const goalProgressPercentage = (currentGoalProgress / totalGoalForProgress) * 100;

  {/*Emmision per employee*/ }
  const benchmarkEmissions = getBenchmarkByPeriod(selectedPeriod);
  const emissionsProgressPercentage = (currentEmissions / benchmarkEmissions) * 100;

  const navigate = useNavigate()

  const handleNavigatePricing = () => {
    navigate("/pricing");
  }

  const goToRecommedationTab = () => {
    changeView(3)();
  }

  const goToCarbonCalculator = () => {
    changeView(2)();
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-base-muted-foreground">Loading dashboard data...</div>
      </div>
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
            <IconButton Icon={PlusIcon} variant='default' onClick={goToCarbonCalculator}>New Calculation</IconButton>
          </div>
        </div>
      </div>

      <div className="self-stretch inline-flex justify-between items-center  my-6 mx-6">
        <div data-active="Yes" data-show-description="false" data-show-label="false" data-state="Default" className="w-72 inline-flex flex-col justify-start items-start gap-2">

          <IconButton Icon={Calendar1Icon} variant='secondaryOutlined'>{getFormattedDate()}</IconButton>
        </div>
        <div className="flex justify-start items-center gap-3 relative dropdown-container">
          <IconButtonR Icon={ChevronDown} variant='secondaryOutlined' onClick={toggleDropdown}>{selectedPeriod}</IconButtonR>
          
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full mt-2 right-0 bg-base-background border border-base-border rounded-lg shadow-lg z-50 min-w-[120px]">
              <div className="py-1">
                <button
                  onClick={() => handlePeriodSelect('Daily')}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-base-sidebar-accent ${
                    selectedPeriod === 'Daily' ? 'bg-base-sidebar-accent text-base-foreground' : 'text-base-muted-foreground'
                  }`}
                >
                  Daily
                </button>
                <button
                  onClick={() => handlePeriodSelect('Monthly')}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-base-sidebar-accent ${
                    selectedPeriod === 'Monthly' ? 'bg-base-sidebar-accent text-base-foreground' : 'text-base-muted-foreground'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => handlePeriodSelect('Annually')}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-base-sidebar-accent ${
                    selectedPeriod === 'Annually' ? 'bg-base-sidebar-accent text-base-foreground' : 'text-base-muted-foreground'
                  }`}
                >
                  Annually
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="self-stretch rounded-md inline-flex justify-start items-start gap-6 mx-6">
        <div className="flex-1 p-4 rounded-2xl outline-1 outline-offset-[-1px] outline-base-border inline-flex flex-col justify-start items-start gap-3 relative">
          <div
            className="absolute inset-0 z-10 backdrop-blur-sm bg-black/5 pointer-events-auto"
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
          <div className="self-stretch inline-flex justify-center items-center gap-2 relative z-20">
            <div className="flex-1 justify-start text-base-muted-foreground text-sm font-medium font-['Inter'] leading-tight">Goal Progress</div>
            <Button variant='secondaryOutlined' className="relative z-30 pointer-events-auto" onClick={handleNavigatePricing} >See All</Button>
          </div>
          <div className="self-stretch justify-start text-base-foreground text-3xl font-semibold font-['Inter'] leading-9">1,789,256</div>
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
                className="h-10 left-0 top-0 absolute bg-lime-400 transition-all duration-500 ease-in-out"
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
            <div className="flex-1 justify-start text-base-muted-foreground text-sm font-medium font-['Inter'] leading-tight">{selectedPeriod} Emissions</div>
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
                className="h-10 left-0 top-0 absolute bg-lime-400 transition-all duration-500 ease-in-out"
                style={{ width: `${emissionsProgressPercentage}%` }}
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-start items-start gap-2 flex-wrap content-start">
              <div className="flex-1 justify-start text-base-card-foreground text-sm font-medium font-['Inter'] leading-none">Benchmark: {benchmarkEmissions} kg (industry average)</div>
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

        {monthlyEmissions && monthlyEmissions.length > 0 ? (
          <LineChart emissionsData={monthlyEmissions} />
        ) : (
          <div className="flex w-full h-full justify-center items-center">
            <span className="text-base-muted-foreground text-lg font-medium">No data available</span>
          </div>
        )}
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
            <Button variant='secondaryOutlined' onClick={goToRecommedationTab}>See All</Button>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            {recommendations && recommendations.length > 0 ? (
              <>
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  {recommendations.map((rec, idx) => (
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
              </>
            ) : (
              <div className="flex w-full h-full justify-center items-center">
                <span className="text-base-muted-foreground text-lg font-medium">No data available</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
