export interface ExperienceProps {
  company: string
  description: string[]
  end: string
  icon: string
  role: string
  start: string
  url: string
}

export interface ResponseProps {
  id: string
  list: ExperienceProps[]
}