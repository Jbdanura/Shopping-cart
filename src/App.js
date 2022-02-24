import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter,Route, Routes} from "react-router-dom"
import { useEffect, useState } from 'react';
import products from './products';
import Store from './Components/Store/Store';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';

function App() {
  const [store, setStore] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    setStore(products)
  },[])

  const addToCart = () => {
    console.log("e")
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}>
            <Route index element={<Home/>} />
            <Route path="/store" element={<Store handleAdd={addToCart} products={store}/>}/>
            <Route path="/cart" element={<Cart products={store}/>}/>
          </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
