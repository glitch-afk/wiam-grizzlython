import React from "react"

import { cn } from "@/lib/utils"
import Input from "@/components/ui/input"
import Button from "./ui/button"

interface AddProjectFormProps extends React.HTMLAttributes<HTMLDivElement> {
  cardTitle?: string
  children?: React.ReactNode
}

const AddProjectForm = ({
  cardTitle,
  children,
  className,
  ...props
}: AddProjectFormProps) => {
  return (
    <div
      className={cn(
        "border-brand-500 bg-brand-600 w-full max-w-md rounded-xl border-2 px-6 py-12",
        className
      )}
      {...props}
    >
      <h2 className="mb-5 text-center text-xl font-semibold">{cardTitle}</h2>
      <p className="text-brand-100 text-center text-sm md:text-base">
        Adding your project will help you to track and analyze your project
        metrics.
      </p>
      <form
        className="mt-6 grid w-full items-center gap-y-4"
        // onSubmit={}              // TODO
      >
        <Input
          placeholder="e.g. Cron app"
          type="text"
          id="projectName"
          label="Project Name"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
        />

        <Input
          placeholder="e.g. cron.com"
          type="url"
          label="Project Link"
          id="projectUrl"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
        />

        <Button fullWidth color="white" shape="rounded">
          Next
        </Button>
      </form>
      {children}
    </div>
  )
}

export default AddProjectForm
