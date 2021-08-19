import React, {useState, useEffect, useContext} from 'react'
import { NotiContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import firebase from 'firebase'
import { getFirestore } from '../servicios/firebaseService'
import { useParams } from 'react-router'

//const listaItem=[{id:'1',nombre:'asd'}]
function Cart() {
    const {cartList,guardarItem,size,price,removeFromCart,cleanList} = useContext(NotiContext)
        const {detalleId}=useParams()    
        const [buyer,setBuyer]=useState({})
   
        const [item,setItem]=useState([])

        const order={buyer, item:cartList , date: firebase.firestore.Timestamp.fromDate(new Date),total:(price())}

        console.log(detalleId)

        const handlerChange =(evt)=>{
            setBuyer({
                ...buyer,
                [evt.target.name]: evt.target.value
            })}
            const handlerSubmit =(evt)=>{
                evt.preventDefault()
                const db=getFirestore()
    
                db.collection('order').add(order)
                .then(resp=> console.log(resp))
                .catch(resp=> console.log(resp))
                
            }
    
     
console.log(order)
console.log(cartList)
  //  console.log(cartList)
    
  //  console.log(size())
   // console.log(price())



    return  (
        <>
        <br />
        <br />
      <Link to={`/`}><Button variant="primary">Volver</Button></Link>
         {(cartList.length > 0) ?
           cartList.map(item =>(
               <>
                <div className="row" key={item.item.id}> 
                <p className="col">{item.item.id}</p> 
                    <p className="col">{item.item.nombre}</p> 
                    <p className="col">{item.item.categoria}</p> 
                    <p className="col">{item.quantity}</p>  
                    <p className="col"><img class="img-fluid" src={item.item.image} alt="Alternate Text" /></p>  
                    <p className="col">{item.item.precio}</p>  
                      
                    <button className="btn btn-danger" onClick={removeFromCart}>X</button>
                </div>
               
                <hr/>
               
                </>))   

            
                 : <h3>No hay items en el carrito
                 </h3>             }
                {cartList.length>0 ?
                <>
                <h4>Su total es : ${price()}</h4>  <button className="btn btn-danger" onClick={cleanList}>X</button></>:'' }

                <form 
                    onChange={handlerChange}
                    onSubmit={handlerSubmit}
                
                >
                    <input 
                        type="text"
                        placeholder='nombre'
                        name='name'
                        value={order.name}
                    />
                    <input 
                        type="text"
                        placeholder='ingresar cel'
                        name='phone'
                        value={order.phone}
                    />
                    <input 
                        type="text"
                        placeholder='ingresar email'
                        name='email'
                        value={order.email}
                    />
                    <button>enviar</button>
                    
                </form>
        </>
    )
}
export default Cart