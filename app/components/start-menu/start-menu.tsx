import { ReactNode } from 'react'

import './start-menu.scss'

interface StartMenuProps {
  children?: ReactNode
}

export default function StartMenu({}: StartMenuProps) {
  return (
    <div className="start-menu">
      <div>Start Menu</div>
    </div>
  )
}
