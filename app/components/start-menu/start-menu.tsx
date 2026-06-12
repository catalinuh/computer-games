import React, { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'

import { desktopIcons, imageMap, ProjectNames, WindowType } from '../../page'
import { projectsList } from '../projects/data/projects'

import './start-menu.scss'

interface StartMenuProps {
  setActiveWindow: Dispatch<SetStateAction<WindowType | ProjectNames>>
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>
  setMinimizedWindows: Dispatch<SetStateAction<(WindowType | ProjectNames)[]>>
  setOpenWindows: Dispatch<SetStateAction<(WindowType | ProjectNames)[]>>
}

export default function StartMenu({
  setActiveWindow,
  setMenuIsOpen,
  setMinimizedWindows,
  setOpenWindows,
}: StartMenuProps) {
  const [hoveredMenuItem, setHoveredMenuItem] = useState<
    WindowType | ProjectNames | null
  >(null)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  const handleProgramClick = (
    _e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    name: WindowType | ProjectNames
  ) => {
    setActiveWindow(name)
    setMinimizedWindows((prevMinimizedWins: (WindowType | ProjectNames)[]) =>
      prevMinimizedWins.filter((window) => window !== name)
    )
    setOpenWindows((prevOpenWindows: (WindowType | ProjectNames)[]) => {
      const windowAlreadyOpen = prevOpenWindows.includes(name)
      return windowAlreadyOpen ? prevOpenWindows : [...prevOpenWindows, name]
    })
    setMenuIsOpen(false)
    setHoveredMenuItem(null)
  }

  const handleMouseEnter = (
    _e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    name?: WindowType | ProjectNames
  ) => {
    // sub menu doesn't pass name into handleMouseEnter so if there is name, we're in first menu
    if (name) {
      setHoveredMenuItem(name)
      if (name === 'Projects') setIsSubMenuOpen(true)
      else setIsSubMenuOpen(false)
      // entering menu with no name i.e. project sub-menu
    } else {
      setHoveredMenuItem('Projects')
      setIsSubMenuOpen(true)
    }
  }

  const handleMouseLeave = (
    _e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    setHoveredMenuItem(null)
    setIsSubMenuOpen(false)
  }

  // TODO: Make sub-menu opening and closing work better on mobile
  return (
    // window and window-body classes are for 98.css styling
    <div
      className="start-menu__container"
      onMouseLeave={(e) => handleMouseLeave(e)}
      // for mobile device
      onTouchEnd={(e) => handleMouseLeave(e)}
    >
      <div className="window start-menu">
        <div className="window-body start-menu__body">
          <div className="start-menu__banner">
            Catalina
            <span className="start-menu__banner--last-name">McQuade</span>
          </div>
          <div className="start-menu__programs">
            {desktopIcons.map((icon) => (
              <div
                key={icon}
                className={`start-menu__programs--program${hoveredMenuItem === icon ? ' active' : ''}`}
                onClick={(e) => handleProgramClick(e, icon)}
                onMouseEnter={(e) => handleMouseEnter(e, icon)}
                // for mobile device
                onTouchStart={(e) => handleMouseEnter(e, icon)}
                onTouchEndCapture={(e) => handleProgramClick(e, icon)}
              >
                <div className={`start-menu__programs--icon-and-name`}>
                  <Image
                    alt={imageMap[icon]}
                    height={32}
                    src={`/assets/icons/${imageMap[icon]}-md.png`}
                    width={32}
                    loading="eager"
                  />
                  <div className="start-menu__programs--name">{icon}</div>
                </div>
                {imageMap[icon] === 'folder' ? (
                  <div className="start-menu__programs--arrow">▶</div>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {isSubMenuOpen ? (
        <div
          className="window start-menu__hovered-menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={(e) => handleMouseLeave(e)}
          // for mobile device
          onTouchStart={handleMouseEnter}
          onTouchEnd={(e) => handleMouseLeave(e)}
        >
          <div className="start-menu__hovered-menu--programs">
            {projectsList.map(({ name }) => (
              <div
                key={name}
                className="start-menu__hovered-menu--programs--program"
                onClick={(e) => handleProgramClick(e, name)}
                // for mobile device
                onTouchEndCapture={(e) => handleProgramClick(e, name)}
              >
                <div
                  className={`start-menu__hovered-menu--programs--icon-and-name`}
                >
                  <Image
                    alt={imageMap[name]}
                    height={16}
                    src={`/assets/icons/${imageMap[name]}-sm.png`}
                    width={16}
                    loading="eager"
                  />
                  <div className="start-menu__hovered-menu--programs--name">
                    {name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
