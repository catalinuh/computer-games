'use client'
import { useState } from 'react'
import Image from 'next/image'

import { DesktopIcon, Taskbar, Window } from './components'

// desktop
export default function Home() {
  const [openWindow, setOpenWindow] = useState<string>('')
  const [activeIcon, setActiveIcon] = useState('')

  return (
    <div className="desktop">
      <div className="desktop__icons">
        <DesktopIcon
          setOpenWindow={setOpenWindow}
          icon={
            <Image
              src="/assets/icons/calculator.png"
              alt="+/-"
              width={64}
              height={64}
              unoptimized
              draggable={false}
            />
          }
          isSelected={activeIcon === 'calculator'}
          setActiveIcon={setActiveIcon}
          name={'Calculator'}
        />
      </div>

      {openWindow !== '' ? (
        <Window
          setOpenWindow={setOpenWindow}
          title={'Calculator'}
          icon={
            <Image
              src="/assets/icons/calculator.png"
              alt="+/-"
              width={32}
              height={32}
              unoptimized
              draggable={false}
            />
          }
        >
          {openWindow === 'calculator' ? <> 9 + 10 = 21</> : <></>}
        </Window>
      ) : (
        <></>
      )}
      <Taskbar />
    </div>
  )
}
