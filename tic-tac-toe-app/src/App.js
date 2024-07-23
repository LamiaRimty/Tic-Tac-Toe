import { useState } from "react";

function Choturvuj({value,onChoturvujClick}){

  return( 
  <button 
  className="choturbuj" 
  onClick={onChoturvujClick}>{value}</button>
)
}

function Charkona({xIsNext,choturvuj,onPlay}) {

 function handleClick(i){

  if(calculateWinner(choturvuj) || choturvuj[i]){
    return;
  }
    const nextChoturvuj = choturvuj.slice();
    if(xIsNext){
      nextChoturvuj[i]="x";
    }
   else{
    nextChoturvuj[i]="o";
   }
    
 onPlay(nextChoturvuj);
 


   
 }
 const winner = calculateWinner(choturvuj);
 let status;
 if(winner){
   status = "Winner: " + winner;
 }
 else{
   status = "Next player: " + ( xIsNext ? 'x':'o');
 }
  return (
    <>
<div className="status">{status}</div>
      <div className="charkona-row">
     <Choturvuj  value={choturvuj[0]} onChoturvujClick={()=>handleClick(0)}/>
     <Choturvuj value={choturvuj[1]} onChoturvujClick={()=>handleClick(1)}/>
     <Choturvuj value={choturvuj[2]} onChoturvujClick={()=>handleClick(2)}/>
      </div>
      <div className="charkona-row">
      <Choturvuj value={choturvuj[3]} onChoturvujClick={()=>handleClick(3)}/> 
      <Choturvuj value={choturvuj[4]} onChoturvujClick={()=>handleClick(4)}/>
      <Choturvuj value={choturvuj[5]} onChoturvujClick={()=>handleClick(5)}/>
      </div>
      <div className="charkona-row">
      <Choturvuj value={choturvuj[6]} onChoturvujClick={()=>handleClick(6)}/>
      <Choturvuj value={choturvuj[7]} onChoturvujClick={()=>handleClick(7)}/>
      <Choturvuj value={choturvuj[8]} onChoturvujClick={()=>handleClick(8)}/>
      </div>
    </>
  );
}

export default function Khela(){

  const [history,setHistory]= useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext=currentMove % 2 === 0;
  const currentChoturvuj=history[currentMove];
  
  function handleKhela(nextChoturvuj){
   const nextHistory = [...history.slice(0,currentMove + 1), nextChoturvuj];
   setHistory(nextHistory);
   setCurrentMove(nextHistory.length - 1);

  }
  
  function jumpTo(nextMove){
    setCurrentMove(nextMove)
    
  }
  
  const moves = history.map((choturvuj,move)=>{
    let desc;
    if(move> 0){
      desc= "Go to move #"+ move;
    }
    else{
      desc = "Go to game start";
    
    }
  
    return(
      <li key={move}>
      <button onClick={()=> jumpTo(move)}>{desc}</button>
      </li>
    );
  })
  
  return(
    <div className="khela">
      <div className="khela-charkona">
      <Charkona xIsNext={xIsNext} choturvuj={currentChoturvuj} onPlay={handleKhela}/>
      </div>
  
      <div className="khela-totho">
      <ol>{moves}</ol>
      </div>
    </div>
  )
  }

function calculateWinner(choturvuj){
  const lines =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i=0; i<lines.length;i++){
    const [a,b,c]= lines[i];
    if(choturvuj[a] && choturvuj[a] === choturvuj[b] && choturvuj[b] === choturvuj[c] &&  choturvuj[c]){
      return choturvuj[a];
    }
  }
  return null;
}



