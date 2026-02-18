import { Dispatch, ReactNode, SetStateAction, useRef, useState } from 'react'
import Draggable from 'react-draggable'

import './window.scss'
import '98.css'

interface WindowProps {
  children?: ReactNode
  icon: ReactNode
  setOpenWindows: Dispatch<SetStateAction<('' | 'Calculator' | 'About Me')[]>>
  title: '' | 'Calculator' | 'About Me'
  // TODO: see if i still need className when finished with text file styling
  className?: string
}

export default function Window({
  icon,
  setOpenWindows,
  title,
  children,
  className,
}: WindowProps) {
  const nodeRef = useRef(null)
  const [isWindowActive, setIsWindowActive] = useState(false)
  const [isClickingText, setIsClickingText] = useState(false)

  const handleClose = () => {
    setOpenWindows((prevOpenWindows) =>
      prevOpenWindows.filter((window) => window !== title)
    )
  }

  const handleClickDown = (e: MouseEvent) => {
    // bring the window to the front when clicked
    setIsWindowActive(true)
    if ((e.target as HTMLElement).className.includes('text-file'))
      setIsClickingText(true)
    else setIsClickingText(false)
  }

  return (
    <Draggable
      nodeRef={nodeRef}
      bounds={'parent'}
      disabled={isClickingText}
      onMouseDown={handleClickDown}
    >
      <div
        className={`window window-popup${isWindowActive ? ' active' : ''}`}
        ref={nodeRef}
      >
        <div className="title-bar">
          <div className="title-bar-text">
            {icon}
            {title}
          </div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" onClick={handleClose} />
          </div>
        </div>
        <div className={`window-body ${className}`}>{children}</div>
      </div>
    </Draggable>
  )
}
