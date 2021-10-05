import { FlattenSimpleInterpolation } from 'styled-components'

type GetVariant<T> = {
  prop: keyof T
  default: string
  variants: Record<string, FlattenSimpleInterpolation>
}

export const getVariant = <T>({
  prop,
  default: defaultVariantName,
  variants,
}: GetVariant<T>) => {
  const defaultVariant = variants[defaultVariantName]

  if (!defaultVariant) {
    throw new Error(
      `Variant Util: default variant in 'variants' not found with this key: '${defaultVariantName}'`
    )
  }

  return (props: T) => {
    const currentVariantIdentifier = String(props[prop])
    const resolvedVariant = variants[currentVariantIdentifier]

    if (!resolvedVariant) {
      return defaultVariant
    }

    return resolvedVariant
  }
}
