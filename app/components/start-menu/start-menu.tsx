import { ReactNode } from 'react'

import './start-menu.scss'

interface StartMenuProps {
  children?: ReactNode
}

export default function StartMenu({}: StartMenuProps) {
  return (
    <div className="window start-menu">
      <div className="window-body">Start Menu</div>
    </div>
  )
}
