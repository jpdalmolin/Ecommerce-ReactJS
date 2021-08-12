import React from 'react';
import CartWidget from './CartWidget';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom'
import Items from './Items';


function NavBar() {
  const{categoryId}=useParams()
    return (
        <div>
       
       <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link to="/">Hard Store</Link>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
       <span class="sr-only"><Link to={`/category/procesador`}>Procesadores</Link></span>
      </li>
      <li class="nav-item">
      <span class="sr-only"><Link to="/category/mother">Mother</Link></span>
      </li>
      <li class="nav-item">
      <span class="sr-only"><Link to="/category/detail">Detail</Link></span>
      </li>
       
        
   
    </ul>
    </div>
  
    <form class="form-inline my-2 my-lg-0 d-flex justify-content-end">
      <input class="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    
 
  <div class=""><Link to="/cart"><li><CartWidget/></li></Link> </div>
</nav>

        </div>
        
    )
}

export default NavBar
