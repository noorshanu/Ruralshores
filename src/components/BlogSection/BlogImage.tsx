'use client'
import React, { useState } from 'react'
import Image from 'next/image'

type Props = {
  src?: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
}

export default function BlogImage({ src, alt, className, fill, width, height }: Props) {
  const [imgSrc, setImgSrc] = useState<string>(src || '/blogcard.webp')

  return (
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc('/blogcard.webp')}
      {...(fill ? { fill: true } : { width: width || 600, height: height || 400 })}
    />
  )
}


