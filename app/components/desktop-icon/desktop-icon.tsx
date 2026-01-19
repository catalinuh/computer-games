import { Dispatch, ReactNode, SetStateAction, useRef } from 'react'
import Draggable from 'react-draggable'

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

  const handleClick = () => {
    setOpenWindow('calculator')
  }

  return (
    <Draggable nodeRef={nodeRef}>
      <div className="desktop-icon" onDoubleClick={handleClick} ref={nodeRef}>
        {icon}
        {name}
      </div>
    </Draggable>
  )
}
