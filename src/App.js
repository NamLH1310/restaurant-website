import './App.css';
import React from "react";
import HomeScreen from './Components/HomeScreen';
import LoginForm from './Components/LoginForm';
import NavigationBar from './Components/NavBar';
import Employer from './Components/Employer'
import { useState } from 'react';
import {Route, Switch} from 'react-router-dom'
import CheckOrder from './Components/CheckOrder';

function App() {
  const [currentCategory,setCurrentCategory] = useState("");
  const [foodSwitch,setFoodSwitch] = useState(1);
  const [searchTerm,setSearchTerm] = useState("");
  const searchHandler = (searchTerm) => {
     setSearchTerm(searchTerm);
  }
  return (
    <div className="h-full w-full bg-gray-200">
      <NavigationBar term={searchTerm} searchKeyWord={searchHandler} setFoodSwitch={setFoodSwitch} onChangeCategory={ setCurrentCategory}/>
    <Switch>
      <Route exact path="/"
       render={(props)=> <HomeScreen{...props} 
       searchTerm={searchTerm.length < 1 ? "" : searchTerm} 
       currentCategory={currentCategory}
       foodSwitch ={foodSwitch}/>} />
      <Route exact path="/employer" 
      render={(props)=> <Employer{...props} searchTerm={searchTerm.length < 1 ? "" : searchTerm}/>} />
      <Route exact path="/check"  
      render={(props)=> <CheckOrder{...props} searchTerm={searchTerm.length < 1 ? "" : searchTerm}/>}/>
      <Route exact path="/sign-in" 
      component ={LoginForm}/>
    </Switch>
    </div>
  )
}
export default App;