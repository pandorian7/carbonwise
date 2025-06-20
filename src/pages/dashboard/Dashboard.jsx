import React from "react";

import Breadcrumb from "@/Components/ui/Breadcrumb";
import { PanelLeftIcon, SearchIcon } from "lucide-react";

import { IconButton } from "@/Components/ui/Button";

import {PlusIcon} from 'lucide-react'

function Dashboard() {
  return (
    <><div data-breadcrumb="false" data-breakpoint="Desktop" data-button-1="true" data-button-2="true" data-button-3="false" data-button-4="false" data-buttons="true" data-description="false" data-page-select="false" className="self-stretch h-20 py-6 bg-base-background border-b border-base-border inline-flex flex-col justify-start items-center gap-6 overflow-hidden">
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
    </div></>
  );
}

export default Dashboard;
