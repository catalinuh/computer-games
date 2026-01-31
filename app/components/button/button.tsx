import { Dispatch, ReactNode, SetStateAction } from 'react'

import './button.scss'

interface ButtonProps {
  children?: ReactNode
  onClick?: () => void
  x?: boolean
  setOpenWindow?: Dispatch<SetStateAction<string>>
  className?: string
  fontSize?: string
}

export default function Button({
  children,
  onClick,
  x,
  setOpenWindow,
  className,
  fontSize,
}: ButtonProps) {
  const handleClick = () => {
    if (x && setOpenWindow) setOpenWindow('')
  }

  return (
    <button
      className={`button${' ' + className}`}
      onClick={onClick || handleClick}
      // for mobile device
      onTouchEndCapture={onClick || handleClick}
    >
      <div className={`button__container${x ? ' x' : ''}`}>
        <div
          className={`button__container--wrapper`}
          style={{ fontSize: fontSize }}
        >
          {children}
        </div>
      </div>
    </button>
  )
}
