import { useState } from "react"


export default function Board() {

  const [XisNext, setXisNext] = useState(true)
  const [squares, setValue] = useState(Array(9).fill(null))
  let gameStatus = ""; 

  function changeVale(i){

    if(squares[i] || calculateWinner(squares)){
      return; 
    }

    const newvalue = squares.slice(); 

    if(XisNext){
      newvalue[i] = "X"; 
      setValue(newvalue); 
      setXisNext(false); 
    }
    else{
      newvalue[i] = "O"; 
      setValue(newvalue); 
      setXisNext(true); 
    }

  }

  console.log(`this step has reached for`)
  console.log(squares);
  const winner = calculateWinner(squares);
  console.log(winner)

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (XisNext ? 'X' : 'O');
  }

  return(
    <>
      <div className="board-row">
          <Square value={squares[0]} onclickhandler={() => changeVale(0)} />
          <Square value={squares[1]} onclickhandler={() => changeVale(1)} />
          <Square value={squares[2]} onclickhandler={() => changeVale(2)} />
      </div>
      <div className="board-row">
          <Square value={squares[3]} onclickhandler={() => changeVale(3)} />
          <Square value={squares[4]} onclickhandler={() => changeVale(4)} />
          <Square value={squares[5]} onclickhandler={() => changeVale(5)} />
      </div>
      <div className="board-row">
          <Square value={squares[6]} onclickhandler={() => changeVale(6)} />
          <Square value={squares[7]} onclickhandler={() => changeVale(7)} />
          <Square value={squares[8]} onclickhandler={() => changeVale(8)} />
      </div>

      <div>
        <h2>{status}</h2>
      </div>
    </>
  )



  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}

function Square({value, onclickhandler}){


  return(
    <button className="square" 
      onClick={onclickhandler}
    >
      {value}
    </button>

  )
}
