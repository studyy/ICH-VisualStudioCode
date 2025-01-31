import { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import Card from '../Card/Card'

export default function GameBoard() {
  const { cards } = useContext(GameContext)
  return (
    <div>
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          emoji={card.emoji}
          isFlipped={card.isFlipped}
          isMatched={card.isMatched}
        />
      ))}
    </div>
  )
}
