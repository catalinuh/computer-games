import { Dispatch, ReactNode, SetStateAction } from 'react'
import Image from 'next/image'

import Button from '../../button/button'
import X from '../../../../public/assets/icons/x.svg'
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
      <Button x={true} setOpenWindow={setOpenWindow}>
        <Image src={X} width={17} height={17} alt="X" />
      </Button>
    </div>
  )
}
