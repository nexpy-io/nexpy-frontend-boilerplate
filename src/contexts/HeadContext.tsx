import { createContext, useState, ReactNode, useCallback } from 'react'

type HeadValue = {
  headTitle: string
  headTitleDescription: string
  faviconUrl: string
}

type HeadContextValue = {
  head: HeadValue
  setHeadTitle: (headTitle: string) => void
  setHeadTitleDescription: (headTitleDescription: string) => void
  setFaviconUrl: (faviconUrl: string) => void
}

type HeadProviderProps = {
  children: ReactNode
}

export const HeadContext = createContext({} as HeadContextValue)

export const HeadProvider = ({ children }: HeadProviderProps) => {
  const [head, setHead] = useState<HeadValue>({
    headTitle: '',
    headTitleDescription: '',
    faviconUrl: '',
  })

  const setHeadTitle = useCallback((headTitle: string) => {
    setHead(state => ({
      ...state,
      headTitle,
    }))
  }, [])

  const setHeadTitleDescription = useCallback((headTitleDescription: string) => {
    setHead(state => ({
      ...state,
      headTitleDescription,
    }))
  }, [])

  const setFaviconUrl = useCallback((faviconUrl: string) => {
    setHead(state => ({
      ...state,
      faviconUrl,
    }))
  }, [])

  return (
    <HeadContext.Provider
      value={{
        head,
        setHeadTitle,
        setHeadTitleDescription,
        setFaviconUrl,
      }}
    >
      {children}
    </HeadContext.Provider>
  )
}
