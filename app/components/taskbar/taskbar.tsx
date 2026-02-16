import { useState } from 'react'
import dayjs from 'dayjs'

import { StartMenu } from '../../components'
import './taskbar.scss'
import '98.css'

export default function Taskbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const className = menuIsOpen ? 'active' : ''

  const handleClick = () => {
    setMenuIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <div className="taskbar">
      {menuIsOpen ? <StartMenu /> : null}
      <button onClick={handleClick} className={className}>
        𝓒𝓜 Catalina McQuade
      </button>
      <div className="taskbar__time">{dayjs().format('hh:mm A')}</div>
    </div>
  )
}
