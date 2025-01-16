import { useState } from 'react'
import styles from './Answer.module.css'

export default function Answer({ updateScore }) {
  const [answer, setAnswer] = useState('')

  const handleChange = e => {
    setAnswer(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setAnswer(e.target.value)
    updateScore(answer)
    setAnswer('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type='number'
        placeholder='Put your answer'
        onChange={handleChange}
        value={answer}
      />
      <button>Check</button>
    </form>
  )
}
