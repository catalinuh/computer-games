import { useState } from 'react'

import Button from '../button/button'
import './taskbar.scss'

export default function Taskbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleClick = () => {
    setMenuIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <div className="taskbar">
      <Button onClick={handleClick}>
        <span className="taskbar__start-btn-label">𝓒𝓜 Catalina McQuade</span>
      </Button>
    </div>
  )
}
