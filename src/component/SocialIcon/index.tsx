import React from 'react'
import Image from 'next/image'
import email from './assets/email.svg'
import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'
import './index.css'

interface SocialIconProps {
  name: string
  url: string
}

export function SocialIcon({ name, url }: SocialIconProps) {
  const icon: any = {
    linkedin,
    github,
    email
  }
  return (
    <a href={url} target="_blank">
      <Image
        className="social-icon"
        src={icon[name]}
        width={24}
        height={24}
        title={name}
        alt="not found company logo"
      />
    </a>
  )
}
