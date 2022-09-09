import slugifyCore from 'slugify'

export const slugify = (value: string) => {
  return slugifyCore(value, { lower: true })
}
