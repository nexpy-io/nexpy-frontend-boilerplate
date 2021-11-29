import { useMemo, createContext, useState, useCallback } from 'react'

import { DefaultComponentProps } from 'types/components'

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

type HeadProviderProps = DefaultComponentProps

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

  const memoValue = useMemo(
    () => ({
      head,
      setHeadTitle,
      setHeadTitleDescription,
      setFaviconUrl,
    }),
    [head, setFaviconUrl, setHeadTitle, setHeadTitleDescription]
  )

  return <HeadContext.Provider value={memoValue}>{children}</HeadContext.Provider>
}
