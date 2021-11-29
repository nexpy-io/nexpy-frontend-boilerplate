import NextHead from 'next/head'
import { useMemo } from 'react'

import { useBusiness, useHead } from 'hooks'

import { META_TAGS_IDENTIFIER_KEYS } from 'constants/meta'

const HeadManager = () => {
  const { businessData, meta } = useBusiness()

  const {
    head: { faviconUrl, headTitle, headTitleDescription },
  } = useHead()

  const resolvedTitle = useMemo(() => {
    const mainTitle = headTitle || businessData.businessName

    if (headTitleDescription) {
      return `${mainTitle} | ${headTitleDescription}`
    }

    return mainTitle
  }, [businessData.businessName, headTitle, headTitleDescription])

  return (
    <NextHead>
      <title key={META_TAGS_IDENTIFIER_KEYS.TITLE}>{resolvedTitle}</title>

      {faviconUrl && (
        <link key={META_TAGS_IDENTIFIER_KEYS.FAVICON} rel='icon' href={faviconUrl} />
      )}
      {meta.manifestUrl && (
        <link
          key={META_TAGS_IDENTIFIER_KEYS.MANIFEST}
          rel='manifest'
          href={meta.manifestUrl}
        />
      )}
      {meta.appleTouchIcon && (
        <link
          key={META_TAGS_IDENTIFIER_KEYS.APPLE_TOUCH_ICON}
          rel='apple-touch-icon'
          href={meta.appleTouchIcon}
        />
      )}

      {meta.applicationName && (
        <meta
          key={META_TAGS_IDENTIFIER_KEYS.APPLICATION_NAME}
          name='application-name'
          content={meta.applicationName}
        />
      )}
      {meta.appleMobileWebAppTitle && (
        <meta
          key={META_TAGS_IDENTIFIER_KEYS.APPLE_MOBILE_WEB_APP_TITLE}
          name='apple-mobile-web-app-title'
          content={meta.appleMobileWebAppTitle}
        />
      )}
      {meta.description && (
        <meta
          key={META_TAGS_IDENTIFIER_KEYS.DESCRIPTION}
          name='description'
          content={meta.description}
        />
      )}
      {meta.themeColor && (
        <meta
          key={META_TAGS_IDENTIFIER_KEYS.THEME_COLOR}
          name='theme-color'
          content={meta.themeColor}
        />
      )}
      {meta.ogDescription && (
        <meta
          key={META_TAGS_IDENTIFIER_KEYS.OG_DESCRIPTION}
          property='og:description'
          content={meta.ogDescription}
        />
      )}
      {meta.ogTitle && (
        <meta
          key={META_TAGS_IDENTIFIER_KEYS.OG_TITLE}
          property='og:title'
          content={meta.ogTitle}
        />
      )}
      {meta.ogImage && (
        <meta
          key={META_TAGS_IDENTIFIER_KEYS.OG_IMAGE}
          property='og:image'
          content={meta.ogImage}
        />
      )}
      {meta.ogSiteName && (
        <meta
          key={META_TAGS_IDENTIFIER_KEYS.SITE_NAME}
          property='og:site_name'
          content={meta.ogSiteName}
        />
      )}
      {meta.twitterTitle && (
        <meta
          key={META_TAGS_IDENTIFIER_KEYS.TWITTER_TITLE}
          name='twitter:title'
          content={meta.twitterTitle}
        />
      )}
      {meta.twitterDescription && (
        <meta
          key={META_TAGS_IDENTIFIER_KEYS.TWITTER_DESCRIPTION}
          name='twitter:description'
          content={meta.twitterDescription}
        />
      )}
      {meta.twitterImage && (
        <meta
          key={META_TAGS_IDENTIFIER_KEYS.TWITTER_IMAGE}
          property='twitter:image'
          content={meta.twitterImage}
        />
      )}
    </NextHead>
  )
}

export default HeadManager
