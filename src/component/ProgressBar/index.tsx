import './index.css'

interface ProgressBarProps {
  value: number
}

export function ProgressBar({ value }: ProgressBarProps) {
  const bars = [
    {
      value: 1,
      type: 'learning'
    },
    {
      value: 2,
      type: 'beginner'
    },
    {
      value: 3,
      type: 'medium'
    },
    {
      value: 4,
      type: 'professional'
    },
    {
      value: 5,
      type: 'expert'
    }
  ]

  return (
    <div className="progress-bar">
      {bars.map((item) => (
        <div
          className={`bar ${item.value <= value ? 'active' : 'no-active'}`}
          key={item.value}
          title={item.type}
        ></div>
      ))}
    </div>
  )
}
