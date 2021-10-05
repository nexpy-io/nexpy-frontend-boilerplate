import { GetStaticPropsContext, GetServerSidePropsContext } from 'next'

import { DEFAULT_LOCALE_IDENTIFIER } from 'constants/locale'
import { isUsingBusinessSettingsProvider } from 'utils/businessSettings'

import userSettingsMock from 'mocks/businessSettings'

const resolveLocale = (context: GetStaticPropsContext | GetServerSidePropsContext) => {
  return context.locale || context.defaultLocale || DEFAULT_LOCALE_IDENTIFIER
}

export const getDefaultStaticProps = (context: GetStaticPropsContext) => ({
  currentLocale: resolveLocale(context),
})

export const getDefaultServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    currentLocale: resolveLocale(context),
    businessSettings: isUsingBusinessSettingsProvider ? userSettingsMock : null,
  }
}
