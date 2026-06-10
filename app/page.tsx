'use client'
import { ReactNode, useState } from 'react'
import Image from 'next/image'

import {
  Contact,
  DesktopIcon,
  Experience,
  Folder,
  Projects,
  Skills,
  Taskbar,
  TextFile,
  Window,
} from './components'
import { aboutMe } from './components/text-file/data/about-me'
import Project from './components/project/project'
import { projectsList } from './components/projects/data/projects'

export type WindowType =
  | ''
  | 'About Me'
  | 'Calculator'
  | 'Contact'
  | 'Experience'
  | 'Projects'
  | 'Skills'
  | 'Theme'

export type ProjectNames =
  | 'Wanderlist'
  | 'Regex Spaceship'
  | 'My Blog'
  | 'Forgotten Forest'

const imageMap: {
  [K in WindowType | ProjectNames]: string
} = {
  'About Me': 'notepad',
  Calculator: 'calculator',
  Contact: 'phone',
  Experience: 'briefcase',
  Projects: 'folder',
  Skills: 'skills',
  Theme: 'paint',
  // projects only included for TS, these won't get used yet
  Wanderlist: 'wanderlist',
  'Regex Spaceship': 'regex-spaceship',
  'My Blog': 'blog',
  'Forgotten Forest': 'forgotten-forest',
  '': '',
}

// desktop
export default function Home() {
  const [openWindows, setOpenWindows] = useState<(WindowType | ProjectNames)[]>(
    []
  )
  const [activeIcons, setActiveIcons] = useState<(WindowType | ProjectNames)[]>(
    []
  )
  const [activeWindow, setActiveWindow] = useState<WindowType | ProjectNames>(
    ''
  )
  const [minimizedWindows, setMinimizedWindows] = useState<
    (WindowType | ProjectNames)[]
  >([])
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
      setActiveIcons([])
    }
  }

  return (
    <div className="desktop">
      <div className="desktop__icons" onClick={handleDesktopClick}>
        <div className="desktop__icons--container">
          <div className="desktop__icons--selection-rectangle" />
          <DesktopIcon
            icon={
              <Image
                alt="notepad"
                draggable={false}
                height={64}
                src="/assets/icons/notepad.png"
                unoptimized
                width={64}
                loading="eager"
              />
            }
            isSelected={activeIcons.includes('About Me')}
            name={'About Me'}
            setActiveIcons={setActiveIcons}
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
                loading="eager"
              />
            }
            isSelected={activeIcons.includes('Skills')}
            name={'Skills'}
            setActiveIcons={setActiveIcons}
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
                loading="eager"
              />
            }
            isSelected={activeIcons.includes('Experience')}
            name={'Experience'}
            setActiveIcons={setActiveIcons}
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
                loading="eager"
              />
            }
            isSelected={activeIcons.includes('Projects')}
            name={'Projects'}
            setActiveIcons={setActiveIcons}
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
                loading="eager"
              />
            }
            isSelected={activeIcons.includes('Contact')}
            name={'Contact'}
            setActiveIcons={setActiveIcons}
            setActiveWindow={setActiveWindow}
            setMinimizedWindows={setMinimizedWindows}
            setOpenWindows={setOpenWindows}
          />
        </div>

        {/* <DesktopIcon
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
        /> */}
      </div>

      {filteredOpenWindows?.map((window) => (
        <Window
          key={window}
          activeWindow={activeWindow}
          className={imageMap[window]}
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
          setActiveIcons={setActiveIcons}
          setActiveWindow={setActiveWindow}
          setMinimizedWindows={setMinimizedWindows}
          setOpenWindows={setOpenWindows}
          title={window}
        >
          {window === 'Calculator' ? <>2 + 2 = 4</> : <></>}
          {window === 'About Me' ? <TextFile>{aboutMe}</TextFile> : <></>}
          {window === 'Theme' ? <>Theme settings coming soon!</> : <></>}
          {window === 'Projects' ? (
            <Folder>
              <Projects
                activeIcons={activeIcons}
                setActiveIcons={setActiveIcons}
                setActiveWindow={setActiveWindow}
                setMinimizedWindows={setMinimizedWindows}
                setOpenWindows={setOpenWindows}
              />
            </Folder>
          ) : (
            <></>
          )}
          {window === 'Skills' ? <Skills /> : <></>}
          {window === 'Experience' ? <Experience /> : <></>}
          {window === 'Contact' ? <Contact /> : <></>}
          {window === 'Wanderlist' ||
          window === 'Regex Spaceship' ||
          window === 'My Blog' ||
          window === 'Forgotten Forest' ? (
            <Project
              project={
                projectsList.find((p) => p.name === window) || projectsList[0]
              }
            />
          ) : (
            <></>
          )}
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
