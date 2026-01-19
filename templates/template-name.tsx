import { ReactNode } from 'react'

import './template-name.scss'

interface TemplateNameProps {
  children?: ReactNode
}

export default function TemplateName({ children }: TemplateNameProps) {
  return <div className="template-name">{children}</div>
}
