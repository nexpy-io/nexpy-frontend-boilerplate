import { getDefaultStaticProps } from 'utils/defaultServerSideProps'

describe('[ENVS]', () => {
  test(
    "Test if 'getNodeEnv' method returns NODE_ENV with" +
      " 'test' value running by 'yarn test' command.",
    () => {
      expect(
        getDefaultStaticProps({
          locale: 'pt-BR',
          defaultLocale: 'pt-BR',
        })
      ).toStrictEqual({
        currentLocale: 'pt-BR',
      })

      expect(
        getDefaultStaticProps({
          locale: 'en-US',
          defaultLocale: 'pt-BR',
        })
      ).toStrictEqual({
        currentLocale: 'en-US',
      })

      expect(
        getDefaultStaticProps({
          locale: undefined,
          defaultLocale: 'pt-BR',
        })
      ).toStrictEqual({
        currentLocale: 'pt-BR',
      })

      expect(
        getDefaultStaticProps({
          locale: undefined,
          defaultLocale: undefined,
        })
      ).toStrictEqual({
        currentLocale: 'pt-BR',
      })
    }
  )
})
