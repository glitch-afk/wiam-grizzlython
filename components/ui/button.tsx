"use client"

import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"

import { Icons } from "@/components/icons"

import { cn } from "@/lib/utils"
import ButtonDrip from "./button-drip"

const buttonVariants = cva(
  "relative inline-flex shrink-0 overflow-hidden items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-dark-500",
  {
    variants: {
      variant: {
        default: "bg-white text-dark-700 hover:bg-dark-50 focus:ring-white",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
        outline: "bg-transparent border border-dark-400 hover:bg-dark-400",
        subtle:
          "bg-dark-500 text-dark-50 hover:bg-dark-400 hover:text-white focus:ring-dark-500",
        ghost:
          "bg-transparent hover:bg-dark-400 data-[state=open]:bg-transparent focus:ring-dark-400",
        link: "bg-transparent underline-offset-4 hover:underline text-brand-50 hover:bg-transparent hover:text-white",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
      shape: {
        pill: "rounded-full",
        rounded: "rounded-md lg:rounded-lg",
        default: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  isLoading?: boolean
  disabled?: boolean
  fullWidth?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      shape,
      isLoading,
      fullWidth,
      onClick,
      ...props
    },
    ref: React.Ref<HTMLButtonElement | null>
  ) => {
    const [dripShow, setDripShow] = React.useState<boolean>(false)
    const [dripX, setDripX] = React.useState<number>(0)
    const [dripY, setDripY] = React.useState<number>(0)

    const buttonRef = React.useRef<HTMLButtonElement>(null)
    React.useImperativeHandle(ref, () => buttonRef.current)
    function dripCompletedHandle() {
      setDripShow(false)
      setDripX(0)
      setDripY(0)
    }
    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!isLoading && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        setDripShow(true)
        setDripX(event.clientX - rect.left)
        setDripY(event.clientY - rect.top)
      }
      onClick && onClick(event)
    }

    return (
      <button
        className={cn(
          buttonVariants({ variant, size, shape, className }),
          isLoading && "pointer-events-auto cursor-default focus:outline-none",
          fullWidth && "w-full"
        )}
        ref={buttonRef}
        onClick={clickHandler}
        {...props}
      >
        {isLoading && <Icons.loader className="mr-2 h-auto w-5 animate-spin" />}
        <span>{children}</span>
        {dripShow && (
          <ButtonDrip
            x={dripX}
            y={dripY}
            color={"rgba(255, 255, 255, 0.3)"}
            fullWidth={fullWidth}
            onCompleted={dripCompletedHandle}
          />
        )}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
