import React, {useState,useEffect} from 'react'
import ItemDetail from '../components/ItemDetail'
import {getMocks} from '../servicios/getMocks'
import { productos } from '../components/productos'

function ItemDetailContainer() {
    const [item,setItem]=useState({})
  
useEffect(() => {
   getMocks()
   .then(resp=>setItem(resp))
},[])

console.log(item)
return (
    <div>
        
        <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer
