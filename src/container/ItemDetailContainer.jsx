import React, {useState,useEffect} from 'react'
import ItemDetail from '../components/ItemDetail'
import {getMocks} from '../servicios/getMocks'
import{useParams} from 'react-router-dom'
import { getFirestore } from '../servicios/firebaseService'


function ItemDetailContainer() {
    const [item,setItem]=useState([])
    const{detalleId}=useParams()
useEffect(() => {

    const dbQuery= getFirestore()
     dbQuery.collection('items').doc(detalleId).get()
                                //where('precio', '>=',14000)
     .then(resp=> setItem({id:resp.id, ...resp.data()}))
},[])
    console.log(detalleId)
    
    
    
    
    
    
    
    
    
    
    
    
    /* code sin firebase
    if(detalleId===undefined){
        getMocks()
   .then(res=>setItem(res))
    }else{
        getMocks()
        .then(res=>setItem(res.filter(it=>it.id===detalleId)))
    }
},[detalleId])
console.log(detalleId)*/



return (
    <div>
        <ItemDetail producto={item}/>
        </div>
    )
}
export default ItemDetailContainer