import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListCont from './components/itemListContainer/itemListCont'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <BrowserRouter>
      <div className="contendor_principal">
        <Navbar cantidadCarrito={0}></Navbar>
        <Routes>
          <Route path="/" element={<ItemListCont/>}/>
          <Route path="/product/:id" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<h4>Error 404: Page not found</h4>}/>
          <Route path="/category/:categoria" element={<ItemListCont/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
   
  )
}

export default App
