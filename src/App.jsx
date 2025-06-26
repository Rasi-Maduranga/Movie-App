import './App.css'
import Navbar from './components/Navbar';
import { MovieProvider } from './contexts/MovieContext';
import Favorites from './pages/Favorites';
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <MovieProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
  </MovieProvider>
  )
}

export default App
