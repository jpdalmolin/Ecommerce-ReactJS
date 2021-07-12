import React from 'react'
import App from '../App'
import Button from 'react-bootstrap/Button';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';
import './CartWidget.css'


function NavBar() {
    return (
        <div>
       
       <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="www.google.com">Hidden brand</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categorias
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="www.google.com">Action</a>
          <a class="dropdown-item" href="www.google.com">Another action</a>
          <a class="dropdown-item" href="www.google.com">Something else here</a>
        </div>
       
      </li>
    </ul>
    </div>
  
    <form class="form-inline my-2 my-lg-0 d-flex justify-content-end">
      <input class="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    
 
  <div class=""><li><a class="" href="#"><CartWidget/></a></li> </div>
</nav>

        </div>
        
    )
}

export default NavBar
