/* eslint-disable @typescript-eslint/no-explicit-any */

import merge from 'lodash/merge'

type AnyObj = Record<string, any>

export const removeEmpty = (obj: AnyObj): any =>
  Object.fromEntries(
    Object.entries(obj)
      .filter(([, v]) => v != null)
      .map(([k, v]) => [k, v === Object(v) ? removeEmpty(v) : v])
  )

export const deepMergeWithPreProcessors = <T>(
  source: T,
  objectToMergeInToSource: T,
  preProcessors: Array<(obj: T) => T>
) => {
  const processedObject = preProcessors.reduce((acc, preProcessor) => {
    return preProcessor(acc)
  }, objectToMergeInToSource)

  return merge({}, source, processedObject)
}
