export const ADD_NOTE = 'ADD_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

export const addNote = note => ({
  type: ADD_NOTE,
  payload: note,
}) // action creator

export const updateNote = (id, updatedNote) => ({
  type: UPDATE_NOTE,
  payload: { id, updatedNote },
})

// updateNote => remove oldText and paste newText

export const deleteNote = id => ({
  type: DELETE_NOTE,
  payload: id,
})
