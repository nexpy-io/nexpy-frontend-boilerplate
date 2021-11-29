import { memo, JSXElementConstructor, PropsWithChildren } from 'react'

type ComposeProps = PropsWithChildren<{
  components: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: JSXElementConstructor<PropsWithChildren<any>>
    props?: Record<string, unknown>
  }[]
}>

const Compose = ({ components = [], children }: ComposeProps) => (
  <>
    {components.reduceRight((acc, component) => {
      const ComponentToRender = component.render
      const componentProps = component.props

      return <ComponentToRender {...componentProps}>{acc}</ComponentToRender>
    }, children)}
  </>
)

export default memo(Compose)
