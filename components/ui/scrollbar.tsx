import {
  OverlayScrollbarsComponent,
  OverlayScrollbarsComponentProps,
} from "overlayscrollbars-react"

import { cn } from "@/lib/utils"

interface ScrollbarProps extends OverlayScrollbarsComponentProps {
  style?: React.CSSProperties
  className?: string
  autoHide?: "never" | "scroll" | "leave" | "move"
}

export default function Scrollbar({
  options,
  style,
  className,
  autoHide = "scroll",
  ...props
}: React.PropsWithChildren<ScrollbarProps>) {
  return (
    <OverlayScrollbarsComponent
      options={{
        // @ts-ignore
        className: cn("os-theme-thin", className),
        scrollbars: {
          autoHide: autoHide,
        },
        ...options,
      }}
      style={style}
      {...props}
    />
  )
}
