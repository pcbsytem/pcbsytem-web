'use client'

import { useEffect, useState } from 'react'
import { ContentContainer } from '../ContentContainer'
import { ProgressBar } from '../ProgressBar'
import { URL } from '@/constants'
import './index.css'

interface SkillProps {
  level: number
  name: string
}

interface ResponseProps {
  id: string
  list: SkillProps[]
}

export function Skills() {
  const [skills, setSkills] = useState<SkillProps[]>([])

  const getData = async () => {
    const response = await fetch(URL.SKILL)
    const { data } = await response.json()
    const [{ list }] = data.filter((item: ResponseProps) => item.id)
    setSkills([...list])
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ContentContainer title="Skills">
      <div className="skills">
        {skills.map((item, index) => (
          <div className="item" key={index}>
            <p>{item.name}</p>
            <ProgressBar value={item.level} />
          </div>
        ))}
      </div>
    </ContentContainer>
  )
}
