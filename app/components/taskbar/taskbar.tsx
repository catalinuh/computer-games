import { useState } from 'react'

import { StartMenu } from '../../components'
import useMinuteTimer from '../../hooks/useMinuteTimer'
import './taskbar.scss'
import '98.css'

export default function Taskbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const className = menuIsOpen ? 'active' : ''
  const currentTime = useMinuteTimer()

  const handleToggleStartMenu = () => {
    setMenuIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <div className="taskbar">
      {menuIsOpen ? <StartMenu /> : null}
      <button onClick={handleToggleStartMenu} className={className}>
        𝓒𝓜 Catalina McQuade
      </button>
      <div className="taskbar__time">
        <span>{currentTime.format('hh:mm A')}</span>
      </div>
    </div>
  )
}
