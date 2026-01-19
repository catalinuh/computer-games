import { Dispatch, ReactNode, SetStateAction, useRef } from 'react'
import Draggable from 'react-draggable'

import TitleBar from './components/title-bar'
import './window.scss'

interface WindowProps {
  children?: ReactNode
  icon: ReactNode
  setOpenWindow: Dispatch<SetStateAction<string>>
  title: string
}

export default function Window({
  icon,
  setOpenWindow,
  title,
  children,
}: WindowProps) {
  const nodeRef = useRef(null)

  return (
    <Draggable nodeRef={nodeRef}>
      <div className={`window`} ref={nodeRef}>
        <div className="window__inner">
          <TitleBar setOpenWindow={setOpenWindow} title={title} icon={icon} />
          <div className="window__content">{children}</div>
        </div>
      </div>
    </Draggable>
  )
}
