import Image, { StaticImageData } from 'next/image'
import { companyImages } from './index.contants'
import { useMemo } from 'react'
import './index.css'

interface CompanyLogoProps {
  icon: string
  name: string
  url: string
}

export function CompanyLogo({ name, url, icon }: CompanyLogoProps) {
  type CompanyImagesType = keyof typeof companyImages
  const iconItem: StaticImageData = useMemo(
    () => companyImages[icon as CompanyImagesType],
    [icon]
  )
  return (
    <a href={url} title={name} target="_blank">
      <Image
        className="company-logo"
        src={iconItem}
        width={24}
        height={24}
        alt="company logo"
      />
    </a>
  )
}
