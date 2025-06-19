import React from 'react'

import Breadcrumb from '@/Components/ui/Breadcrumb'
import {PanelLeftIcon} from 'lucide-react'

function Dashboard() {
  return (
    <div className="flex-1 self-stretch min-w-[560px] bg-base-background rounded-tl-2xl rounded-tr-2xl inline-flex flex-col justify-start items-center overflow-hidden">
        <Breadcrumb title={"Dashboard"} Icon={PanelLeftIcon}/>
        {/* content */}
      </div>
  )
}

export default Dashboard