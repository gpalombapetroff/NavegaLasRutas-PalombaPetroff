import './App.css'
import {Button} from './components/Button'
import { ItemCount } from './components/Itemcount/ItemCount'
import {ItemListContainer} from './components/ItemListContainer'
import {NavBar} from './components/NavBar'

export function App() {
  
 const seclickeo =()=>{
  console.log("click")
 }
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="hola" />
      <div>Este es un div</div>
      <div> Este es otro div</div>
      <Button texto="BOTON" color="red" funcion={seclickeo}/>
      
      
      
    </>
  )
}



