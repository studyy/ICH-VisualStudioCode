import { useState } from 'react'

export default function Answer({ updatePoints }) {
  const [answer, setAnswer] = useState('')

  const handleChange = e => setAnswer(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    setAnswer(e.target.value)
    updatePoints(answer)
    setAnswer('')
  }
  return (
    <form onSubmit={handleSubmit}>
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
