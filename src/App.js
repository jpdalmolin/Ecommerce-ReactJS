  
import './App.css';
import NavBar from './components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListcontainer'
import {useState } from 'react';
import React from 'react';
import ItemDetailContainer from './container/ItemDetailContainer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Cart from './components/Cart';
import UseNotiContext from './context/CartContext';



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
    <UseNotiContext>
   <Router forceRefresh={true}>
      <Titulo/> 
      <NavBar/>
      <div className="App">
      {contador} <br/>
      {fecha}
      <button onClick={handleCount} >Hora</button>
        <Switch>
        <Route exact path="/">
     <ItemListContainer greeting='Bienvenido a mi tienda' user='Rodrigo' />
     </Route>
    <Route exact path={`/detail/:detalleId`} component={ItemDetailContainer}>
 
      </Route>
     <Route exact path="/category/:categoryId" >
     <ItemListContainer greeting='Bienvenido a mi tienda' user='Rodrigo' />
  
     </Route>
    
     <Route exact path={`/cart`} component={Cart}>
 
      </Route>
      
    </Switch>

    
   
     
    
 
   
    </div>
    </Router>
    </UseNotiContext>
  
  );
}

export default App;