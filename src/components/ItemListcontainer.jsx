import React from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList';
import { useEffect,useState } from 'react';

import { getFirestore } from '../servicios/firebaseService';
/*const handleCount=(cant)=>{
    alert("Usted agrego " +cant+ " a su carrito !");

}*/

const ItemListContainer = (props) =>{
    
    const[itemList,setItemList]=useState([])

    const{categoryId}=useParams()
useEffect(() => {
   try{

    if(categoryId===undefined){
    const dbQuery= getFirestore()
    dbQuery.collection('items').get()
                               //where('precio', '>=',14000)
    .then(resp=> setItemList(resp.docs.map(ite=>({...ite.data(),id:ite.id}))))
    }else{
        const dbQuery= getFirestore()
        dbQuery.collection('items').where('categoria','==',categoryId).get()
                                   //where('precio', '>=',14000)
        .then(resp=> setItemList(resp.docs.map(ite=>({...ite.data(),id:ite.id}))))

        
    }
    }catch (error) {
        console.log(error)
      }
},[])

console.log(categoryId)













 /*   setLoading(true)
    try {
        if(categoryId===undefined){
        setTimeout(()=>{
            setLoading(false)
            setItemList(productos)
       },2000);
    }else{
        setTimeout(()=>{
            setLoading(false)
            setItemList(productos.filter(it=>it.categoria===categoryId))
       },2000);
    }
   }  catch (error) {
      console.log(error)
    }
    }, [])

*/

console.log(categoryId)

    return (
        <div>
            <div classname="banner">
                <h1 className='greeting'>{props.greeting}</h1>
                <h2 className='user'>{props.user}</h2>


              
              <ItemList productos={itemList}/>
            </div>
        </div>
    )
}

export default ItemListContainer


/*<ul>
                {productos.map((productos)=><li key={productos.id}>{productos.id}<br/>{productos.nombre}</li>)}
                </ul>*/