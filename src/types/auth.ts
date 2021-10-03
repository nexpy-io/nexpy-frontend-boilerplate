import { Redirect } from 'next'

import { LocaleKeys } from 'types/locales'

type Email = string
type Password = string

export type SignIn = {
  email: Email
  password: Password
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
    email: Email
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

export type WithAuthReturn =
  | { props: { [key: string]: unknown } }
  | { redirect: Redirect }
  | { notFound: true }
