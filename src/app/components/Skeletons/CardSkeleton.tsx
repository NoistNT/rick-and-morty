import React from 'react'
import ContentLoader from 'react-content-loader'

function CardImageSkeleton(props: any) {
  return (
    <ContentLoader
      backgroundColor="#1a1a1a"
      foregroundColor="#000"
      height={300}
      speed={2}
      viewBox="0 0 300 300"
      width={300}
      {...props}
    >
      <rect height="300" rx="0" ry="0" width="300" x="17" y="-21" />
    </ContentLoader>
  )
}

export default CardImageSkeleton
