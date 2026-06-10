import { ProjectNames, WindowType } from '@/app/page'
import { Dispatch, SetStateAction } from 'react'
import DesktopIcon from '../desktop-icon/desktop-icon'
import { ProjectType, projectsList } from './data/projects'

import './projects.scss'

interface ProjectsProps {
  activeIcon: WindowType | ProjectNames
  setActiveIcon: Dispatch<SetStateAction<WindowType | ProjectNames>>
  setActiveWindow: Dispatch<SetStateAction<WindowType | ProjectNames>>
  setMinimizedWindows: Dispatch<SetStateAction<(WindowType | ProjectNames)[]>>
  setOpenWindows: Dispatch<SetStateAction<(WindowType | ProjectNames)[]>>
}

export default function Projects({
  activeIcon,
  setActiveIcon,
  setActiveWindow,
  setMinimizedWindows,
  setOpenWindows,
}: ProjectsProps) {
  return (
    <div className="projects">
      {projectsList.map((project: ProjectType) => {
        return (
          <DesktopIcon
            key={project.name}
            icon={<img src={project.icon} alt={project.name} />}
            isSelected={activeIcon === project.name}
            name={project.name}
            setActiveIcon={setActiveIcon}
            setActiveWindow={setActiveWindow}
            setMinimizedWindows={setMinimizedWindows}
            setOpenWindows={setOpenWindows}
          />
        )
      })}
    </div>
  )
}
