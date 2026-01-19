import { ReactNode } from 'react'

import './button.scss'

interface ButtonProps {
  children?: ReactNode
  x?: boolean
}

export default function Button({ children, x }: ButtonProps) {
  return (
    <button className="button">
      <div className={`button${x ? ' x' : ''}`}>{children}</div>
    </button>
  )
}
