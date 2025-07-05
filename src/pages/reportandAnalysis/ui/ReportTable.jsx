import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import useOption from "@/hooks/useOption";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

{
  /* <div className="self-stretch inline-flex flex-col justify-start items-start">
  <div className="self-stretch pt-1 pb-3 inline-flex justify-start items-center">
    <div className="flex justify-start items-start">
      <div className="justify-start text-base-muted-foreground text-sm font-normal font-['Plus_Jakarta_Sans'] leading-tight">Title<br/></div>
      <div className="w-6 h-6 relative overflow-hidden">
        <div className="w-3 h-1.5 left-[6px] top-[9px] absolute bg-base-muted-foreground rounded-[1px]" />
      </div>
    </div>
  </div> */
}

/**
 * @typedef {Object} TableRowData
 * @property {string} title
 * @property {string} category
 * @property {number} carbonImpact
 * @property {number} financialImpact
 * @property {number} implementationCost
 * @property {string} implementationCost
 */

/**
 * @param {{ data: TableRowData[] }} props
 */
function ReportTable({ data, showModel }) {




  /** @type {[TableRowData[], React.Dispatch<React.SetStateAction<TableRowData[]>>]} */
  const [content, setContent] = React.useState([]);

  useEffect(()=>{
    data().then(d=>setContent(d))
  },[])

//   console.log(content)

  const {
    options: [byTitle, byDate],
    select: sortBy,
    active: sortedBy,
  } = useOption(2, 1);
  const {
    options: [asc, desc],
    select: orderBy,
    active: orderedBy,
  } = useOption(2, 1);

  useEffect(() => {
    const comp = (() => {
      if (byTitle) return (r) => r.title;
      if (byDate) return (r) => r.date;
    })();
    const ordered = [...content];
    ordered.sort((a, b) => {
      const ca = comp(a);
      const cb = comp(b);
      if (ca == cb) return 0;
      if (ca < cb) return -1;
      if (ca > cb) return 1;
    });
    if (desc) {
      ordered.reverse();
    }

    setContent(ordered);
  }, [sortedBy, orderedBy]);

  const Arrow = () =>
    asc ? <ChevronDownIcon size={16} /> : <ChevronUpIcon size={16} />;

  const sort = (by) => () => {
    if (sortedBy == by) {
      if (desc) {
        orderBy(1);
      } else {
        orderBy(2);
      }
    } else {
      sortBy(by);
      orderBy(1);
    }
  };

  return (
    <div className="w-full p-6 inline-flex justify-start items-start gap-6 flex-wrap content-start">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-base-muted-foreground font-normal font-['Plus_Jakarta_Sans']">
              <div onClick={sort(1)} className="flex items-center gap-1">
                <span>Report Name</span>
                <div className={!byTitle ? "invisible" : ""}>
                  <Arrow />
                </div>
              </div>
            </TableHead>
            <TableHead className="w-80 text-base-muted-foreground font-normal font-['Plus_Jakarta_Sans']">
              <div onClick={sort(2)} className="flex items-center gap-1">
                <span>Date Created</span>
                <div className={!byDate ? "invisible" : ""}>
                  <Arrow />
                </div>
              </div>
            </TableHead>
            <TableHead className="w-40 text-base-muted-foreground font-normal">
              <div className="flex items-center gap-1">
                <span>Details</span>
              </div>
            </TableHead>
            {/* <TableHead className="w-40 text-base-muted-foreground font-normal">
              <div onClick={sort(3)} className="flex items-center gap-1">
                <span>Carbon Impact(tCO2e/yr)</span>
                <div className={!byCarbonImpact ? "invisible" : ""}>
                  <Arrow />
                </div>
              </div>
            </TableHead>
            <TableHead className="w-40 text-base-muted-foreground font-normal">
              <div onClick={sort(4)} className="lex items-center gap-1">
                <span>Financial Impact($/yr)</span>
                <div className={!byFinancialImpact ? "invisible" : ""}>
                  <Arrow />
                </div>
              </div>
            </TableHead>
            <TableHead className="w-40 text-base-muted-foreground font-normal">
              <div onClick={sort(5)} className="flex items-center gap-1">
                <span>Implementation Cost ($)</span>
                <div className={!byCost ? "invisible" : ""}>
                  <Arrow />
                </div>
              </div>
            </TableHead>
            <TableHead className="w-40 text-base-muted-foreground font-normal">
              <div onClick={sort(6)} className="flex items-center gap-1">
                <span>Priority</span>
                <div className={!byPriority ? "invisible" : ""}>
                  <Arrow />
                </div>
              </div>
            </TableHead>
            <TableHead className="w-40 text-base-muted-foreground font-normal">
              <div className="flex items-center gap-1">
                <span>Action</span>
              </div>
            </TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {content.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="font-['Plus_Jakarta_Sans']">
                {row.title}
              </TableCell>
              <TableCell className="font-['Plus_Jakarta_Sans']">
                {row.date}
              </TableCell>
              <TableCell className="font-['Plus_Jakarta_Sans']">
                <Button variant="secondary" onClick={()=> showModel(row)}>View Details</Button>
              </TableCell>
              {/* <TableCell className="font-['Plus_Jakarta_Sans']">
                {row.carbonImpact}
              </TableCell>
              <TableCell className="font-['Plus_Jakarta_Sans']">
                {row.financialImpact.toLocaleString()}
              </TableCell>
              <TableCell className="font-['Plus_Jakarta_Sans']">
                {row.implementationCost.toLocaleString()}
              </TableCell>
              <TableCell className="font-['Plus_Jakarta_Sans']">
                <ColorPill difficulty={row.implementationDifficulty} />
              </TableCell>
              <TableCell className="font-['Plus_Jakarta_Sans']">
                <IconButton variant="secondary" Icon={PlusIcon}>
                  Add to Plan
                </IconButton>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ReportTable;
