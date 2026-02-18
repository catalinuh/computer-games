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
  const [openWindows, setOpenWindows] = useState<
    ('' | 'Calculator' | 'About Me')[]
  >([])
  const [activeIcon, setActiveIcon] = useState<'' | 'Calculator' | 'About Me'>(
    ''
  )

  return (
    <div className="desktop">
      <div className="desktop__icons">
        <DesktopIcon
          setOpenWindow={setOpenWindows}
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
          setOpenWindows={setOpenWindows}
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

      {openWindows.length ? (
        <Window
          setOpenWindow={setOpenWindows}
          title={openWindows}
          icon={
            <Image
              src={`/assets/icons/${imageMap[openWindows]}-sm.png`}
              alt="+/-"
              width={16}
              height={16}
              unoptimized
              draggable={false}
            />
          }
          className={openWindows === 'About Me' ? 'text-file' : ''}
        >
          {openWindows === 'Calculator' ? <> 9 + 10 = 21</> : <></>}
          {openWindows === 'About Me' ? <TextFile>{aboutMe}</TextFile> : <></>}
        </Window>
      ) : (
        <></>
      )}
      <Taskbar />
    </div>
  )
}
