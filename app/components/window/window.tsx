import { Dispatch, ReactNode, SetStateAction, useRef } from 'react'
import Draggable from 'react-draggable'

import './window.scss'
import '98.css'

interface WindowProps {
  children?: ReactNode
  icon: ReactNode
  setOpenWindow: Dispatch<SetStateAction<'' | 'Calculator' | 'About Me'>>
  title: string
}

export default function Window({
  icon,
  setOpenWindow,
  title,
  children,
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
        <div className="window-body">{children}</div>
      </div>
    </Draggable>
  )
}
