import { AppProps } from 'next/app'
import Head from 'next/head'

import { META_TAGS_IDENTIFIER_KEYS } from 'constants/meta'
import AppProvider from 'contexts/AppProvider'
import { initSentry } from 'utils/sentry'

import 'theme/preflight.css'

initSentry()

const App = ({ Component, pageProps }: AppProps) => (
  <AppProvider>
    <Head>
      <title key={META_TAGS_IDENTIFIER_KEYS.TITLE}>Nexpy</title>

      <meta name='viewport' content='width=device-width' />
      <meta property='og:type' content='company' />
      <meta name='robots' content='index,follow' />
      <meta charSet='utf-8' />
      {/*
      <link
        key={META_TAGS_IDENTIFIER_KEYS.FAVICON}
        rel='shortcut icon'
        href='/favicon.ico'
      />
      <link
        key={META_TAGS_IDENTIFIER_KEYS.MANIFEST}
        rel='manifest'
        href='/manifest.json'
      />
      <link
        key={META_TAGS_IDENTIFIER_KEYS.APPLE_TOUCH_ICON}
        rel='apple-touch-icon'
        href='/icons/icon-192x192.png'
      />

      <meta
        key={META_TAGS_IDENTIFIER_KEYS.DESCRIPTION}
        name='description'
        content='Aplicação Nexpy para gerenciamento privado do seu negócio.'
      />
      <meta
        key={META_TAGS_IDENTIFIER_KEYS.THEME_COLOR}
        name='theme-color'
        content='#9855FF'
      />
      <meta
        key={META_TAGS_IDENTIFIER_KEYS.OG_DESCRIPTION}
        property='og:description'
        content='Aplicação Nexpy para gerenciamento privado do seu negócio.'
      />
      <meta
        key={META_TAGS_IDENTIFIER_KEYS.OG_TITLE}
        property='og:title'
        content='Nexpy'
      />
      <meta
        key={META_TAGS_IDENTIFIER_KEYS.OG_IMAGE}
        property='og:image'
        content='/icons/icon-512x512.png'
      />
      <meta
        key={META_TAGS_IDENTIFIER_KEYS.SITE_NAME}
        property='og:site_name'
        content='Nexpy'
      />
      <meta
        key={META_TAGS_IDENTIFIER_KEYS.TWITTER_TITLE}
        name='twitter:title'
        content='Nexpy'
      />
      <meta
        key={META_TAGS_IDENTIFIER_KEYS.TWITTER_DESCRIPTION}
        name='twitter:description'
        content='Aplicação Nexpy para gerenciamento privado do seu negócio.'
      />
      <meta
        key={META_TAGS_IDENTIFIER_KEYS.TWITTER_IMAGE}
        property='twitter:image'
        content='/icons/icon-512x512.png'
      /> */}
    </Head>
    <Component {...pageProps} />
  </AppProvider>
)

export default App
