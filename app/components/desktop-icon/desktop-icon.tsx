'use client'
import { Dispatch, ReactNode, SetStateAction, useRef } from 'react'
import Draggable from 'react-draggable'

import useWindowSize from '../../../app/hooks/useWindowSize'
import './desktop-icon.scss'

interface DesktopIconProps {
  icon: ReactNode
  setOpenWindow: Dispatch<SetStateAction<string>>
  name: string
}

export default function DesktopIcon({
  icon,
  setOpenWindow,
  name,
}: DesktopIconProps) {
  const nodeRef = useRef(null)
  const { width, height } = useWindowSize()

  const handleClick = () => {
    setOpenWindow('calculator')
  }

  return (
    <Draggable
      nodeRef={nodeRef}
      bounds={{
        top: 0,
        // TODO: Fix these 2 measurements
        right: width ? width - 20 : undefined,
        bottom: height ? height - 20 : undefined,
        left: 0,
      }}
    >
      <div className="desktop-icon" onDoubleClick={handleClick} ref={nodeRef}>
        {icon}
        <div className="desktop-icon__name">{name}</div>
      </div>
    </Draggable>
  )
}
