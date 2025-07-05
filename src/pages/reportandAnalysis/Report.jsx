import ReportModel from "@/components/Models/ReportModel";
import ReportTable from "./ui/ReportTable";
import api from "@/lib/api";
import Overlay from "@/components/ui/Overlay";
import { useRef } from "react";
import { useEffect } from "react";
import { setupCarbonWiseDB, useReportsDB } from "@/hooks/useReportsDB";

function Reports() {
  const overlayRef = useRef(null);

  useEffect(() => {
    setupCarbonWiseDB();
  }, []);

  const { getAll } = useReportsDB();

  const showModel = (model) => overlayRef.current.showModel(model);

  const showDataModel = (data) => showModel(<ReportModel {...data}/>)

  // useEffect(()=>{
  //   setTimeout(()=>showModel(<ReportModel title="Hello" emissoin={{energy:10, transport:20, water:30, waste:40, other:50}} recommendations={{count: 10, finantialCost: 300000, implementationCost:34234223}}/>), 1000)
  // },[])

  // api.emissionEntries.get().then((data) => console.log(data));
  // api.recommendations.get().then((data) => console.log(data));
  return (
    <>
      <div>
        <div className="self-stretch px-6 pt-8 inline-flex justify-center items-center gap-6">
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-start text-white text-xl font-semibold font-['Plus_Jakarta_Sans']">
              Reports & Analysis
            </div>
            <div className="self-stretch justify-start text-white text-sm font-normal font-['Plus_Jakarta_Sans'] leading-tight">
              View, analyze, and share your carbon intelligence reports. Compare
              past assessments, track progress, and generate actionable
              insights.
            </div>
          </div>
          {/* <div
            data-show-left-icon="true"
            data-show-right-icon="false"
            data-size="default"
            data-state="Default"
            data-variant="Outline"
            className="h-10 px-4 py-2 bg-base-background rounded-md outline outline-offset-[-1px] outline-lime-400 flex justify-center items-center gap-2"
          >
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-2.5 h-2.5 left-[3.33px] top-[3.33px] absolute outline-[1.33px] outline-offset-[-0.67px] outline-lime-400" />
            </div>
            <div className="justify-center text-lime-400 text-sm font-medium font-['Inter'] leading-tight">
              New Calculation
            </div>
          </div> */}
        </div>
        <ReportTable data={getAll} showModel={showDataModel}/>
      </div>
      <Overlay ref={overlayRef} />
    </>
  );
}
export default Reports;
