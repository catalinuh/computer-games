import { Dispatch, SetStateAction, useState } from 'react'

import { StartMenu } from '../../components'
import useMinuteTimer from '../../hooks/useMinuteTimer'
import { ProjectNames, WindowType } from '../../page'
import './taskbar.scss'

interface TaskbarProps {
  activeWindow: WindowType | ProjectNames
  icons: React.ReactNode[]
  openWindows: (WindowType | ProjectNames)[]
  setActiveWindow: Dispatch<SetStateAction<WindowType | ProjectNames>>
  setMinimizedWindows: Dispatch<SetStateAction<(WindowType | ProjectNames)[]>>
}

export default function Taskbar({
  activeWindow,
  icons,
  openWindows,
  setActiveWindow,
  setMinimizedWindows,
}: TaskbarProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const className = menuIsOpen ? 'active' : ''
  const currentTime = useMinuteTimer()

  const handleToggleStartMenu = () => {
    setMenuIsOpen((prevIsOpen) => !prevIsOpen)
  }

  const handleToggleWindow = (window: WindowType | ProjectNames) => {
    if (activeWindow === window) {
      setActiveWindow('')
      setMinimizedWindows((prevMinimizedWindows) => [
        ...prevMinimizedWindows,
        window,
      ])
    } else {
      setActiveWindow(window)
      setMinimizedWindows((prevMinimizedWindows) =>
        prevMinimizedWindows.filter((w) => w !== window)
      )
    }
  }

  return (
    <div className="taskbar__container">
      {menuIsOpen ? <StartMenu /> : null}
      <div className="taskbar">
        <div className="taskbar__start-btn-and-windows">
          <button
            onClick={handleToggleStartMenu}
            className={`taskbar__start-btn ${className}`}
          >
            𝓒𝓜 Catalina McQuade
          </button>
          <div className="taskbar__divider"></div>
          {openWindows.map(
            (window: WindowType | ProjectNames, index: number) => (
              <button
                key={window}
                onClick={() => handleToggleWindow(window)}
                className={`taskbar__window-btn ${activeWindow === window ? 'active' : ''}`}
              >
                <span>{icons[index]}</span>
                <span
                  className={`taskbar__window-btn--label ${activeWindow === window ? 'active' : ''}`}
                >
                  {window}
                </span>
              </button>
            )
          )}
        </div>
        <div className="taskbar__time">
          <span>{currentTime.format('hh:mm A')}</span>
        </div>
      </div>
    </div>
  )
}
