import React from 'react';
import "./App.css";
import Card from './components/cardprops';
import { Filter, Mappractice } from './components/react-ES6/arraymethod';
import Usestatehook from './components/react-hooks/Usestate';
import Timer from './components/react-hooks/Useeffect';
function App() {
  return (
    <>
    <Mappractice></Mappractice>
    <Filter></Filter>
    <div className="container">
      <div className="row">
        <Card
          title="What is Lorem Ipsum?"
          images="../images/batman.png"
          old_price="9,999"
          newPrice="9999"
          dollar="$"
          alt="batman"
          exp_date="10-08-2022"
        />
        <Card
          title="What is Lorem Ipsum?"
          images="../images/blackpanter.png"
          old_price="599"
          newPrice="500"
          dollar="$"
          alt="blackpanter"
          exp_date="10-08-2022"
        />
      </div>
    </div>
    <arraymethods></arraymethods>
    <Usestatehook></Usestatehook>
    <Timer></Timer>
    
    </>
  );
}
export default App;