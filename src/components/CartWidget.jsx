import carro from './carro.svg'
import React, {useContext} from 'react'
import { NotiContext } from '../context/CartContext'
import '../css/cartWidget.css'
import { Button } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'
import jQuery from 'jquery'


function CartWidget() {
    
    const {size,cartList} = useContext(NotiContext)
    console.log(size())
    return (
        <div classname="cartwidget">
            <button class="btn btn-secondary" type="button" id="dropdownMenuButton">
            CARRITO
            <span id="carritoCantidad" class="badge badge.light">{cartList.length > 0 ? size() : ''}</span> </button>
            
           
          
            
        </div>
    )
}

export default CartWidget
