import { Dispatch, SetStateAction } from 'react'

import { desktopIcons, ProjectNames, WindowType } from '../../page'

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

  return (
    // window and window-body classes are for 98.css styling
    <div className="window start-menu">
      <div className="window-body start-menu__body">
        <div className="start-menu__banner">Catalina McQuade</div>
        <div className="start-menu__programs">
          {desktopIcons.map((icon) => (
            <div
              key={icon}
              className="start-menu__programs--program"
              onClick={(e) => handleProgramClick(e, icon)}
              onTouchEndCapture={(e) => handleProgramClick(e, icon)}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
