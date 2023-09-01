import React from 'react'
import { SocialIcon } from '../SocialIcon'
import './index.css'

export function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <h1>Patrick Cristian Barcelos</h1>
        <p>Frontend Developer</p>
        <div className="profile"></div>
        <div className="icons">
          <SocialIcon
            name="linkedin"
            url="https://www.linkedin.com/in/patrick-cristian-barcelos-374ab233/"
          />
          <SocialIcon name="github" url="https://github.com/pcbsytem" />
          <SocialIcon name="email" url="mailto:pcbsystem@hotmail.com" />
        </div>
      </div>
    </div>
  )
}
