import React  from 'react';
import { useState } from 'react';
import "./App.css";
import Header from './components/Header';
import ComA from './components/react-hooks/Usecontext/ComA';
import { createContext } from 'react';
import Useref from './components/react-hooks/Useref';
const Appstate = createContext()
function App() {
  const [ Data , SetData ] = useState("Sarfraz")
  
  return (
    <>
    {/* <Appstate.Provider value={Data}>
    <ComA></ComA>
    </Appstate.Provider> */}
    <Header></Header>
    <Useref/>
    
    </>
  );
}
export default App;
export {Appstate}