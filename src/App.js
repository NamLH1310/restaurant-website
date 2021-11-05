import './App.css';
import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <div className = "Page">
            <Route path="/" exact={true} component ={HomeScreen}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
