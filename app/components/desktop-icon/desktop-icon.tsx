'use client'
import { Dispatch, ReactNode, SetStateAction, useRef } from 'react'
import Draggable from 'react-draggable'

import useOutsideClick from '../../hooks/useOutsideClick'
import './desktop-icon.scss'

interface DesktopIconProps {
  icon: ReactNode
  setOpenWindow: Dispatch<SetStateAction<'' | 'Calculator' | 'About Me'>>
  name: '' | 'Calculator' | 'About Me'
  isSelected: boolean
  setActiveIcon: Dispatch<SetStateAction<'' | 'Calculator' | 'About Me'>>
}

export default function DesktopIcon({
  icon,
  setOpenWindow,
  name,
  isSelected,
  setActiveIcon,
}: DesktopIconProps) {
  const nodeRef = useRef(null)
  const className = isSelected ? 'active' : ''

  const handleDoubleClick = () => {
    setOpenWindow(name)
    setActiveIcon('')
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
