import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [players, setPlayers] = useState(1)

    const handleGamePlay = (index) => {
      if (players === 1 && squares[index] === null) {
        let newSquares = [...squares]
        newSquares[index] = "X"
        setSquares(newSquares)
        setPlayers(2)
      } else if (players === 2 && squares[index] === null) {
        let newSquares = [...squares]
        newSquares[index] = "O"
        setSquares(newSquares)
        setPlayers(1)
      }
    }


  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {squares.map((value, index) => {
          return <Square value={value} index={index} handleGamePlay={handleGamePlay}/>
        })}
      </div>
    </>
  )
}

export default App
