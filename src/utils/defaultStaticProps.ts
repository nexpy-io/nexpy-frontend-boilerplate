import { GetStaticPropsContext } from 'next'

import userSettingsMock from 'mocks/userSettings'

export const getDefaultStaticProps = (context: GetStaticPropsContext) => {
  const userSettingsData = userSettingsMock

  return {
    currentLocale: context.locale ?? context.defaultLocale,
    userSettings: userSettingsData,
  }
}
