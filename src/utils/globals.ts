export const getWindow = () => {
  if (typeof window !== 'undefined') {
    return window
  }

  return null
}
