import { GetStaticPropsContext, GetServerSidePropsContext } from 'next'

import { DEFAULT_LOCALE_IDENTIFIER } from 'constants/locale'

const resolveLocale = (context: GetStaticPropsContext | GetServerSidePropsContext) => {
  return context.locale || context.defaultLocale || DEFAULT_LOCALE_IDENTIFIER
}

export const getDefaultStaticProps = async (context: GetStaticPropsContext) => ({
  currentLocale: resolveLocale(context),
})

export const getDefaultServerSideProps = async (context: GetServerSidePropsContext) => ({
  currentLocale: resolveLocale(context),
})
