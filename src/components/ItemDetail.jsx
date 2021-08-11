import React from 'react'
import Card from 'react-bootstrap/Card'
import {Row } from 'react-bootstrap'
import ItemCount from './ItemCount'
import Container from 'react-bootstrap/Container'
import { Col } from 'react-bootstrap'
import {useContext,useState} from 'react'
import { NotiContext } from '../context/CartContext'
import CartContext from '../context/CartContext'
import '../css/itemDetail.css'


function ItemDetail({producto}) {

  const [cantidad,setCantidad]=useState(0)
  const{cartList,guardarItem}=useContext(NotiContext)
  console.log(producto)

 function onAdd(count){
   setCantidad(count) 
   guardarItem({producto,quantity:count})
  
  }

    return (
        <div>

<div class="container">
    
	<div class="row" id="ads">
 
    <div class="col-md-4">
        <div class="card rounded">
            <div class="card-image">
                <span class="card-notify-badge">{producto.nombre}</span>
                <span class="card-notify-year">2018</span>
                <img class="img-fluid" src={producto.image} alt="Alternate Text" />
            </div>
            <div class="card-image-overlay m-auto">
                <span class="card-detail-badge">New</span>
                <span class="card-detail-badge">${producto.precio}</span>
        
            </div>
            <div class="card-body text-center">
                <div class="ad-title m-auto">
                    <h5>{producto.nombre}</h5>
                </div>
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </div>
        </div>
    </div>
    </div>
  </div>








  
        </div>
    )
}
export default ItemDetail