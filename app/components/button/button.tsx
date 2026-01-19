import { ReactNode } from 'react'

import './button.scss'

interface ButtonProps {
  children?: ReactNode
}

export default function Button({ children }: ButtonProps) {
  return <button className="button">{children}</button>
}
