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

 function handleClick(){
    const nextChoturvuj = choturvuj.slice();
    nextChoturvuj[0]="x";
    setChoturvuj(nextChoturvuj);
 }
  return (
    <>
      <div className="charkona-row">
     <Choturvuj  value={choturvuj[0]} onChoturvujClick={handleClick}/>
     <Choturvuj value={choturvuj[1]} onChoturvujClick={handleClick}/>
     <Choturvuj value={choturvuj[2]} onChoturvujClick={handleClick}/>
      </div>
      <div className="charkona-row">
      <Choturvuj value={choturvuj[3]} onChoturvujClick={handleClick}/> 
      <Choturvuj value={choturvuj[4]} onChoturvujClick={handleClick}/>
      <Choturvuj value={choturvuj[5]} onChoturvujClick={handleClick}/>
      </div>
      <div className="charkona-row">
      <Choturvuj value={choturvuj[6]} onChoturvujClick={handleClick}/>
      <Choturvuj value={choturvuj[7]} onChoturvujClick={handleClick}/>
      <Choturvuj value={choturvuj[8]} onChoturvujClick={handleClick}/>
      </div>
    </>
  );
}

export default Charkona;