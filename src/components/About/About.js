import React from "react";
import { createContext, useContext } from 'react';

const Context = createContext();

function Main() {
  const value = 'My Context Value';
  return (
    <Context.Provider value={value}>
      <MyComponent />
    </Context.Provider>
  );
}

function MyComponent() {
  const value = useContext(Context);
  return <span>{value}</span>;
}
const About =()=>{
  return(
    <div>
      <h1>About page</h1>
      <Main/>
    </div>
  )
}
export default About;