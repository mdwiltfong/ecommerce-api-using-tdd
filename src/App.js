import './App.css';
import React, {useState} from 'react'
import Header from './components/Header';
import ProductBox from './components/ProductBox';
import TshirtPage from './components/TshirtPage';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  
  const [displayLogin, setDisplayLogin] = React.useState(false);
  const [displayRegister, setDisplayRegister] = React.useState(false);

  const renderLogin = () => {
    console.log("clicked");
    setDisplayLogin(!displayLogin)
  } 

  const renderRegister = () => {
    console.log("Register clicked");
    setDisplayRegister(true)
    setDisplayLogin(false);
  }
  
  return (
    <div className="app">
      <Header callLogin={renderLogin}/>
      {/* <ProductBox/> */}
      {/* <TshirtPage/> */}
      {displayLogin && <Login callRegister={renderRegister}/>}
      {displayRegister && <Register/>}
    </div>
  );
}

export default App;
