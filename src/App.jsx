import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListCont from './components/itemListContainer/itemListCont'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import CartContext from './components/Context/CartContext'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import Login from './Login/Login'



function App() {
  return (
    
    <BrowserRouter>
      <div className="contendor_principal">
        <CartContext>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<ItemListCont/>}/>
            <Route path="/product/:id" element={<ItemDetailContainer/>}/>
            <Route path="*" element={<h4>Error 404: Page not found</h4>}/>
            <Route path="/category/:categoria" element={<ItemListCont/>}/>
            <Route path='/cart' element={<ShoppingCart/>}/>
            <Route path='/Login' element={<Login/>}/>
          </Routes>
          <Footer/>
        </CartContext>
      </div>
    </BrowserRouter>
   
  )
}

export default App
