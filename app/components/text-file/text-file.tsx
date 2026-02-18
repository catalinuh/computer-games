import { ReactNode, useEffect, useRef } from 'react'

import './text-file.scss'

interface TextFileProps {
  children?: ReactNode
}

export default function TextFile({ children }: TextFileProps) {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (divRef.current) {
      divRef.current.focus()
    }
  }, [])

  return (
    <div className="text-file" ref={divRef}>
      {children}
    </div>
  )
}
