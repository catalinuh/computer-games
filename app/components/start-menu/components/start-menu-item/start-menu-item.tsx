import { ReactNode } from 'react'

import './start-menu-item.scss'

interface StartMenuItemProps {
  children?: ReactNode
}

export default function StartMenuItem({ children }: StartMenuItemProps) {
  return <div className="start-menu-item">{children}</div>
}
