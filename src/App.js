import './App.css';
import React from "react";
import HomeScreen from './Components/HomeScreen';
import LoginForm from './Components/LoginForm';
import NavigationBar from './Components/NavBar';
import Employer from './Components/Employer'
import { useState } from 'react';
import {Route, Switch} from 'react-router-dom'
import CheckOrder from './Components/CheckOrder';
import Default from './Components/Default';

function App() {
  const [searchTerm,setSearchTerm] = useState("");
  const searchHandler = (searchTerm) => {
     setSearchTerm(searchTerm);
  }
  return (
    <div className="h-screen w-screen bg-gray-200">
    <NavigationBar term ={searchTerm} searchKeyWord={searchHandler}/>
    <Switch>
      <Route exact path="/" component={HomeScreen}/>
      <Route exact path="/employer" 
      render={(props)=> <Employer{...props} searchTerm={searchTerm.length < 1 ? "" : searchTerm}/>} />
      <Route exact path="/check"  
      render={(props)=> <CheckOrder{...props} searchTerm={searchTerm.length < 1 ? "" : searchTerm}/>}/>
      <Route exact path="/sign-in" 
          component={LoginForm} />
      <Route path='/' component={Default}></Route>
    </Switch>
    </div>
  )
}
export default App;