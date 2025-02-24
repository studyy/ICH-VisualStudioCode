import { connect } from 'react-redux'
import { deleteNote, updateNote } from '../redux/actions/noteActions'

function NoteItem({ note, deleteNote, setEditingNoteId }) {
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={() => setEditingNoteId(note.id)}>Edit</button>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  )
}

const mapDispatchToProps = {
  deleteNote,
  updateNote,
}

export default connect(null, mapDispatchToProps)(NoteItem)
