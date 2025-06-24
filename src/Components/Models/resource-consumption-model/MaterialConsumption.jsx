import React from 'react'

import { ModelEntry } from '@/components/ui/model/Model'
import TickScale from '@/components/ui/model/TickScale'
import { ModelEntryContainer } from '@/components/ui/model/Model'
import ToggleGroup from '@/components/ui/ToggleGroup'
import { Input } from '@/components/ui/input'
import { SelectExt } from '@/components/ui/select'
import { IconButton } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'

function MaterialConsumption() {
  return (
    <>
      <ModelEntry title={"Company Fleet Fuel Usage (monthly) :"}>
        <TickScale />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" />
          <ToggleGroup options={["Gallons", "Liters"]} selected={"Gallons"} />
        </ModelEntryContainer>
      </ModelEntry>
      <ModelEntry title={"Business Air Travel (monthly) :"}>
        <TickScale />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" />
          <ToggleGroup options={["hrs", "kms"]} selected={"hrs"} />
        </ModelEntryContainer>
      </ModelEntry>
      <ModelEntry title={"Employee Commuting (monthly) :"}>
        <SelectExt
          widthClass="w-28"
          placeholder="Medium"
          items={{ bus: "Bus", train: "Train" }}
        />
        <TickScale />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" />
          <ToggleGroup options={["hrs", "kms"]} selected={"hrs"} />
        </ModelEntryContainer>
      </ModelEntry>
      <IconButton Icon={PlusIcon} variant="secondaryOutlined">
        Add a new commute method
      </IconButton>
    </>
  )
}

export default MaterialConsumption