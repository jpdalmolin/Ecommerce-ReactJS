import React, {useContext} from 'react'
import { NotiContext } from '../context/CartContext'


function Cart() {
    const {cartList, guardarItem, price, size} = useContext(NotiContext)
    console.log(cartList)
    console.log(price())
    console.log(size())
    return  (
        <>
           {cartList.map(item =>(
               <>
                <div className="row" key={item.productos.id}> 
                    <p className="col">{item.productos.nombre}</p>  
                    <p className="col">{item.quantity}</p>  
                    <p className="col">{item.productos.precio}</p>  
                </div>
                <hr/>
                </>
            ))}
        </>
    )
}

export default Cart