/* eslint-disable @typescript-eslint/no-explicit-any */

import { JSXElementConstructor, PropsWithChildren, ReactNode } from 'react'

type ComposeProps = {
  components: {
    render: JSXElementConstructor<PropsWithChildren<any>>
    props?: Record<string, unknown>
  }[]
  children: ReactNode
}

const Compose = ({ components = [], children }: ComposeProps) => {
  return (
    <>
      {components.reduceRight((acc, component) => {
        const ComponentToRender = component.render
        const componentProps = component.props

        return <ComponentToRender {...componentProps}>{acc}</ComponentToRender>
      }, children)}
    </>
  )
}

export default Compose
