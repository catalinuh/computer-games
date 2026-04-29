import { ReactNode, useEffect, useRef } from 'react'

import './text-file.scss'

interface TextFileProps {
  children?: ReactNode
}

export default function TextFile({ children }: TextFileProps) {
  const divRef = useRef<HTMLDivElement>(null)

  // TODO: Remember what this does and leave a comment about it. I think it focuses the text file when it's opened so that you can immediately start typing??????
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
