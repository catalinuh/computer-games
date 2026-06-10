'use client'
import { Dispatch, ReactNode, SetStateAction, useRef } from 'react'
import Draggable from 'react-draggable'

import useOutsideClick from '../../hooks/useOutsideClick'
import { ProjectNames, WindowType } from '../../page'
import './desktop-icon.scss'

interface DesktopIconProps {
  icon: ReactNode
  isSelected: boolean
  name: WindowType | ProjectNames
  setActiveIcons: Dispatch<SetStateAction<(WindowType | ProjectNames)[]>>
  setActiveWindow: Dispatch<SetStateAction<WindowType | ProjectNames>>
  setMinimizedWindows: Dispatch<SetStateAction<(WindowType | ProjectNames)[]>>
  setOpenWindows: Dispatch<SetStateAction<(WindowType | ProjectNames)[]>>
}

export default function DesktopIcon({
  icon,
  isSelected,
  name,
  setActiveIcons,
  setActiveWindow,
  setMinimizedWindows,
  setOpenWindows,
}: DesktopIconProps) {
  const nodeRef = useRef(null)
  const className = isSelected ? 'active' : ''

  const handleDoubleClick = () => {
    setActiveIcons([])
    setActiveWindow(name)
    setMinimizedWindows((prevMinimizedWins: (WindowType | ProjectNames)[]) =>
      prevMinimizedWins.filter((window) => window !== name)
    )
    setOpenWindows((prevOpenWindows: (WindowType | ProjectNames)[]) => {
      const windowAlreadyOpen = prevOpenWindows.includes(name)
      return windowAlreadyOpen ? prevOpenWindows : [...prevOpenWindows, name]
    })
  }

  const handleClick = () => {
    setActiveIcons([name])
  }

  const handleOutsideClick = () => {
    setActiveIcons([])
  }

  const outsideRef = useOutsideClick(handleOutsideClick)

  return (
    // TODO: Fix bounds={false} to prevent dragging outside of the desktop
    <Draggable nodeRef={nodeRef} bounds={false}>
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
