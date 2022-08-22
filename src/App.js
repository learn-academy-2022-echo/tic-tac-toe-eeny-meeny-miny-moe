import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [players, setPlayers] = useState(1)

  const winningArray = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,7]]

  const [xIndexes, setXIndexes] = useState([])

  const [oIndexes, setOIndexes] = useState([])

  const endGame = () => {
    if (squares[0] === "X" && squares[1] === "X" && squares[2] === "X") {
      alert("Win")
    }

  }
    const handleGamePlay = (index) => {
      if (players === 1 && squares[index] === null) {
        let newSquares = [...squares]
      
        newSquares[index] = "X"
        setSquares(newSquares)
        setPlayers(2) 
        setXIndexes([...xIndexes, index])
        console.log(xIndexes)
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
          return <Square value={value} index={index} handleGamePlay={handleGamePlay} />
        
        })}
        {endGame()}
        
      </div>
      
    </>
  )
}

export default App
