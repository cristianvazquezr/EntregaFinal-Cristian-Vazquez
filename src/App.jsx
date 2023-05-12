import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemList from './components/itemListContainer/itemListCont'
import comidas from '../../vite-app/data/productos'

function App() {
  let productos=comidas

  console.log(productos)

  return (

    <div className="contendor_principal">
      <Navbar></Navbar>
      <ItemList></ItemList>
    </div>
   
  )
}

export default App
