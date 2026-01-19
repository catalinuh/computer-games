import { ReactNode } from 'react'

import './button.scss'

interface ButtonProps {
  children?: ReactNode
  onClick?: () => void
  x?: boolean
}

export default function Button({ children, onClick, x }: ButtonProps) {
  const handleClick = () => {
    console.log('handling click')
  }

  return (
    <button className="button" onClick={onClick || handleClick}>
      <div className={`button${x ? ' x' : ''}`}>{children}</div>
    </button>
  )
}
