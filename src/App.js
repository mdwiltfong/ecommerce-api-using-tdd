import './App.css';
import React, {useState} from 'react'
import Header from './components/Header';
import ProductBox from './components/ProductBox';
import TshirtPage from './components/TshirtPage';
import Login from './components/Login';
import Register from './components/Register';
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
}

export default App;
