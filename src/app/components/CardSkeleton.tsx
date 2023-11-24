import { JSX } from 'react'
import ContentLoader, { IContentLoaderProps } from 'react-content-loader'

export default function CardSkeleton(props: JSX.IntrinsicAttributes & IContentLoaderProps) {
  return (
    <ContentLoader
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      height={300}
      speed={2}
      viewBox="0 0 500 300"
      width={500}
      {...props}
    >
      <rect height="300" rx="0" ry="0" width="300" x="39" y="5" />
    </ContentLoader>
  )
}

