import { Dispatch, ReactNode, SetStateAction, useRef, useState } from 'react'
import Draggable from 'react-draggable'

import { WindowType } from '../../page'
import './window.scss'

interface WindowProps {
  activeWindow: WindowType
  children?: ReactNode
  className?: string
  icon: ReactNode
  setActiveIcon: Dispatch<SetStateAction<WindowType>>
  setActiveWindow: Dispatch<SetStateAction<WindowType>>
  setMinimizedWindows: Dispatch<SetStateAction<WindowType[]>>
  setOpenWindows: Dispatch<SetStateAction<WindowType[]>>
  title: WindowType
}

export default function Window({
  activeWindow,
  children,
  className,
  icon,
  setActiveIcon,
  setActiveWindow,
  setMinimizedWindows,
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
    setActiveIcon('')
    // TODO: Change this to if mouse is in text area of window, don't drag
    if ((e.target as HTMLElement).className === 'text-file')
      setIsClickingText(true)
    else setIsClickingText(false)
  }

  const handleMinimize = () => {
    setActiveWindow('')
    setMinimizedWindows((prevMinimizedWins) => [...prevMinimizedWins, title])
  }

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
        <div
          className={`title-bar ${activeWindow !== title ? 'inactive' : ''}`}
        >
          <div className="title-bar-text">
            {icon}
            {title}
          </div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" onClick={handleMinimize} />
            <button aria-label="Maximize" />
            <button aria-label="Close" onClick={handleClose} />
          </div>
        </div>

        {className === 'text-file' || className === 'folder' ? (
          <div className="menus" role="menubar" style={{ touchAction: 'none' }}>
            <div className="menu-button file-menu-button" role="menuitem">
              <span>
                <span className="menu-hotkey">F</span>ile
              </span>
            </div>
            <div className="menu-button edit-menu-button" role="menuitem">
              <span>
                <span className="menu-hotkey">E</span>dit
              </span>
            </div>
            <div className="menu-button search-menu-button" role="menuitem">
              <span>
                <span className="menu-hotkey">S</span>earch
              </span>
            </div>
            <div className="menu-button help-menu-button" role="menuitem">
              <span>
                <span className="menu-hotkey">H</span>elp
              </span>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className={`window-body ${className}-container`}>{children}</div>
      </div>
    </Draggable>
  )
}
