import * as React from "react"
import { cn } from "@/lib/utils"

export const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      className={cn("button-base-styles", className)}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"