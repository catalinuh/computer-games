import { Dispatch, ReactNode, SetStateAction, useRef, useState } from 'react'
import { Rnd } from 'react-rnd'

import { ProjectNames, WindowType } from '../../page'
import './window.scss'

interface WindowProps {
  activeWindow: WindowType | ProjectNames
  children?: ReactNode
  className?: string
  icon: ReactNode
  setActiveIcons: Dispatch<SetStateAction<(WindowType | ProjectNames)[]>>
  setActiveWindow: Dispatch<SetStateAction<WindowType | ProjectNames>>
  setMinimizedWindows: Dispatch<SetStateAction<(WindowType | ProjectNames)[]>>
  setOpenWindows: Dispatch<SetStateAction<(WindowType | ProjectNames)[]>>
  title: WindowType | ProjectNames
}

export default function Window({
  activeWindow,
  children,
  className,
  icon,
  setActiveIcons,
  setActiveWindow,
  setMinimizedWindows,
  setOpenWindows,
  title,
}: WindowProps) {
  const [isClickingText, setIsClickingText] = useState(false)

  const vw = window.innerWidth
  const vh = window.innerHeight

  const handleClose = () => {
    setOpenWindows((prevOpenWindows) =>
      prevOpenWindows.filter((window) => window !== title)
    )
  }

  const handleClickDown = (e: MouseEvent) => {
    // bring the window to the front when clicked
    setActiveWindow(title)
    setActiveIcons([])
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
    <Rnd
      default={{ x: 50, y: 100, width: 400, height: 'auto' }}
      minWidth={title === 'Contact' && vw > 900 ? 625 : 400}
      minHeight={title === 'Projects' ? 100 : 300}
      bounds="parent"
      dragHandleClassName="title-bar"
      disableDragging={isClickingText}
      onMouseDown={handleClickDown}
      className={`window window-popup${activeWindow === title ? ' active' : ''}`}
    >
      <div className={`title-bar ${activeWindow !== title ? 'inactive' : ''}`}>
        <div className="title-bar-text">
          {icon}
          {title}
        </div>
        <div className="title-bar-controls">
          <button
            aria-label="Minimize"
            onClick={handleMinimize}
            // for mobile devices
            onTouchEndCapture={handleMinimize}
          />
          {/* TODO: Enable when maximize functionality is implemented */}
          <button aria-label="Maximize" disabled />
          <button
            aria-label="Close"
            onClick={handleClose}
            // for mobile devices
            onTouchEndCapture={handleClose}
          />
        </div>
      </div>

      {className === 'notepad' ||
      className === 'folder' ||
      className === 'skills' ? (
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
    </Rnd>
  )
}
