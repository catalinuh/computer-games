// TODO: fix this
// import Draggable from 'react-draggable'

import Taskbar from './components/taskbar/taskbar'
import Window from './components/window/window'

// desktop
export default function Home() {
  return (
    <div>
      {/* <Draggable> */}
      <Window />
      {/* </Draggable> */}
      <Taskbar />
    </div>
  )
}
