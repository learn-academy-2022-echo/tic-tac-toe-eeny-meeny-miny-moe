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

  const endGame = (i) => {
    const winArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < winArr.length; i++) {
      let [a, b, c] = winArr[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
       return alert(`${squares[a]} is the Winner!`)
      }
    }
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {squares.map((value, index) => {
          return <Square value={value} index={index} handleGamePlay={handleGamePlay} endGame={endGame}/>
        })}
      </div>
    </>
  )
}


export default App
