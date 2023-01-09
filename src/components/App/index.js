import React,{useContext, useState} from "react";
import App from "./App";
import { AppContext } from "../Providers/context";

export default ()=>{
  const {state,dispatch}= useContext(AppContext)

  return(
   
    <App/>

  )
  
}