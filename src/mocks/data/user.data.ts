import { User } from 'types/auth'

export const userMock: User = {
  id: '1',
  auth: {
    token: 'LKNBOIPJKMBIUOKLJMKLOKML',
  },
  personalData: {
    firstName: 'Allan',
    lastName: 'Oliveira',
    fullName: 'Allan Oliveira',
    email: 'email@example.com',
    avatarUrl: 'https://github.com/AllanOliveiraM.png',
    birthDate: '2001-04-17',
    phoneNumber: '53997132377',
  },
  metadata: {
    isActive: true,
    userClass: 'admin',
    createdAtDate: '2021-05-23',
    lastLoginDate: '2021-06-27',
    preferredLanguage: 'pt',
  },
}
