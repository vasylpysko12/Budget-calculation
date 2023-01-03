import React from "react";
import { AppContext } from "../Providers/context";
import {useBooleanToggle}from "../../hooks"
const Settings=()=>{
  const {state, dispatch} = React.useContext(AppContext)
  const {status, handleStatus} = useBooleanToggle(false)
  const onChange= (e)=>{
    
    const {value} = e.target;
    dispatch({
      type: 'changeCurrency',
      currency : value
    })
  }
  return(
    <>
      <h1>Налаштування</h1>
      <div>
        <form>
          <label>
            Валюта:
            <select 
              name="currency" 
              value={state.currency}
              onChange={onChange}
              >
              <option value="UAH">Гривня</option>
              <option value="USD">Долар США</option>
              <option value="EUR">Євро</option>
            </select>
          </label>
        </form>
      </div>

      <div>
        <button onClick={()=>handleStatus(!status)}>
          Розширені налаштування
        </button>
        {status ? 
          (<div>
            <h3>Розширені налаштування</h3>

            ...
          </div>) : null}
          
          
      </div>
    </>
  )
}

export default Settings;