import React, {useContext} from 'react'
import { NotiContext } from '../context/CartContext'
function Cart() {
    const {cartList} = useContext(NotiContext)
    console.log(cartList)
    return  (
        <>
           {cartList.map(item =>(
               <>
                <div className="row" key={item.producto.id}> 
                    <p className="col">{item.producto.nombre}</p> 
                    <p className="col">{item.quantity}</p>  
                    <p className="col">{item.producto.precio}</p>  
                </div>
                <hr/>
                </>
            ))}
        </>
    )
}
export default Cart