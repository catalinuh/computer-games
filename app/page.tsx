'use client'
import { ReactNode, useState } from 'react'
import Image from 'next/image'

import { DesktopIcon, Taskbar, TextFile, Window } from './components'
import { aboutMe } from './pages/about-me'

export type WindowType = '' | 'Calculator' | 'About Me'

const imageMap: {
  [K in WindowType]: string
} = {
  Calculator: 'calculator',
  'About Me': 'notepad',
  '': '',
}

// desktop
export default function Home() {
  const [openWindows, setOpenWindows] = useState<WindowType[]>([])
  const [activeIcon, setActiveIcon] = useState<WindowType>('')
  const [activeWindow, setActiveWindow] = useState<WindowType>('')

  const icons: ReactNode[] = openWindows.map((window) => (
    <Image
      key={window}
      alt={imageMap[window]}
      draggable={false}
      height={16}
      src={`/assets/icons/${imageMap[window]}-sm.png`}
      unoptimized
      width={16}
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
              alt="calculator"
              draggable={false}
              height={64}
              src="/assets/icons/calculator.png"
              unoptimized
              width={64}
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
              alt="notepad"
              draggable={false}
              height={64}
              src="/assets/icons/notepad.png"
              unoptimized
              width={64}
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
          activeWindow={activeWindow}
          className={window === 'About Me' ? 'text-file' : ''}
          icon={
            <Image
              alt={window}
              draggable={false}
              height={16}
              src={`/assets/icons/${imageMap[window]}-sm.png`}
              unoptimized
              width={16}
            />
          }
          setActiveWindow={setActiveWindow}
          setOpenWindows={setOpenWindows}
          title={window}
        >
          {window === 'Calculator' ? <>2 + 2 = 4</> : <></>}
          {window === 'About Me' ? <TextFile>{aboutMe}</TextFile> : <></>}
        </Window>
      ))}

      <Taskbar
        activeWindow={activeWindow}
        icons={icons}
        openWindows={openWindows}
        setActiveWindow={setActiveWindow}
      />
    </div>
  )
}
