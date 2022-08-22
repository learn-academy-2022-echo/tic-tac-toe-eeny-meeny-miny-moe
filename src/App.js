import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

    const handleGamePlay = (index) => {
       let newSquares = [...squares]
        newSquares[index] = "X"
       setSquares(newSquares)
console.log(newSquares[index])
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