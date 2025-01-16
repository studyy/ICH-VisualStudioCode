import { useEffect, useState } from 'react'
import styles from './Timer.module.css'

export default function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [status, setStatus] = useState(false)
  useEffect(() => {
    let interval
    if (status) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000)
    } else if (!status && seconds !== 0) {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval)
    }
  }, [seconds, status])
  function handleReset() {
    setStatus(false)
    setSeconds(0)
  }

  return (
  <div className={styles.timerContainer}>
      <div className={styles.timerDiv}>
      <h1 className={styles.timerTitle}>{seconds}</h1>
      <button className={styles.timerButton} onClick={() => setStatus(true)}>
        Start
      </button>
      <button className={styles.timerButton} onClick={() => setStatus(false)}>
        Stop
      </button>
      <button className={styles.timerButton} onClick={handleReset}>
        Reset
      </button>
    </div>
  </div>
  )
}
