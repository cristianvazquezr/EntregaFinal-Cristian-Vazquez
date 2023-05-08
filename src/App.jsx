import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemList from './components/itemListContainer/itemListCont'

function App() {
  return (

    <div ClassName="contendor_principal">
      <Navbar><hr /></Navbar>
      <ItemList saludo='PROXIMAMENTE'></ItemList>
    </div>
  
  )
}

export default App
