import React from "react"
import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { siteRoutes } from "@/config/site"
import { userAuthSchema } from "@/lib/schema"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  cardTitle: string
  children: React.ReactNode
}

type FormData = z.infer<typeof userAuthSchema>

const UserAuthForm = ({
  cardTitle,
  className,
  children,
  ...props
}: UserAuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const searchParams = useSearchParams()

  async function onSubmit(data: FormData) {
    setIsLoading(true)
    const signInResult = await signIn("email", {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams.get("from") || "/",
    })

    setIsLoading(false)

    if (!signInResult?.ok) {
      console.log({
        title: "Something went wrong.",
        message: "Your sign in request failed. Please try again.",
        type: "error",
      })
    }

    console.log({
      title: "Check your email",
      message: "We sent you a login link. Be sure to check your spam too.",
      type: "success",
    })
  }

  return (
    <div
      className={cn(
        "border-brand-500 bg-brand-600 w-full max-w-md rounded-xl border-2 px-6 py-12",
        className
      )}
      {...props}
    >
      <h2 className="mb-5 text-center text-xl font-semibold">{cardTitle}</h2>

      {/* signin with google */}
      <Button
        className="bg-brand-500 text-brand-100 mt-4 w-full"
        variant="ghost"
        shape="rounded"
        size="small"
        color="primary"
        onClick={() =>
          signIn("google", {
            callbackUrl: siteRoutes.home,
          })
        }
      >
        <Icons.google className="mr-2 inline h-6 w-6" />
        Continue with Google
      </Button>

      {/* singin with email */}
      <form
        className="mt-6 grid w-full items-center gap-1.5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="email"
          label="Email Address"
          id="email"
          placeholder="mail@example.com"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          error={errors?.email && errors.email.message}
          disabled={isLoading}
          {...register("email")}
        />
        <Button
          className="mt-4 font-semibold"
          isLoading={isLoading}
          color="white"
          size="small"
          shape="rounded"
        >
          Continue with Email
        </Button>
      </form>

      {children}
    </div>
  )
}

export default UserAuthForm
