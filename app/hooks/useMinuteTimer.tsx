import { useEffect, useRef, useState } from 'react'
import dayjs from 'dayjs'

const useMinuteTimer = () => {
  const [currentTime, setCurrentTime] = useState(dayjs())
  // TODO: Find real type to replace any
  // Ref to store the interval ID for cleanup
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const intervalIdRef = useRef<any>(null)

  useEffect(() => {
    const updateTimeToNextMinute = () => {
      setCurrentTime(dayjs())
      // Clear the initial timeout, if it exists (only relevant if useEffect runs again)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      // Start the regular minute interval
      intervalIdRef.current = setInterval(() => {
        setCurrentTime(dayjs())
      }, 60000) // 60000ms = 1 minute
    }

    // Calculate initial delay to the next :00 second mark
    const now = dayjs()
    const seconds = Number(now.format('s'))
    const milliseconds = Number(now.format('SSS'))
    const delay = (60 - seconds) * 1000 - milliseconds

    // Use setTimeout for the initial wait
    const timeoutId = setTimeout(updateTimeToNextMinute, delay)

    // Cleanup function to stop both the timeout and the interval when the component unmounts
    return () => {
      clearTimeout(timeoutId)
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current)
      }
    }
  }, []) // Empty dependency array ensures this runs only on mount

  return currentTime
}

export default useMinuteTimer
