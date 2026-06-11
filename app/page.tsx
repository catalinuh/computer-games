'use client'
import { ReactNode, useRef, useState } from 'react'
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

  // state and ref for selection rectangle
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [currentY, setCurrentY] = useState(0)

  const containerRef = useRef<HTMLDivElement | null>(null)
  const wasDraggingRef = useRef(false)

  const getSelectionBounds = () => ({
    left: Math.min(startX, currentX),
    top: Math.min(startY, currentY),
    width: Math.abs(startX - currentX),
    height: Math.abs(startY - currentY),
  })

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

  const checkOverlap = (
    rect1: { left: number; top: number; width: number; height: number },
    rect2: { left: number; top: number; width: number; height: number }
  ) => {
    return (
      rect1.left < rect2.left + rect2.width &&
      rect1.left + rect1.width > rect2.left &&
      rect1.top < rect2.top + rect2.height &&
      rect1.top + rect1.height > rect2.top
    )
  }

  const checkCollisions = (selectionBounds: {
    left: number
    top: number
    width: number
    height: number
  }) => {
    if (!containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const newlySelected: (WindowType | ProjectNames)[] = []

    // Find all elements with the class 'desktop-icon'
    const iconElements = containerRef.current.querySelectorAll('.desktop-icon')

    iconElements.forEach((element) => {
      const iconRect = element.getBoundingClientRect()
      const iconName = element.textContent as WindowType | ProjectNames

      // Convert icon coordinates to be relative to the desktop container
      const relativeIconBounds = {
        left: iconRect.left - containerRect.left,
        top: iconRect.top - containerRect.top,
        width: iconRect.width,
        height: iconRect.height,
      }

      // Check if the selection box overlaps this icon
      if (checkOverlap(selectionBounds, relativeIconBounds)) {
        newlySelected.push(iconName)
      }
    })

    setActiveIcons(newlySelected)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDesktopClick = (e: any) => {
    // TODO: Fix this any ^
    // If they were dragging a box, do not clear the selection!
    if (wasDraggingRef.current) {
      wasDraggingRef.current = false
      return
    }

    setActiveWindow('')
    if ((e.target as HTMLDivElement).className === 'desktop__icons') {
      setActiveIcons([])
    }
  }

  const handlePointerDown = (e: any) => {
    if (e.button !== 0) return // Only left click
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    setStartX(e.clientX - rect.left)
    setStartY(e.clientY - rect.top)
    setCurrentX(e.clientX - rect.left)
    setCurrentY(e.clientY - rect.top)

    wasDraggingRef.current = false // Reset on new click
    setIsDragging(true)
  }

  const handlePointerMove = (e: any) => {
    if (!isDragging) return
    wasDraggingRef.current = true // Mark that user actually dragged
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    setCurrentX(e.clientX - rect.left)
    setCurrentY(e.clientY - rect.top)

    const currentBounds = getSelectionBounds()
    checkCollisions(currentBounds)
  }

  const handlePointerUp = () => {
    if (!isDragging) return
    setIsDragging(false)
  }

  return (
    <div className="desktop">
      <div
        className="desktop__icons"
        onClick={handleDesktopClick}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        // for mobile device
        onTouchEnd={handlePointerUp}
        onTouchMove={handlePointerMove}
        onTouchStart={handlePointerDown}
        ref={containerRef}
      >
        <div className="desktop__icons--container">
          {isDragging && (
            <div
              className="desktop__icons--selection-rectangle"
              style={{
                position: 'absolute',
                ...getSelectionBounds(), // Injects left, top, width, height dynamically
              }}
            />
          )}
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
