import { AxiosResponse } from 'axios'

import { delayPromise } from 'utils/mocks'

import { userMock } from 'mocks/data/user.data'

import { User, SignIn } from 'types/auth'

const RESOLVE_ALL = true

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const signInMockRequest = async (_data: SignIn) => {
  await delayPromise()

  return new Promise<AxiosResponse<User>>((resolve, reject) => {
    if (RESOLVE_ALL) {
      resolve({
        data: userMock,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
        request: '',
      })
    } else {
      reject(new Error('Invalid user.'))
    }
  })
}

export const recoverUserInfoMockRequest = async (token: string) => {
  await delayPromise()

  if (token !== userMock.auth.token) {
    throw new Error('Invalid Token.')
  }

  return new Promise<AxiosResponse<User>>((resolve, reject) => {
    if (RESOLVE_ALL) {
      resolve({
        data: userMock,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
        request: '',
      })
    } else {
      reject(new Error('Invalid user.'))
    }
  })
}
