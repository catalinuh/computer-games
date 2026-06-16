import { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'

import { Clippy, StartMenu } from '../../components'
import useMinuteTimer from '../../hooks/useMinuteTimer'
import { ProjectNames, WindowType } from '../../page'

import './taskbar.scss'

interface TaskbarProps {
  activeWindow: WindowType | ProjectNames
  icons: React.ReactNode[]
  menuIsOpen: boolean
  openWindows: (WindowType | ProjectNames)[]
  setActiveWindow: Dispatch<SetStateAction<WindowType | ProjectNames>>
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>
  setMinimizedWindows: Dispatch<SetStateAction<(WindowType | ProjectNames)[]>>
  setOpenWindows: Dispatch<SetStateAction<(WindowType | ProjectNames)[]>>
}

export default function Taskbar({
  activeWindow,
  icons,
  menuIsOpen,
  openWindows,
  setActiveWindow,
  setMenuIsOpen,
  setMinimizedWindows,
  setOpenWindows,
}: TaskbarProps) {
  const className = menuIsOpen ? 'active' : ''
  const currentTime = useMinuteTimer()

  const handleToggleStartMenu = () => {
    setMenuIsOpen((prevIsOpen) => !prevIsOpen)
  }

  const handleToggleWindow = (window: WindowType | ProjectNames) => {
    if (activeWindow === window) {
      setActiveWindow('')
      setMinimizedWindows((prevMinimizedWindows) => [
        ...prevMinimizedWindows,
        window,
      ])
    } else {
      setActiveWindow(window)
      setMinimizedWindows((prevMinimizedWindows) =>
        prevMinimizedWindows.filter((w) => w !== window)
      )
    }
  }

  return (
    <div className="taskbar__container">
      <div className="taskbar__start-menu-clippy-container">
        {menuIsOpen ? (
          <StartMenu
            setActiveWindow={setActiveWindow}
            setMenuIsOpen={setMenuIsOpen}
            setMinimizedWindows={setMinimizedWindows}
            setOpenWindows={setOpenWindows}
          />
        ) : null}
        <div>
          {/* TODO: Figure out why Clippy isn't appearing??? */}
          <Clippy />
        </div>
      </div>
      <div className="taskbar">
        <div className="taskbar__start-btn-and-windows">
          <button
            onClick={handleToggleStartMenu}
            className={`taskbar__start-btn ${className}`}
          >
            𝓒𝓜 Catalina McQuade
          </button>
          <div className="taskbar__divider"></div>
          {openWindows.map(
            (window: WindowType | ProjectNames, index: number) => (
              <button
                key={window}
                onClick={() => handleToggleWindow(window)}
                className={`taskbar__window-btn ${activeWindow === window ? 'active' : ''}`}
              >
                <span>{icons[index]}</span>
                <span
                  className={`taskbar__window-btn--label ${activeWindow === window ? 'active' : ''}`}
                >
                  {window}
                </span>
              </button>
            )
          )}
        </div>
        <div className="taskbar__time">
          <span>
            <Image
              alt="Sound"
              height={16}
              src="/assets/icons/sound.png"
              width={16}
              loading="eager"
            />
          </span>
          <span>{currentTime.format('hh:mm A')}</span>
        </div>
      </div>
    </div>
  )
}
