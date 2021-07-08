import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import ItemListContainer from './components/ItemListContainer';

function Titulo(){
return(

<h2>Hard Store </h2>

)


}

function App() {
  return (
  
    <div className="App">
      <Titulo/>
      <nav class="navbar navbar-light bg-light d-flex justify-content-center">

</nav>


      <NavBar/>
     <ItemListContainer greeting='Hola soy item...'  />


 
    </div>
  );
}

export default App;
