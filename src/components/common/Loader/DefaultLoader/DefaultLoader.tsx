import { LoaderProps } from 'components/common/Loader/types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function DefaultLoader({ displaySize }: Omit<LoaderProps, 'customColor'>) {
  return <div>Default Loader</div>
}

export default DefaultLoader
