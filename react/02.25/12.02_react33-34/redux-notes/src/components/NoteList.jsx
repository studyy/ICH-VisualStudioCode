import { connect } from 'react-redux'
import NoteItem from './NoteItem'
import { useState } from 'react'
import NoteForm from './NoteForm'

function NoteList({ notes }) {
  const [editingNoteId, setEditingNoteId] = useState(null)

  return (
    <div>
      <NoteForm
        editingNoteId={editingNoteId}
        setEditingNoteId={setEditingNoteId}
      />
      <ul>
        {notes?.map(note => (
          <li key={note.id}>
            <NoteItem note={note} setEditingNoteId={setEditingNoteId} />
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  notes: state.notes,
})

export default connect(mapStateToProps)(NoteList)
