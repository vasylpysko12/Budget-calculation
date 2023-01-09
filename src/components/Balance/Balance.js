import React from "react";
import "../App/App.css";
const Balance = ({balance})=>{
  return(
    <div >
      <h4 className="lab">Поточний баланс : {balance.toFixed(2)}</h4>
    </div>  
  )
}
export default Balance;