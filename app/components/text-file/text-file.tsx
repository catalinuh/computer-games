import { ReactNode } from 'react'

import './text-file.scss'

interface TextFileProps {
  children?: ReactNode
}

export default function TextFile({ children }: TextFileProps) {
  return <div className="text-file">{children}</div>
}
