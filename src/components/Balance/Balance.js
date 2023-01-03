import React from "react";
const Balance = ({balance})=>{
  return(
    <div>
      <h4>Поточний баланс : {balance.toFixed(2)}</h4>
    </div>  
  )
}
export default Balance;