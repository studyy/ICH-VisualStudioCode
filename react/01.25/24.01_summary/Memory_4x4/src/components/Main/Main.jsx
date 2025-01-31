import { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import GameBoard from '../GameBoard/GameBoard'

export default function Main() {
  const { turns, matchesLeft, reset, win } = useContext(GameContext)
  return (
    <>
      <h1>Score: {turns}</h1>
      <h2>Matches left: {matchesLeft} </h2>
      <GameBoard />
      <button onClick={reset}></button>
      <h2></h2>
    </>
  )
}
