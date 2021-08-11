import React, {useContext} from 'react'
import { NotiContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


function Cart() {
    const {cartList,guardarItem,size,price,removeFromCart,cleanList} = useContext(NotiContext)
    console.log(cartList)
    
    console.log(size())
    console.log(price())



    return  (
        <>
        <br />
        <br />
      <Link to={`/`}><Button variant="primary">Volver</Button></Link>
         {(cartList.length > 0) ?
           cartList.map(item =>(
               <>
                <div className="row" key={item.producto.id}> 
                    <p className="col">{item.producto.nombre}</p> 
                    <p className="col">{item.quantity}</p>  
                    <p className="col">{item.producto.precio}</p>  
                      
                    <button className="btn btn-danger" onClick={removeFromCart}>X</button>
                </div>
               
                <hr/>
               
                </>))   

            
                 : <h3>No hay items en el carrito
                 </h3>             }
                {cartList.length>0 ?
                <>
                <h4>Su total es : ${price()}</h4>  <button className="btn btn-danger" onClick={cleanList}>X</button></>:'' }
        </>
    )
}
export default Cart