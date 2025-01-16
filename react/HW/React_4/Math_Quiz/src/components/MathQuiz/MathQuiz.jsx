import { useState } from 'react'
import Answer from '../Answer/Answer'

export default function MathQuiz() {
  const [score, setScore] = useState(0)
  const [numbers, setNumbers] = useState(generateNumbers())

  function generateNumbers() {
    return {
      a: Math.floor(Math.random() * 100),
      b: Math.floor(Math.random() * 100),
    }
  }
  function updatePoints(userAnswer) {
    const correctAnswer = numbers.a + numbers.b
    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score => score + 1)
    } else {
      setScore(score => score - 1)
    }
    setNumbers(generateNumbers)
  }

  return (
    <div>
      <h2>Math Quiz</h2>
      <p>Current score: {score}</p>
      <div>
        <p>
          How much is {numbers.a} + {numbers.b}?
        </p>
        <Answer updatePoints={updatePoints} />
      </div>
    </div>
  )
}
