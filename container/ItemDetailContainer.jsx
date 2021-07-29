import React, {useState,useEffect} from 'react'
import ItemDetail from '../components/ItemDetail'
import {getMocks} from '../servicios/getMocks'
import{useParams} from 'react-router-dom'


function ItemDetailContainer() {
    const [item,setItem]=useState([])
    const{detalleId}=useParams()
useEffect(() => {
    if(detalleId===undefined){
        getMocks()
   .then(res=>setItem(res))
    }else{
        getMocks()
        .then(res=>setItem(res.filter(it=>it.id===detalleId)))
    }
   
},[detalleId])

console.log(detalleId)
return (
    <div>
        {item.map(elemento => <ItemDetail   nombre={elemento.nombre}  image={elemento.image}
stock={elemento.stock} precio={elemento.precio}/>)}
        </div>
    )
}

export default ItemDetailContainer
