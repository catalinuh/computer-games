import { useState } from 'react'

import { Button, StartMenu } from '../../components'
import './taskbar.scss'

export default function Taskbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const className = menuIsOpen ? 'active' : ''

  const handleClick = () => {
    setMenuIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <div className="taskbar">
      {menuIsOpen ? <StartMenu /> : null}
      <Button onClick={handleClick} className={className} fontSize="24px">
        <div className="taskbar__start-btn-label">𝓒𝓜 Catalina McQuade</div>
      </Button>
      <div className="taskbar__time">12:00 PM</div>
    </div>
  )
}
