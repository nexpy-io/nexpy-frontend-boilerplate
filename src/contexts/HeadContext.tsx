import { createContext, useState, Dispatch, SetStateAction } from 'react'

import { DefaultComponentProps } from 'types/components'

type HeadValue = {
  headTitle: string
  headTitleDescription: string
  faviconUrl: string
}

type HeadContextValue = {
  head: HeadValue
  setHead: Dispatch<SetStateAction<HeadValue>>
}

type HeadProviderProps = DefaultComponentProps

export const HeadContext = createContext({} as HeadContextValue)

export const HeadProvider = ({ children }: HeadProviderProps) => {
  const [head, setHead] = useState<HeadValue>({
    headTitle: '',
    headTitleDescription: '',
    faviconUrl: '',
  })

  return (
    <HeadContext.Provider
      value={{
        head,
        setHead,
      }}
    >
      {children}
    </HeadContext.Provider>
  )
}
