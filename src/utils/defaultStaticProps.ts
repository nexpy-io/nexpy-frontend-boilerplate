import { GetStaticPropsContext } from 'next'

import userSettingsMock from 'mocks/businessSettings'

export const getDefaultStaticProps = (context: GetStaticPropsContext) => {
  const userSettingsData = userSettingsMock

  return {
    currentLocale: context.locale ?? context.defaultLocale,
    businessSettings: userSettingsData,
  }
}
