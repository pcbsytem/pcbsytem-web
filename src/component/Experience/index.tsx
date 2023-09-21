'use client'

import { useEffect, useState } from 'react'
import { CompanyLogo } from '../CompanyLogo'
import { ContentContainer } from '../ContentContainer'
import { ExperienceProps, ResponseProps } from './types'
import { URL } from '@/constants'
import './index.css'

export function Experience() {
  const [experiences, setExperiences] = useState<ExperienceProps[]>([])

  const getData = async () => {
    const response = await fetch(URL.EXPERIENCE)
    const { data } = await response.json()
    const [{ list }] = data.filter(
      (item: ResponseProps) => item.id === 'english'
    )
    setExperiences([...list])
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ContentContainer title="Experience">
      <div className="experience">
        {experiences.map((item, index) => (
          <div className="item" key={index}>
            <div className="title">
              <CompanyLogo
                icon={item.icon}
                name={item.company}
                url={item.url}
              />
              <div>
                <h4>{`${item.company} - ${item.role}`}</h4>
                {/* <p>{item.period}</p> */}
              </div>
            </div>
            {item.description.map((text) => (
              <p key={text}>
                {item?.description?.length > 1 ? `- ${text}` : text}
              </p>
            ))}
          </div>
        ))}
      </div>
    </ContentContainer>
  )
}
