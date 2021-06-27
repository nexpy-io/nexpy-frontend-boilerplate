export type AuthData = {
  token: string
  isAuthenticated: boolean
} | null

export type User = {
  personalData: {
    firstName: string
    lastName: string
    fullName: string
  }
  email: string
} | null

export type Auth = {
  auth: AuthData
  user: User
}
