'use client'
import { useState } from 'react'
import Image from 'next/image'

import { DesktopIcon, Taskbar, TextFile, Window } from './components'
import { aboutMe } from './pages/about-me'

const imageMap = {
  Calculator: 'calculator',
  'About Me': 'notepad',
  '': '',
}

// desktop
export default function Home() {
  const [openWindow, setOpenWindow] = useState<'' | 'Calculator' | 'About Me'>(
    ''
  )
  const [activeIcon, setActiveIcon] = useState<'' | 'Calculator' | 'About Me'>(
    ''
  )

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
          isSelected={activeIcon === 'Calculator'}
          setActiveIcon={setActiveIcon}
          name={'Calculator'}
        />

        <DesktopIcon
          setOpenWindow={setOpenWindow}
          icon={
            <Image
              src="/assets/icons/notepad.png"
              alt="+/-"
              width={64}
              height={64}
              unoptimized
              draggable={false}
            />
          }
          isSelected={activeIcon === 'About Me'}
          setActiveIcon={setActiveIcon}
          name={'About Me'}
        />
      </div>

      {openWindow.length ? (
        <Window
          setOpenWindow={setOpenWindow}
          title={openWindow}
          icon={
            <Image
              src={`/assets/icons/${imageMap[openWindow]}-sm.png`}
              alt="+/-"
              width={16}
              height={16}
              unoptimized
              draggable={false}
            />
          }
          className={openWindow === 'About Me' ? 'text-file' : ''}
        >
          {openWindow === 'Calculator' ? <> 9 + 10 = 21</> : <></>}
          {openWindow === 'About Me' ? <TextFile>{aboutMe}</TextFile> : <></>}
        </Window>
      ) : (
        <></>
      )}
      <Taskbar />
    </div>
  )
}
