'use client'

import Taskbar from './components/taskbar/taskbar'
import Window from './components/window/window'

// desktop
export default function Home() {
  return (
    <div className="desktop">
      <Window />
      <Taskbar />
    </div>
  )
}
