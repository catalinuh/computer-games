'use client'
import { Dispatch, ReactNode, SetStateAction, useRef } from 'react'
import Draggable from 'react-draggable'

import useOutsideClick from '../../hooks/useOutsideClick'
import './desktop-icon.scss'

interface DesktopIconProps {
  icon: ReactNode
  setOpenWindow: Dispatch<SetStateAction<string>>
  name: string
  isSelected: boolean
  setActiveIcon: Dispatch<SetStateAction<string>>
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
    setOpenWindow('calculator')
    setActiveIcon('')
  }

  const handleClick = () => {
    setActiveIcon('calculator')
  }

  const handleOutsideClick = () => {
    console.log('outside click')
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
