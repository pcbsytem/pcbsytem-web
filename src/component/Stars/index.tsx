import { Star } from '../Star'
import './index.css'

export function Stars() {
  const starList = [...Array(Math.floor(Math.random() * 100))].map(() =>
    Math.floor(Math.random() * 100)
  )

  return (
    <div className="stars">
      {starList.map((_, index) => {
        return <Star key={index} />
      })}
    </div>
  )
}
