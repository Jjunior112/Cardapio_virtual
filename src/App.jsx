import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'

import Home from './components/pages/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import Cart from './components/pages/Cart';



function App() {

  return (
    <Router>

      <Header />
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route  path='/cart' element={<Cart/>}></Route>
      </Routes>
      

      <Footer />
    </Router>
  )
}

export default App
