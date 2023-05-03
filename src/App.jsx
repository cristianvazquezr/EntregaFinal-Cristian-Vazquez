import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemList from './components/itemListContainer/itemListCont'

function App() {
  return (

    <div Class="contendor_principal">
      <Navbar></Navbar>
      <ItemList saludo='PROXIMAMENTE'></ItemList>
    </div>
  
  )
}

export default App
