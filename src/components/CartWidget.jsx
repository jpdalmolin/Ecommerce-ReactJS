import React from 'react'
import carro from './carro.svg'



function CartWidget() {
    return (
        <div classname="cartwidget">
            <img src={carro} alt='cart' classname='cartwidget' class="max-width: 100%"></img>
            
        </div>
    )
}

export default CartWidget
