import { LocaleKeys } from 'types/locales'

export type SignIn = {
  email: string
  password: string
}

export type User = {
  id: string
  auth: {
    token: string
  }
  personalData: {
    firstName: string
    lastName: string
    fullName: string
    email: string
    avatarUrl: string
    birthDate: string
    phoneNumber: string
  }
  metadata: {
    isActive: boolean
    userClass: 'defaultUser' | 'admin'
    createdAtDate: string
    lastLoginDate: string
    preferredLanguage: LocaleKeys
  }
}

export type AuthContextValue = {
  user: User | null
  isAuthenticated: boolean
  isRevalidatingUser: boolean
  signIn: (data: SignIn) => Promise<void>
  signOut: () => void
}
