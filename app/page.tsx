'use client'
import { ReactNode, useState } from 'react'
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
  const [activeWindow, setActiveWindow] = useState<
    '' | 'Calculator' | 'About Me'
  >('')

  const icons: ReactNode[] = openWindows.map((window) => (
    <Image
      key={window}
      src={`/assets/icons/${imageMap[window]}-sm.png`}
      alt={imageMap[window]}
      width={16}
      height={16}
      unoptimized
      draggable={false}
    />
  ))

  const handleDesktopClick = (e: MouseEvent) => {
    console.log('click to desktop')
    // setActiveIcon('')
    setActiveWindow('')
    if ((e.target as HTMLDivElement).className === 'desktop-icon')
      console.log('clicked desktop icon')
  }

  return (
    <div className="desktop">
      <div className="desktop__icons" onClick={() => handleDesktopClick}>
        <DesktopIcon
          setOpenWindows={setOpenWindows}
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

      {openWindows?.map((window) => (
        <Window
          key={window}
          setOpenWindows={setOpenWindows}
          title={window}
          icon={
            <Image
              src={`/assets/icons/${imageMap[window]}-sm.png`}
              alt="+/-"
              width={16}
              height={16}
              unoptimized
              draggable={false}
            />
          }
          className={window === 'About Me' ? 'text-file' : ''}
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        >
          {window === 'Calculator' ? <>2 + 2 = 4</> : <></>}
          {window === 'About Me' ? <TextFile>{aboutMe}</TextFile> : <></>}
        </Window>
      ))}

      <Taskbar
        icons={icons}
        openWindows={openWindows}
        activeWindow={activeWindow}
        setActiveWindow={setActiveWindow}
      />
    </div>
  )
}
