import { useState } from 'react'
import styles from './List.module.css'

export default function List() {
  const [people, setPeople] = useState([
    { id: 1, name: 'Иван', age: 20 },

    { id: 2, name: 'Мария', age: 22 },

    { id: 3, name: 'Алексей', age: 21 },

    { id: 4, name: 'Марина', age: 19 },

    { id: 5, name: 'Даша', age: 23 },

    { id: 6, name: 'Глеб', age: 24 },

    { id: 7, name: 'Дима', age: 18 },

    { id: 8, name: 'Гриша', age: 20 },

    { id: 9, name: 'Серафим', age: 21 },
  ])

  //   const removePeople = id => {
  //     setPeople(people.filter(person => person.id !== id))
  //   }

  //   return (
  //     <div>
  //       <h2>Список приглашенных</h2>
  //       <ul>
  //         {people.map(item => (
  //           <li key={item.id}>
  //             Name: {item.name}, Age: {item.age}
  //             <button onClick={() => removePeople(item.id)}>X</button>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   )

  const removePerson = id => {
    setPeople(people.filter(person => person.id !== id))
  }

  return (
    <div className={styles.list}>
      <h3>People list</h3>
      <ul>
        {people.map(person => (
          <li key={person.id} className={styles.listItem}>
            {person.name}, {person.age} years old
            <button
              className={styles.removeBtn}
              onClick={() => removePerson(person.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
