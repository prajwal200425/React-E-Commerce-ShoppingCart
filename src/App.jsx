
import './App.css'
import Navbar from './components/navbar'
import Product from './components/Product'
import ProductDetails from "./components/ProductDetails"
import Search from "./components/searchItem"
import Cart from "./components/Cart"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import items from "./components/data"
import { useState } from 'react'
import Footer from "./components/footer"


function App() {
  let [data, setData] = useState([...items])
  let [cart , setCart] = useState([]);
  return (
    <>

      <Router>
        <Navbar cart={cart} setData={setData}/>
        <Routes>
          <Route path="/" element={<Product items={data} cart={cart} setCart={setCart} />} />
          <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart} />} />
          <Route path="/search/:productName" element={<Search  cart={cart} setCart={setCart}/> } />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
        <Footer />
      </Router>
     
    </>
  )
}

export default App
