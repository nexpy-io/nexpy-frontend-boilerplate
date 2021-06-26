/// <reference types="@welldone-software/why-did-you-render" />

import React from 'react'

import { isProductionMode } from 'utils/environment'

if (typeof window !== 'undefined' && !isProductionMode()) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render')

  // eslint-disable-next-line no-console
  console.debug("[TRACKERS] Applying 'whyDidYouRender' tracker.")

  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackHooks: true,
    logOwnerReasons: true,
    collapseGroups: true,
  })
}
