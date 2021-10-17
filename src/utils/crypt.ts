import { OBFUSCATED_TOKEN_PREFIX } from 'constants/crypt'

export const getObfuscatedToken = (token: string) =>
  `${OBFUSCATED_TOKEN_PREFIX}${Buffer.from(token).toString('base64')}`

export const getUnobfuscatedToken = (token: string) => {
  if (!token || !token.startsWith(OBFUSCATED_TOKEN_PREFIX)) {
    return undefined
  }

  return `${Buffer.from(token.replace(OBFUSCATED_TOKEN_PREFIX, ''), 'base64').toString(
    'utf8'
  )}`
}
