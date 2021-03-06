import "./App.css";
import React from "react";
import HomeScreen from './Components/HomeScreen';
import LoginForm from './Components/LoginForm';
import NavigationBar from './Components/NavBar';
import Employer from './Components/Employer'
import { useState, useContext } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom'
import CheckOrder from './Components/CheckOrder';
import Payment from './Components/Payment';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import { ContextList } from "./Context";
import Footer from "./Components/Footer";
import Default from "./Components/Default";
import Introduce from "./Components/Introduce";

function App() {
  const [currentCategory, setCurrentCategory] = useState("");
  const [foodSwitch, setFoodSwitch] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBar, setSearchBar] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  let history = useHistory();
  const {payment,setPayment,setOrders} = useContext(ContextList);
  if (payment) {
    history.push('/payment')
    setPayment(false)
  }
  return (

    <div className=" h-full w-full bg-gray-200 ">
      <NavigationBar
        term={searchTerm}
        searchKeyWord={searchHandler}
        currentCategory={currentCategory}
        onChangeCategory={(cat) => {
          setCurrentCategory(cat);
        }}
        foodSwitch={foodSwitch}
        setFoodSwitch={setFoodSwitch}
        showSearchBar={searchBar}
        showDropDown={dropDown}
        currentPage={currentPage}
        setCurrentPage={(page) => setCurrentPage(page)}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <HomeScreen
              {...props}
              searchTerm={searchTerm.length < 1 ? "" : searchTerm}
              currentCategory={currentCategory}
              foodSwitch={foodSwitch}
              showSearchBar={(isShow) => {
                setSearchBar(isShow);
              }}
              showDropDown={(isShow) => {
                setDropDown(isShow);
              }}
              currentPage={currentPage}
              setCurrentPage={(page) => setCurrentPage(page)}
            />
          )}
        />
        <Route
          exact
          path="/employer"
          render={(props) => (
            <Employer
              {...props}
              searchTerm={searchTerm.length < 1 ? "" : searchTerm}
              showSearchBar={(isShow) => {
                setSearchBar(isShow);
              }}
              showDropDown={(isShow) => {
                setDropDown(isShow);
              }}
            />
          )}
        />
        <Route
          exact
          path="/check"
          render={(props) => (
            <CheckOrder
              {...props}
              searchTerm={searchTerm.length < 1 ? "" : searchTerm}
              showSearchBar={(isShow) => {
                setSearchBar(isShow);
              }}
              showDropDown={(isShow) => {
                setDropDown(isShow);
              }}
            />
          )}
        />
        <Route
          exact
          path="/sign-in"
          render={(props) => (
            <LoginForm
              {...props}
              showSearchBar={(isShow) => {
                setSearchBar(isShow);
              }}
              showDropDown={(isShow) => {
                setDropDown(isShow);
              }}
            />
          )}
        />
        <Route
          exact
          path="/payment"
          render={(props) => (
            <Payment
              {...props}
              showSearchBar={(isShow) => {
                setSearchBar(isShow);
              }}
              showDropDown={(isShow) => {
                setDropDown(isShow);
              }}
              setOrders={() => {
                setOrders();
              }}
            />
          )}
        />
        <Route
          exact
          path="/payment"
          render={(props) => (
            <Payment
              {...props}
              showSearchBar={(isShow) => {
                setSearchBar(isShow);
              }}
              showDropDown={(isShow) => {
                setDropDown(isShow);
              }}
              setOrders={() => {
                setOrders();
              }}
            />
          )}
        />
        <Route path="/Introduce" component={Introduce}></Route>
        <Route path="/default" component={Default}></Route>
      </Switch>
      <NotificationContainer />
      <Footer />
    </div>
  );

}
export default App;
