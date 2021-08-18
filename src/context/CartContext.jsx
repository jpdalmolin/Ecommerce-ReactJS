import { createContext, useState } from "react";
import { getFirestore } from '../servicios/firebaseService'
import ItemDetail from "../components/ItemDetail";
import { productos } from "../components/productos";

export const NotiContext = createContext()//estados y funciones sean globales para todos. 

export default function UseNotiContext({children}){
    
    const [cartList, setCartList] = useState([])// {item: item, cantidad: cantidad}
   
    function guardarItem(producto,cantidad){
      
 //       console.log(newItem)
  //    console.log(cartList)
    //  const idx = cartList.findIndex(producto => producto.producto.id === producto.items.id)//-1 , posicion
      // console.log('index:',idx)
       // console.log(cartList)
        //if(idx === -1){
        setCartList([...cartList,{'item':producto ,'quantity':cantidad}]) 
            console.log(producto,cantidad)
      //  }else{
       //    const newCantidad= cartList[idx].cantidad + producto.cantidad
        //  console.log('newCantidad', newCantidad)
         //  const oldList = cartList.filter(old=> old.producto.id !== old.items.id)
          // console.log(oldList);
         // setCartList([...oldList,{producto: producto,cantidad: newCantidad}])
        
   // }
    }
    console.log(cartList)
    console.log(setCartList)

    const removeFromCart = (itemId) =>{
        cartList.splice(
            cartList.findIndex(( item => item.id !== itemId)), 1)   
        setCartList([...cartList])
    }
    
    const price =()=>{
       return cartList.reduce((acum, valor)=>(acum + (valor.cantidad*valor.producto.precio)), 0) //[item.cantidad, ]
  }
    const size =()=>{
        return cartList.reduce((acum, valor)=> acum + valor.cantidad, 0) //[item.cantidad],0) 

    }
    function cleanList (){
        setCartList([])
    }
    
    return(
        <NotiContext.Provider value={{
            cartList,
            removeFromCart,
           price,
            size,
            guardarItem,
            cleanList,
            
        }}>
            {children}
        </NotiContext.Provider>
    )
}