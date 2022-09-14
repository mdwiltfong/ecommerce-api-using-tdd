import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {

  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Header />
        <Outlet/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
