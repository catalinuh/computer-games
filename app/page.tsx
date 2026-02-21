'use client'
import { ReactNode, useState } from 'react'
import Image from 'next/image'

import { DesktopIcon, Taskbar, TextFile, Window } from './components'
import { aboutMe } from './pages/about-me'

export type WindowType = '' | 'About Me' | 'Calculator'

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
  const [minimizedWindows, setMinimizedWindows] = useState<WindowType[]>([])
  const filteredOpenWindows = openWindows.filter(
    (window) => !minimizedWindows.includes(window)
  )

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDesktopClick = (e: any) => {
    // TODO: Fix this any ^
    setActiveWindow('')
    if ((e.target as HTMLDivElement).className === 'desktop__icons') {
      setActiveIcon('')
    }
  }

  return (
    <div className="desktop">
      <div className="desktop__icons" onClick={handleDesktopClick}>
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
          setActiveWindow={setActiveWindow}
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
          setActiveWindow={setActiveWindow}
        />
      </div>

      {filteredOpenWindows?.map((window) => (
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
          setActiveIcon={setActiveIcon}
          setActiveWindow={setActiveWindow}
          setMinimizedWindows={setMinimizedWindows}
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
        setMinimizedWindows={setMinimizedWindows}
      />
    </div>
  )
}
