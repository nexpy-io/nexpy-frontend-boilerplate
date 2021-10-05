/* eslint-disable @typescript-eslint/no-explicit-any */

type AnyObj = { [key: string]: any }

export const removeEmpty = (obj: AnyObj): any =>
  Object.fromEntries(
    Object.entries(obj)
      .filter(([, v]) => v != null)
      .map(([k, v]) => [k, v === Object(v) ? removeEmpty(v) : v])
  )
