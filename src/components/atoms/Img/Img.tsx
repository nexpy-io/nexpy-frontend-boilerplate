import ImageNext, { ImageProps } from 'next/image'

const Image = ({
  src,
  width,
  height,
  layout,
  loader,
  quality,
  priority,
  loading,
  lazyBoundary,
  placeholder,
  blurDataURL,
  unoptimized,
  objectFit,
  objectPosition,
  onLoadingComplete,
  ...props
}: ImageProps) => (
  <ImageNext
    {...{
      src,
      width,
      height,
      layout,
      loader,
      quality,
      priority,
      loading,
      lazyBoundary,
      placeholder,
      blurDataURL,
      unoptimized,
      objectFit,
      objectPosition,
      onLoadingComplete,
    }}
    {...props}
  />
)

export default Image
