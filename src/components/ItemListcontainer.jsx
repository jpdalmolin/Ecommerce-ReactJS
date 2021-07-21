import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList';
import { useEffect,useState } from 'react';
import {productos} from './productos.jsx'

const handleCount=(cant)=>{
    alert("Usted agrego " +cant+ " a su carrito !");

}

const ItemListContainer = (props) =>{
    const[itemList,setItemList]=useState([])
useEffect(() => {
    try {
        setTimeout(()=>{
            setItemList(productos)
       },2000);
   }  catch (error) {
      console.log(error)
    }
    }, [])

console.log(itemList)

    return (
        <div>
            <div classname="banner">
                <h1 className='greeting'>{props.greeting}</h1>
                <h2 className='user'>{props.user}</h2>


                
             {<ItemList productos={itemList}/>}
            </div>
        </div>
    )
}

export default ItemListContainer


/*<ul>
                {productos.map((productos)=><li key={productos.id}>{productos.id}<br/>{productos.nombre}</li>)}
                </ul>*/