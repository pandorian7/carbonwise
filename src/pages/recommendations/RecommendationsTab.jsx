import React from "react";
import Card from "./ui/RecommendationCard";
import { Input } from "@/components/ui/input";
import Table from "./ui/Table";

function RecommendationsTab() {
  return (
    <div className="self-stretch pt-4 inline-flex flex-col justify-start items-start">
      <div className="self-stretch px-6 py-4 flex flex-col justify-center items-center gap-2">
        <div className="self-stretch justify-start text-white text-xl font-semibold font-['Plus_Jakarta_Sans']">
          Immediate Opportunities
        </div>
        <div className="self-stretch justify-start text-white text-sm font-normal font-['Plus_Jakarta_Sans'] leading-tight">
          These measures can be implemented within 30 days with minimal
          investment
        </div>
      </div>
      <div className="w-full px-6 pb-6 inline-flex justify-start items-start gap-6 flex-wrap content-start">
        <div className="flex-1 flex flex-wrap justify-between items-start gap-4">
          <Card
            title="Switch to LED Lighting"
            content={{
              carbonImapct: 45,
              benefits: 32500,
              paybackPerios: 7,
              difficulty: "Low",
            }}
          />
          <Card
            title="Switch to LED Lighting"
            content={{
              carbonImapct: 45,
              benefits: 32500,
              paybackPerios: 7,
              difficulty: "Low",
            }}
          />
          <Card
            title="Switch to LED Lighting"
            content={{
              carbonImapct: 45,
              benefits: 32500,
              paybackPerios: 7,
              difficulty: "Low",
            }}
          />
          <Card
            title="Switch to LED Lighting"
            content={{
              carbonImapct: 45,
              benefits: 32500,
              paybackPerios: 7,
              difficulty: "Low",
            }}
          />
        </div>
      </div>
      <div
        data-breakpoint="Desktop"
        data-description="true"
        data-filters="true"
        data-primary-button="false"
        data-search-dropdown="true"
        data-search="true"
        className="self-stretch p-6 inline-flex justify-between items-end"
      >
        <div className="flex-1 max-w-[720px] inline-flex flex-col justify-start items-start gap-1">
          <div className="self-stretch justify-start text-base-foreground text-xl font-semibold font-['Inter'] leading-7">
            All Recommendations
          </div>
          <div className="self-stretch justify-start text-base-muted-foreground text-sm font-normal font-['Inter'] leading-tight">
            *Based on your recent data
          </div>
        </div>
        <div className="flex justify-start items-center gap-3">
          {/* <div
            data-horizontal-layout="No"
            data-show-description="false"
            data-show-icon="true"
            data-show-label="false"
            data-show-link="false"
            data-state="Default"
            data-variant="Default"
            className="w-72 inline-flex flex-col justify-start items-start gap-2"
          >
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch h-10 px-3 py-2 bg-base-background rounded-md outline outline-1 outline-offset-[-1px] outline-base-input inline-flex justify-start items-center gap-1 overflow-hidden">
                <div className="w-4 h-4 relative overflow-hidden">
                  <div className="w-3 h-3 left-[2px] top-[2px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-base-muted-foreground" />
                </div>
                <div className="flex-1 justify-start text-base-muted-foreground text-sm font-normal font-['Inter'] leading-tight">
                  Search
                </div>
              </div>
            </div>
          </div> */}
          <Input type="text" placeholder="Search" className="placeholder:font-['Inter'] w-100"/>
          {/* <div
            data-show-left-icon="true"
            data-show-right-icon="false"
            data-size="default"
            data-state="Default"
            data-variant="Outline"
            className="h-10 px-4 py-2 bg-base-background rounded-md outline outline-1 outline-offset-[-1px] outline-base-input flex justify-center items-center gap-2"
          >
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-3 h-2 left-[2px] top-[4px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-base-foreground" />
            </div>
            <div className="justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
              Filters
            </div>
          </div> */}
        </div>
      </div>
      <Table data={[{title: "Led lighting rooftop", category: "Energy", carbonImpact: 43.5, finantialImpact: 36500, cost: 64500, priority: "Low"}]}/>
    </div>
  );
}

export default RecommendationsTab;
