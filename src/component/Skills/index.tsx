import React from 'react'
import { ContentContainer } from '../ContentContainer'
import { ProgressBar } from '../ProgressBar'
import './index.css'

export function Skills() {
  const skills = [
    {
      name: 'NextJS',
      level: 2
    },
    {
      name: 'ReactJS',
      level: 5
    },
    {
      name: 'React Native',
      level: 4
    },
    {
      name: 'AngularJS',
      level: 2
    },
    {
      name: 'Angular',
      level: 3
    },
    {
      name: 'JavaScript',
      level: 5
    },
    {
      name: 'Typescript',
      level: 4
    },
    {
      name: 'GraphQL',
      level: 2
    },
    {
      name: 'Apollo Client',
      level: 3
    },
    {
      name: 'CSS',
      level: 5
    },
    {
      name: 'Sass',
      level: 2
    },
    {
      name: 'Styled Components',
      level: 3
    },
    {
      name: 'Redux',
      level: 4
    },
    {
      name: 'Jest',
      level: 3
    },
    {
      name: 'Detox',
      level: 3
    },
    {
      name: 'Context API',
      level: 3
    },
    {
      name: 'Eslint',
      level: 2
    },
    {
      name: 'Bootstrap',
      level: 3
    },
    {
      name: 'Git',
      level: 3
    },
    {
      name: 'GitHub Actions',
      level: 2
    },
    {
      name: 'NodeJS',
      level: 1
    }
  ]

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
