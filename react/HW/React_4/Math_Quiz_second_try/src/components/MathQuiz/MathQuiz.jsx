import { useState } from 'react'
import Answer from '../Answer/Answer'

import styles from './MathQuiz.module.css'

export default function MathQuiz() {
  const [score, setScore] = useState(0)
  const [number, setNumber] = useState(generateNumber())

  function generateNumber() {
    return {
      a: Math.floor(Math.random() * 100),
      b: Math.floor(Math.random() * 100),
    }
  }

  function updateScore(userAnswer) {
    const correctAnswer = number.a + number.b
    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score => score + 1)
    } else {
      setScore(score => score - 1)
    }
    setNumber(generateNumber)
  }

  return (
    <div className={styles.container}>
      <h2>Your current score: {score}</h2>
      <h3>
        How much is {number.a} + {number.b}?
      </h3>
      <Answer updateScore={updateScore} />
    </div>
  )
}
