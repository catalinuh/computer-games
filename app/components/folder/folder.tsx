import { ReactNode } from 'react'

import './folder.scss'

interface FolderProps {
  children?: ReactNode
}

export default function Folder({ children }: FolderProps) {
  return <div className="folder field-border">{children}</div>
}
