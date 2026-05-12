'use client'
import { ReactNode, useState } from 'react'
import Image from 'next/image'

import {
  DesktopIcon,
  Experience,
  Skills,
  Taskbar,
  TextFile,
  Window,
} from './components'
import { aboutMe } from './components/text-file/data/about-me'

export type WindowType =
  | ''
  | 'About Me'
  | 'Calculator'
  | 'Contact'
  | 'Experience'
  | 'Projects'
  | 'Skills'
  | 'Theme'

const imageMap: {
  [K in WindowType]: string
} = {
  'About Me': 'notepad',
  Calculator: 'calculator',
  Contact: 'phone',
  Experience: 'briefcase',
  Projects: 'folder',
  Skills: 'skills',
  Theme: 'paint',
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
        <div>
          {/* TODO: Put this back in when you create a misc. program folder or something */}
          {/* <DesktopIcon
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
            name={'Calculator'}
            setActiveIcon={setActiveIcon}
            setActiveWindow={setActiveWindow}
            setMinimizedWindows={setMinimizedWindows}
            setOpenWindows={setOpenWindows}
          /> */}

          <DesktopIcon
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
            name={'About Me'}
            setActiveIcon={setActiveIcon}
            setActiveWindow={setActiveWindow}
            setMinimizedWindows={setMinimizedWindows}
            setOpenWindows={setOpenWindows}
          />

          <DesktopIcon
            icon={
              <Image
                alt="skills"
                draggable={false}
                height={64}
                src="/assets/icons/skills.png"
                unoptimized
                width={64}
              />
            }
            isSelected={activeIcon === 'Skills'}
            name={'Skills'}
            setActiveIcon={setActiveIcon}
            setActiveWindow={setActiveWindow}
            setMinimizedWindows={setMinimizedWindows}
            setOpenWindows={setOpenWindows}
          />

          <DesktopIcon
            icon={
              <Image
                alt="experience"
                draggable={false}
                height={64}
                src="/assets/icons/briefcase.png"
                unoptimized
                width={64}
              />
            }
            isSelected={activeIcon === 'Experience'}
            name={'Experience'}
            setActiveIcon={setActiveIcon}
            setActiveWindow={setActiveWindow}
            setMinimizedWindows={setMinimizedWindows}
            setOpenWindows={setOpenWindows}
          />

          <DesktopIcon
            icon={
              <Image
                alt="folder"
                draggable={false}
                height={64}
                src="/assets/icons/folder.png"
                unoptimized
                width={64}
              />
            }
            isSelected={activeIcon === 'Projects'}
            name={'Projects'}
            setActiveIcon={setActiveIcon}
            setActiveWindow={setActiveWindow}
            setMinimizedWindows={setMinimizedWindows}
            setOpenWindows={setOpenWindows}
          />

          <DesktopIcon
            icon={
              <Image
                alt="contact-me"
                draggable={false}
                height={64}
                src="/assets/icons/phone.png"
                unoptimized
                width={64}
              />
            }
            isSelected={activeIcon === 'Contact'}
            name={'Contact'}
            setActiveIcon={setActiveIcon}
            setActiveWindow={setActiveWindow}
            setMinimizedWindows={setMinimizedWindows}
            setOpenWindows={setOpenWindows}
          />
        </div>

        <DesktopIcon
          icon={
            <Image
              alt="paint"
              draggable={false}
              height={64}
              src="/assets/icons/paint.png"
              unoptimized
              width={64}
            />
          }
          isSelected={activeIcon === 'Theme'}
          name={'Theme'}
          setActiveIcon={setActiveIcon}
          setActiveWindow={setActiveWindow}
          setMinimizedWindows={setMinimizedWindows}
          setOpenWindows={setOpenWindows}
        />
      </div>

      {filteredOpenWindows?.map((window) => (
        <Window
          key={window}
          activeWindow={activeWindow}
          // TODO: fix this so that it doesn't just check if the window is "About Me" or "Projects"
          className={
            window === 'About Me'
              ? 'text-file'
              : window === 'Projects'
                ? 'folder'
                : window === 'Skills'
                  ? 'skills'
                  : ''
          }
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
          {window === 'Theme' ? <>Theme settings coming soon!</> : <></>}
          {window === 'Projects' ? <>Project list coming soon!</> : <></>}
          {window === 'Skills' ? <Skills /> : <></>}
          {window === 'Experience' ? <Experience /> : <></>}
          {window === 'Contact' ? <>Contact information coming soon!</> : <></>}
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
