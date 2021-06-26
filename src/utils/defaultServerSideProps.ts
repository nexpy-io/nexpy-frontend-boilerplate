import { GetStaticPropsContext } from 'next'

export const getDefaultStaticProps = (context: GetStaticPropsContext) => {
  return {
    currentLocale: context.locale || context.defaultLocale || 'pt-BR',
  }
}
