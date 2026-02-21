import { Dispatch, SetStateAction, useState } from 'react'

import { StartMenu } from '../../components'
import useMinuteTimer from '../../hooks/useMinuteTimer'
import { WindowType } from '../../page'
import './taskbar.scss'
import '98.css'

interface TaskbarProps {
  activeWindow: WindowType
  icons: React.ReactNode[]
  openWindows: WindowType[]
  setActiveWindow: Dispatch<SetStateAction<WindowType>>
  setMinimizedWindows: Dispatch<SetStateAction<WindowType[]>>
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

  const handleToggleWindow = (window: WindowType) => {
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
    <div className="taskbar">
      {menuIsOpen ? <StartMenu /> : null}
      <div className="taskbar__start-btn-and-windows">
        <button onClick={handleToggleStartMenu} className={className}>
          𝓒𝓜 Catalina McQuade
        </button>
        {openWindows.map(
          (window: '' | 'Calculator' | 'About Me', index: number) => (
            <button
              key={window}
              className="taskbar__start-btn-and-windows--window-btn"
              onClick={() => handleToggleWindow(window)}
            >
              <span>{icons[index]}</span>
              <span>{window}</span>
            </button>
          )
        )}
      </div>
      <div className="taskbar__time">
        <span>{currentTime.format('hh:mm A')}</span>
      </div>
    </div>
  )
}
