import { User } from "next-auth"
import { DefaultJWT } from "next-auth/jwt"

type UserId = string

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: UserId
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId
    }
  }
}
