import { Dispatch, ReactNode, SetStateAction, useRef, useState } from 'react'
import Draggable from 'react-draggable'

import useOutsideClick from '../../hooks/useOutsideClick'
import './window.scss'
import '98.css'

interface WindowProps {
  activeWindow: '' | 'Calculator' | 'About Me'
  children?: ReactNode
  className?: string
  icon: ReactNode
  setActiveWindow: Dispatch<SetStateAction<'' | 'Calculator' | 'About Me'>>
  setOpenWindows: Dispatch<SetStateAction<('' | 'Calculator' | 'About Me')[]>>
  title: '' | 'Calculator' | 'About Me'
}

export default function Window({
  activeWindow,
  children,
  className,
  icon,
  setActiveWindow,
  setOpenWindows,
  title,
}: WindowProps) {
  const nodeRef = useRef(null)
  const [isClickingText, setIsClickingText] = useState(false)

  const handleClose = () => {
    setOpenWindows((prevOpenWindows) =>
      prevOpenWindows.filter((window) => window !== title)
    )
  }

  const handleClickDown = (e: MouseEvent) => {
    // bring the window to the front when clicked
    setActiveWindow(title)
    if ((e.target as HTMLElement).className === 'text-file')
      setIsClickingText(true)
    else setIsClickingText(false)
  }

  const handleOutsideClick = () => {
    // console.log('clicking outside window', title)

    setActiveWindow('')
  }

  // TODO: fix clicking outside the window
  const outsideRef = useOutsideClick(handleOutsideClick)

  return (
    <Draggable
      nodeRef={nodeRef}
      bounds={'parent'}
      disabled={isClickingText}
      onMouseDown={handleClickDown}
    >
      <div
        className={`window window-popup${activeWindow === title ? ' active' : ''}`}
        ref={nodeRef}
      >
        <div className="title-bar" ref={outsideRef}>
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
