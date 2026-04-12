/* eslint-disable react-refresh/only-export-components -- CVA variants co-exported like shadcn/ui */
import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/15 text-primary border-primary/20",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        outline: "text-foreground border-border",
        muted:
          "border-border/60 bg-muted/50 text-muted-foreground",
        heroAvailability:
          "inline-flex items-center rounded-full border-border/70 bg-card/95 px-3 py-1 text-primary shadow-sm backdrop-blur-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
