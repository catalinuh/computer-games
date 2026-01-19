'use client'
import { useState } from 'react'
import CalculateIcon from '@mui/icons-material/Calculate'

import { DesktopIcon, Taskbar, Window } from './components'

// desktop
export default function Home() {
  const [openWindow, setOpenWindow] = useState<string>('')

  return (
    <div className="desktop">
      <div className="desktop__icons">
        <DesktopIcon
          setOpenWindow={setOpenWindow}
          icon={<CalculateIcon fontSize="large" />}
          name={'Calculator'}
        />
      </div>

      {openWindow !== '' ? (
        <Window
          setOpenWindow={setOpenWindow}
          title={openWindow}
          icon={<CalculateIcon fontSize="inherit" />}
        >
          {openWindow === 'calculator' ? <> 9 + 10 = 21</> : <></>}
        </Window>
      ) : (
        <></>
      )}
      <Taskbar />
    </div>
  )
}
