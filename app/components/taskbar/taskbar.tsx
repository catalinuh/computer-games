import { Dispatch, SetStateAction, useState } from 'react'

import { StartMenu } from '../../components'
import useMinuteTimer from '../../hooks/useMinuteTimer'
import './taskbar.scss'
import '98.css'

interface TaskbarProps {
  icons: React.ReactNode[]
  openWindows: ('' | 'Calculator' | 'About Me')[]
  activeWindow: '' | 'Calculator' | 'About Me'
  setActiveWindow: Dispatch<SetStateAction<'' | 'Calculator' | 'About Me'>>
}

export default function Taskbar({
  openWindows,
  activeWindow,
  setActiveWindow,
  icons,
}: TaskbarProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const className = menuIsOpen ? 'active' : ''
  const currentTime = useMinuteTimer()

  const handleToggleStartMenu = () => {
    setMenuIsOpen((prevIsOpen) => !prevIsOpen)
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
