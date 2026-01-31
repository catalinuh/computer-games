import { Dispatch, ReactNode, SetStateAction } from 'react'

import './button.scss'

interface ButtonProps {
  children?: ReactNode
  onClick?: () => void
  x?: boolean
  setOpenWindow?: Dispatch<SetStateAction<string>>
}
// TODO: Remove
export default function Button({
  children,
  onClick,
  x,
  setOpenWindow,
}: ButtonProps) {
  const handleClick = () => {
    if (x && setOpenWindow) setOpenWindow('')
  }

  return (
    <button
      className="button"
      onClick={onClick || handleClick}
      // for mobile device
      onTouchEndCapture={onClick || handleClick}
    >
      <div className={`button__container${x ? ' x' : ''}`}>{children}</div>
    </button>
  )
}
