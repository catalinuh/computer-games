import { Dispatch, ReactNode, SetStateAction, useRef } from 'react'
import Draggable from 'react-draggable'

import './window.scss'
import '98.css'

interface WindowProps {
  children?: ReactNode
  icon: ReactNode
  setOpenWindow: Dispatch<SetStateAction<'' | 'Calculator' | 'About Me'>>
  title: string
  // TODO: see if i still need className when finished with text file styling
  className?: string
}

export default function Window({
  icon,
  setOpenWindow,
  title,
  children,
  className,
}: WindowProps) {
  const nodeRef = useRef(null)

  const handleClose = () => {
    setOpenWindow('')
  }
  return (
    <Draggable nodeRef={nodeRef}>
      <div className="window window-popup" ref={nodeRef}>
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
