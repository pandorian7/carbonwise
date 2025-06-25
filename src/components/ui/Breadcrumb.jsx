import {ChevronRightIcon} from 'lucide-react'

function Breadcrumb({title, Icon}) {
  return (
    <div className="self-stretch h-16 bg-base-background border-b border-base-border inline-flex justify-center items-center">
          <div className="flex-1 px-6 flex justify-start items-center gap-2">
            <div
              data-state="Default"
              className="w-7 h-7 rounded-md flex justify-center items-center"
            >
              <div className="w-4 h-4 relative overflow-hidden">
                <Icon className="text-base-foreground icon16" />
              </div>
            </div>
            <div className="w-2 flex justify-start items-center">
              <div className="w-0 h-3.5 relative">
                <div className="w-0 h-3.5 left-0 top-0 absolute outline  outline-offset-[-0.50px] outline-base-border" />
              </div>
            </div>
            <div
              data-breadcrumb-1="true"
              data-breadcrumb-2="false"
              data-breadcrumb-3="false"
              data-breadcrumb-4="false"
              data-breadcrumb-5="false"
              data-size="md"
              className="flex justify-start items-center gap-2.5 flex-wrap content-center"
            >
              <div
                data-state="Default"
                data-variant="Link Current"
                className="flex justify-center items-center gap-2.5"
              >
                <div className="justify-start text-base-sidebar-foreground text-sm font-normal font-['Inter'] leading-none">
                  {title}
                </div>
              </div>
              <div className="w-6 h-6 relative overflow-hidden">
                <ChevronRightIcon className="text-base-foreground" style={{width: '24px', height: '24px'}}/>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Breadcrumb