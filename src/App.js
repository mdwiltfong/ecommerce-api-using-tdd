import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
// import axios from "axios";
import React from 'react';
// import ProductPage from './components/ProductPage';

const queryClient = new QueryClient()

function App() {
  const [sessCart, setSessCart] = React.useState("");
  // const [allProductData, setAllProductData] = React.useState("");
  // console.log(sessCart);


  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Header cartInfo={sessCart}/>
        <Outlet
          context={[sessCart, setSessCart]}
        />
      </QueryClientProvider>
    </div>
  );
}

export default App;