import { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'

import { desktopIcons, imageMap, ProjectNames, WindowType } from '../../page'

import './start-menu.scss'
import { projectsList } from '../projects/data/projects'

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
  }

  const handleMouseOver = (
    _e: React.MouseEvent<HTMLDivElement>,
    name: WindowType | ProjectNames
  ) => {
    setHoveredMenuItem(name)
  }

  return (
    // window and window-body classes are for 98.css styling
    <div className="start-menu__container">
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
                className="start-menu__programs--program"
                onClick={(e) => handleProgramClick(e, icon)}
                // for mobile device
                onTouchEndCapture={(e) => handleProgramClick(e, icon)}
                onMouseOver={
                  imageMap[icon] === 'folder'
                    ? (e) => handleMouseOver(e, icon)
                    : undefined
                }
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
      {hoveredMenuItem === 'Projects' ? (
        <div className="window start-menu__hovered-menu">
          <div className="start-menu__hovered-menu--programs">
            {projectsList.map(({ name }) => (
              <div
                key={name}
                className="start-menu__hovered-menu--programs--program"
                onClick={(e) => handleProgramClick(e, name)}
                // for mobile device
                onTouchEndCapture={(e) => handleProgramClick(e, name)}
                onMouseOver={
                  imageMap[name] === 'folder'
                    ? (e) => handleMouseOver(e, name)
                    : undefined
                }
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
