import { useState } from 'react'
import styles from './NoteForm.module.css'

export default function NoteForm({ addNotes }) {
  const [noteText, setNoteText] = useState('')

  const handleChange = e => {
    setNoteText(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addNotes(noteText)
    setNoteText('')
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={noteText}
        onChange={handleChange}
        type='text'
        required
      />
      <button className={styles.button} type='submit'>
        Submit
      </button>
    </form>
  )
}
