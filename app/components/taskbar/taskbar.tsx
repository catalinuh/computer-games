import WindowIcon from '@mui/icons-material/Window'

import Button from '../button/button'
import './taskbar.scss'

export default function Taskbar() {
  return (
    <div className="taskbar">
      <Button>
        <span>𝓒𝓜 Catalina McQuade</span>
      </Button>
    </div>
  )
}
