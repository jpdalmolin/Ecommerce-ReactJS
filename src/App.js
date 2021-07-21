import './App.css';
import NavBar from './components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListcontainer'
import {useState} from 'react'
import React from 'react';

function Titulo(){
return(

<h2>Hard Store </h2>

)


}

function App() {

  const [contador, setContador]=useState(0)
  const [fecha, setFecha]=useState(null)

function handleCount(){

setContador(contador+1)
let date=Date();
setFecha(date)


}


  return (
  
    <div className="App">
      <Titulo/>
      <nav class="navbar navbar-light bg-light d-flex justify-content-center">

</nav>


      <NavBar/>
      
      {contador} <br/>
      {fecha}
     <ItemListContainer greeting='Bienvenido a mi tienda' user='Rodrigo' />

     <button onClick={handleCount} >Click</button>
 
    </div>
  );
}

export default App;
