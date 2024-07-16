import { useState } from "react";

function Choturvuj(){
const [value,setValue]=useState(null);

  function handleClick(){
    console.log("clicked!");
  }
  return( 
  <button 
  className="choturbuj" 
  onClick={handleClick}>{value}</button>
)
}

function Charkona() {
  return (
    <>
      <div className="charkona-row">
     <Choturvuj value="1"/>
     <Choturvuj value="2"/>
     <Choturvuj value="3"/>
      </div>
      <div className="charkona-row">
      <Choturvuj value="4"/>
      <Choturvuj value="5"/>
      <Choturvuj value="6"/>
      </div>
      <div className="charkona-row">
      <Choturvuj value="7"/>
      <Choturvuj value="8"/>
      <Choturvuj value="9"/>
      </div>
    </>
  );
}

export default Charkona;