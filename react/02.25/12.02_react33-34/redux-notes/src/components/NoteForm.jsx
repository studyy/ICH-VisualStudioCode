import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { updateNote, addNote } from '../redux/actions/noteActions'

function NoteForm({ editingNote, addNote, updateNote, setEditingNoteId }) {
  const [note, setNote] = useState({ title: '', content: '' })

  useEffect(() => {
    if (editingNote) {
      setNote({
        title: editingNote.title,
        content: editingNote.content,
      })
    }
  }, [editingNote])

  const handleChange = e => {
    const { name, value } = e.target
    setNote(note => ({
      ...note,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (editingNote) {
      updateNote(editingNote.id, note)
      setEditingNoteId(null)
    } else {
      addNote({
        ...note,
        id: new Date().getTime().toString(),
      }) // { title: '', content: '', id: '' }
    }

    setNote({ title: '', content: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='title'
        value={note.title}
        type='text'
        placeholder='Enter note title'
        required
        onChange={handleChange}
      />
      <textarea
        name='content'
        value={note.content}
        placeholder='Enter note content'
        required
        onChange={handleChange}
      />
      <button>Save</button>
    </form>
  )
}

// Зачем нужны mapToProps
// 1. Доступ к state в компоненте (посредством props)
// 2. Объяснить, какие из полей state важны компоненту

const mapStateToProps = (state, ownProps) => ({
  editingNote: state.notes.find(note => note.id === ownProps.editingNoteId),
})

const mapDispatchToProps = {
  addNote,
  updateNote,
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
