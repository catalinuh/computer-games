import { ReactNode } from 'react'

import './start-menu.scss'

interface StartMenuProps {
  children?: ReactNode
}

export default function StartMenu({}: StartMenuProps) {
  return (
    // window and window-body classes are for 98.css
    <div className="window start-menu">
      <div className="window-body start-menu__body">
        <div className="start-menu__banner">Catalina McQuade</div>
        <div className="start-menu__programs">
          <div className="start-menu__programs--program">About Me</div>
        </div>
      </div>
    </div>
  )
}
