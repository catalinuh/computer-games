import WindowIcon from '@mui/icons-material/Window'

import './taskbar.scss'

export default function Taskbar() {
  return (
    <div className="taskbar">
      <button className="taskbar__start-btn">
        <div>
          <WindowIcon fontSize="inherit" />
          Start
        </div>
      </button>
    </div>
  )
}
