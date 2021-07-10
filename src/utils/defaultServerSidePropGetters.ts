import { GetStaticPropsContext, GetServerSidePropsContext } from 'next'

export const getDefaultStaticProps = (context: GetStaticPropsContext) => {
  return {
    currentLocale: context.locale || context.defaultLocale || 'pt-BR',
  }
}

export const getDefaultServerSideProps = (context: GetServerSidePropsContext) => {
  return {
    currentLocale: context.locale || context.defaultLocale || 'pt-BR',
  }
}
