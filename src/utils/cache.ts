/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  DEFAULT_GLOBAL_APP_REQUEST_CACHE_NAME,
  DEFAULT_CACHE_BUFFER_INTERVAL,
} from 'constants/cache'

type CacheItem = [string, any]

const cleanCacheReducer = (acc: CacheItem[], cacheItem: CacheItem) => {
  if (cacheItem[1]) {
    return [...acc, cacheItem]
  }

  return [...acc]
}

export const swrCacheProvider = () => {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    const readCacheFromLocalStorage = () => {
      return JSON.parse(
        localStorage.getItem(DEFAULT_GLOBAL_APP_REQUEST_CACHE_NAME) || '[]'
      ) as CacheItem[]
    }

    const map = new Map(readCacheFromLocalStorage())

    const writeCache = () => {
      const mapForCache = new Map()

      const currentStoredCache = readCacheFromLocalStorage() as CacheItem[]
      const cleanedStoredCache = currentStoredCache.reduce(
        cleanCacheReducer,
        [] as CacheItem[]
      )

      const currentAppCache = Array.from(map.entries()) as CacheItem[]
      const cleanedAppCache = currentAppCache.reduce(cleanCacheReducer, [] as CacheItem[])

      cleanedStoredCache.forEach(cacheItem => {
        mapForCache.set(cacheItem[0], cacheItem[1])
      })

      cleanedAppCache.forEach(cacheItem => {
        mapForCache.set(cacheItem[0], cacheItem[1])
      })

      localStorage.setItem(
        DEFAULT_GLOBAL_APP_REQUEST_CACHE_NAME,
        JSON.stringify(Array.from(mapForCache.entries()))
      )
    }

    window.addEventListener('beforeunload', writeCache)
    window.setInterval(writeCache, DEFAULT_CACHE_BUFFER_INTERVAL)

    return map
  }

  return new Map()
}
