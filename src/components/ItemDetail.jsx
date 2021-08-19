import React from 'react'
import ItemCount from './ItemCount'
import {useContext} from 'react'
import { NotiContext } from '../context/CartContext'
import '../css/itemDetail.css'
function ItemDetail({producto}) {
    
const {guardarItem} = useContext(NotiContext)
 function onAdd(cantidad){
   guardarItem(producto, cantidad)
   console.log(cantidad)
   console.log(producto)
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
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </div>
        </div>
    </div>
    </div>
  </div>
        </div>
    )
}
export default ItemDetail