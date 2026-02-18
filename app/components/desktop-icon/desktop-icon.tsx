'use client'
import { Dispatch, ReactNode, SetStateAction, useRef } from 'react'
import Draggable from 'react-draggable'

import useOutsideClick from '../../hooks/useOutsideClick'
import './desktop-icon.scss'

interface DesktopIconProps {
  icon: ReactNode
  isSelected: boolean
  name: '' | 'Calculator' | 'About Me'
  setActiveIcon: Dispatch<SetStateAction<'' | 'Calculator' | 'About Me'>>
  setOpenWindows: Dispatch<SetStateAction<('' | 'Calculator' | 'About Me')[]>>
}

export default function DesktopIcon({
  icon,
  isSelected,
  name,
  setActiveIcon,
  setOpenWindows,
}: DesktopIconProps) {
  const nodeRef = useRef(null)
  const className = isSelected ? 'active' : ''

  const handleDoubleClick = () => {
    setActiveIcon('')
    setOpenWindows((prevOpenWindows) => {
      const windowAlreadyOpen = prevOpenWindows.includes(name)
      return windowAlreadyOpen ? prevOpenWindows : [...prevOpenWindows, name]
    })
  }

  const handleClick = () => {
    setActiveIcon(name)
  }

  const handleOutsideClick = () => {
    setActiveIcon('')
  }

  const outsideRef = useOutsideClick(handleOutsideClick)

  return (
    <Draggable nodeRef={nodeRef} bounds={'parent'}>
      <div ref={nodeRef}>
        <div
          className={`desktop-icon${className?.length ? ` ${className}` : ''}`}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
          // for mobile device
          onTouchEndCapture={handleDoubleClick}
          ref={outsideRef}
        >
          {icon}
          <div className="desktop-icon__name">{name}</div>
        </div>
      </div>
    </Draggable>
  )
}
