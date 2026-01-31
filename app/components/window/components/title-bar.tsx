import { Dispatch, ReactNode, SetStateAction } from 'react'
import Button from '../../button/button'
import './title-bar.scss'

interface TitleBarProps {
  icon: ReactNode
  setOpenWindow: Dispatch<SetStateAction<string>>
  title: string
}

export default function TitleBar({
  icon,
  setOpenWindow,
  title,
}: TitleBarProps) {
  return (
    <div className="title-bar">
      <div className="title-bar__icon-title">
        {icon}
        <div className="title-bar__title">{title}</div>
      </div>
      <Button x={true} setOpenWindow={setOpenWindow} fontSize='17px'>
        X
      </Button>
    </div>
  )
}
