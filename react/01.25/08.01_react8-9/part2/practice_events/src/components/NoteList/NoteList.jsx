import { useState } from 'react'
import Note from '../Note/Note'
import styles from './NoteList.module.css'
import NoteForm from '../NoteForm/NoteForm'

export default function NoteList() {
  const [notes, setNotes] = useState([])

  const addNotes = noteText => {
    const newNote = {
      id: Date.now(),
      text: noteText,
    }
    setNotes(prevNotes => [...prevNotes, newNote])
  }

  const removeNotes = noteId => {
    setNotes(prevNotes => prevNotes.filter(item => item.id !== noteId))
  }

  return (
    <>
      <NoteForm addNotes={addNotes} />
      <ul className={styles.noteList}>
        {notes.map(note => (
          <Note
            key={note}
            text={note.text}
            noteId={note.id}
            removeNotes={removeNotes}
          />
        ))}
      </ul>
    </>
  )
}
