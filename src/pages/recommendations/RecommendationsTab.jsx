import React from "react";
import Card from "./ui/RecommendationCard";
import { Input } from "@/components/ui/input";
import Table from "./ui/Table";

import useSWR from "swr";
import api from "@/lib/api";

import { MoonLoader } from "react-spinners";

function Loading() {
  return (
    <div className="flex w-full h-full justify-center items-center font-['Plus_Jakarta_Sans']">
      <MoonLoader color="var(--color-lime-400)" size={50} />{" "}
      <snap className="text-5xl ml-3">Loading</snap>
    </div>
  );
}
function Content({ data }) {

  console.log(data)

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
        <div className="flex-1 flex flex-wrap w-full justify-between items-start gap-4">
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
          <Input
            type="text"
            placeholder="Search"
            className="placeholder:font-['Inter'] w-100"
          />
        </div>
      </div>
      <Table
        data={[
          {
            title: "Led lighting rooftop",
            category: "Energy",
            carbonImpact: 43.5,
            finantialImpact: 36500,
            cost: 64500,
            priority: "Low",
          },
        ]}
      />
    </div>
  );
}

function RecommendationsTab() {
  const { data, isLoading } = useSWR(
    "recommendations",
    api.recommendations.get,
    {}
  );
  return isLoading ? <Loading /> : <Content data={data} />;
}

export default RecommendationsTab;
