import Image from 'next/image'
import notFound from './assets/image.png'
import './index.css'
import { useCallback, useMemo } from 'react'

interface CompanyLogoProps {
  name: string
  url: string
  path: string
}

export function CompanyLogo({ name, url, path }: CompanyLogoProps) {
  const urlFull = useMemo(() => `${url}${path}`, [url, path])
  const checkURL = useCallback((url: string) => {
    console.log(url)
    return url.match(/\.(jpeg|jpg|gif|png|ico)$/) != null
  }, [])

  return checkURL(urlFull) ? (
    <a href={url} target="_blank">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="company-logo"
        src={urlFull}
        width={24}
        height={24}
        title={name}
        alt="company logo"
      />
    </a>
  ) : (
    <Image
      className="company-logo"
      src={notFound}
      width={24}
      height={24}
      title={name}
      alt="not found company logo"
    />
  )
}
