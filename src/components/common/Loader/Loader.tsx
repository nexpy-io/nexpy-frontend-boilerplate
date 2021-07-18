import { useBusiness } from 'hooks'

import { LoaderProps } from 'components/common/Loader/types'

import DefaultLoader from './DefaultLoader'
import GenericLoader from './GenericLoader'

const Loader = ({ displaySize = 'medium', customColor }: LoaderProps) => {
  const { core } = useBusiness()

  if (!core.useDefaultLoader) {
    return <GenericLoader displaySize={displaySize} customColor={customColor} />
  }

  return <DefaultLoader displaySize={displaySize} />
}

export default Loader
