import { useState } from "react";

function Choturvuj(){
const [value,setValue]=useState(null);

  function handleClick(){
    setValue("x");
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
     <Choturvuj />
     <Choturvuj />
     <Choturvuj />
      </div>
      <div className="charkona-row">
      <Choturvuj /> 
      <Choturvuj />
      <Choturvuj />
      </div>
      <div className="charkona-row">
      <Choturvuj />
      <Choturvuj />
      <Choturvuj />
      </div>
    </>
  );
}

export default Charkona;