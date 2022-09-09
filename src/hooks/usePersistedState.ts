import { useCallback, useEffect, useState } from 'react'

export const usePersistedState = <T extends Record<string, unknown> | null>(
  defaultValue: T,
  localStorageKey: string
) => {
  const findDefaultValue = useCallback(() => {
    try {
      if (typeof localStorage === 'undefined') {
        return defaultValue
      }

      const localStorageItem = localStorage.getItem(localStorageKey)

      if (localStorageItem === null) return defaultValue

      if (defaultValue !== null) {
        const newValue = JSON.stringify(defaultValue)

        if (newValue !== localStorageItem) {
          localStorage.setItem(localStorageKey, newValue)

          return defaultValue
        }
      }

      return JSON.parse(localStorageItem) as T
    } catch {
      return defaultValue
    }
  }, [defaultValue, localStorageKey])

  const [value, setValue] = useState(findDefaultValue)

  const setPersistedValue = useCallback(
    (newValue: T) => {
      try {
        if (typeof localStorage === 'undefined') {
          return
        }

        localStorage.setItem(localStorageKey, JSON.stringify(newValue))
      } catch {
        return
      }

      setValue(newValue)
    },
    [localStorageKey]
  )

  useEffect(() => {
    setValue(findDefaultValue())
  }, [findDefaultValue, localStorageKey])

  return [value, setPersistedValue] as [T, (newValue: T) => void]
}
