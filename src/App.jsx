import React from 'react'

import Sidebar from './Components/Sidebar'
import CarbonCalculator from './pages/carbon-calculator/CarbonCalculator'
import useBooleanSelector from './hooks/useBooleanSelector'
import Dashboard from './pages/dashboard/Dashboard'
import Breadcrumb from './Components/ui/Breadcrumb'
import { PanelLeftIcon } from 'lucide-react'

function App() {
  const titles = ["Dashboard", "Carbon Calculator", "Recommendations", "Reports & Analysis", "Settings"]

  const [
    dashboard,
    calculator,
    recommendations,
    reports,
    settings,
    changeView,
    activeView,
  ] = useBooleanSelector(5, 1);

  const  title = (index) => titles.at(index-1)

  return (
    <div className="w-full h-[100vh] px-2 pt-2 bg-base-sidebar-background inline-flex justify-start items-start overflow-hidden">
      <Sidebar
        activeView={activeView}
        changeView={(n) => () => changeView(n)}
      />
      <div className="flex-1 self-stretch min-w-[560px] bg-base-background rounded-tl-2xl rounded-tr-2xl inline-flex flex-col justify-start items-center overflow-hidden">
         <Breadcrumb title={title(activeView)} Icon={PanelLeftIcon}/>
      {dashboard && <Dashboard />}
      {calculator && <CarbonCalculator />}
    </div>
    </div>
  )
}

export default App