import React  from 'react';
import { useState } from 'react';
import "./App.css";
import Header from './components/Header';
import ComA from './components/react-hooks/Usecontext/ComA';
import { createContext } from 'react';
const Appstate = createContext()
function App() {
  const [ Data , SetData ] = useState("Sarfraz")
  
  return (
    <>
    <Appstate.Provider value={Data}>
    <Header></Header>
    <ComA></ComA>
    </Appstate.Provider>
    
    </>
  );
}
export default App;
export {Appstate}