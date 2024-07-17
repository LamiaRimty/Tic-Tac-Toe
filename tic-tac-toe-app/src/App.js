import { useState } from "react";

function Choturvuj({value,onChoturvujClick}){

  // function handleClick(){
  //   setChoturvuj("x");
  // }
  return( 
  <button 
  className="choturbuj" 
  onClick={onChoturvujClick}>{value}</button>
)
}

function Charkona() {
  const [choturvuj,setChoturvuj] = useState(Array(9).fill(null));

 function handleClick(i){
    const nextChoturvuj = choturvuj.slice();
    nextChoturvuj[i]="x";
    setChoturvuj(nextChoturvuj);
 }
  return (
    <>
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

export default Charkona;