import { useState } from 'react'
import styles from './Note.module.css'

export default function Note({ text, removeNotes, noteId }) {
  const [status, setStatus] = useState('not ready')

  const handleChange = () => {
    setStatus(prevStatus =>
      prevStatus === 'not ready' ? 'ready' : 'not ready'
    )
  }
  return (
    <li className={styles.note}>
      <p className={status === 'ready' ? styles.pDone : styles.p}>
        {status === 'ready' ? 'READY' : text}
      </p>
      <input className={styles.check} type='checkbox' onChange={handleChange} />
      <button onClick={() => removeNotes(noteId)}>Delete</button>
    </li>
  )
}
