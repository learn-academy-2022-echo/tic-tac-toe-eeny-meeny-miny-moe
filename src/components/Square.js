import React from 'react'

const Square = (props) => {
  const handleClick = () => {
     props.handleGamePlay(props.index)
     props.endGame(props.index)
   }
  return (
    <>
    <div className="square" onClick={handleClick}>{props.value}</div>
    </>
  )
}
export default Square
