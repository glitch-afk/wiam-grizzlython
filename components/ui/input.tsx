import { forwardRef } from "react"

import { cn } from "@/lib/utils"

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string
  error?: string
  className?: string
  inputClassName?: string
  useUppercaseLabel?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      type = "text",
      className,
      inputClassName,
      useUppercaseLabel = false,
      ...props
    },
    ref
  ) => (
    <div className={cn("text-xs sm:text-sm", className)}>
      <label>
        {label && (
          <span
            className={cn(
              "text-brand-100 block font-medium",
              useUppercaseLabel ? "mb-1 uppercase sm:mb-2" : "mb-1"
            )}
          >
            {label}

            {props.required && (
              <sup className="ml-1 inline-block text-[13px] text-red-500">
                *
              </sup>
            )}
          </span>
        )}
        <input
          type={type}
          ref={ref}
          {...props}
          className={cn(
            "bg-brand-500 placeholder:text-brand-200 border-brand-400 focus:ring-brand-300 focus:border-brand-300 disabled:border-brand-200 disabled:bg-brand-400 mt-1 block h-10 w-full  rounded-md border px-4 py-2 text-sm transition-shadow duration-200 focus:outline-none focus:ring-1 focus:invalid:border-red-500 focus:invalid:ring-red-500 disabled:text-gray-500 sm:h-12 sm:rounded-lg",
            inputClassName
          )}
        />
      </label>
      {error && (
        <span role="alert" className="mt-2 block text-red-500 sm:mt-2.5">
          {error}
        </span>
      )}
    </div>
  )
)

Input.displayName = "Input"
export default Input
