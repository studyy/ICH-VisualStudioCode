import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from '../actions/noteActions'

const initialState = {
  notes: [],
}

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      // добавление -> копируем предыдущее и вставляет новый элемент в конец
      return {
        ...state,
        notes: [...state.notes, action.payload],
      }
    case UPDATE_NOTE:
      // как что-то поменять в списке
      // 1. Пройтись по списку (например, с помощью .map())
      // 2. Найти нужный элемент (например, с помощью id этого элемента)
      // 3. Если текущий элемент === нужному элементу, сделать замену
      // 4. Иначе вернуть элемент без изменений
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.id
            ? { ...note, ...action.payload.updatedNote }
            : note
        ),
      }
    case DELETE_NOTE:
      // если удаление ===> .filter()
      // [1, 2, 3, 4, 5, 6, 7] => [1, 2, 3, 4, 5, 6, 7].filter(item => item !== 3)
      // [1, 2, 4, 5, 6, 7]
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload),
      }
    default:
      return state
  }
}
