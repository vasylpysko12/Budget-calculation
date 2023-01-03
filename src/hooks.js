import {useState} from "react";

export const useBooleanToggle = () =>{
  const[status, setStatus] = useState(false)

  const handleStatus = () => {
  setStatus((currentState)=> !currentState)
  console.log('switch')
}
  return{
    status,
    handleStatus
  }
}