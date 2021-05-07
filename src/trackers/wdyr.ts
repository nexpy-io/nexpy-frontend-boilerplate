/// <reference types="@welldone-software/why-did-you-render" />

import React from 'react'

import { isProductionMode } from 'utils/environment'

if (!isProductionMode()) {
  try {
    const whyDidYouRender = require('@welldone-software/why-did-you-render')
    whyDidYouRender(React, {
      trackAllPureComponents: true,
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('whyDidYouRender: ', error)
  }
}
