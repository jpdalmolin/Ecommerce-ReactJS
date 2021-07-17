import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList';
import { useEffect,useState } from 'react';
import productos from './productos.jsx'
import Items from './Items';

const handleCount=(cant)=>{
    alert("Usted agrego " +cant+ " a su carrito !");

}

const ItemListContainer = (props) =>{
    const[itemList,setItemList]=useState([])
    useEffect(()=>{
        const task = new Promise((resuelto,rechazado)=>{
                let status=200
                if(status===200){

                    setTimeout(()=>{
                        resuelto(items)
                    },2000)
                }else{
                    rechazado('rechazado')
                }
        })
    const getPromiseTask=()=>{
        return task
    }
getPromiseTask()
.then((resp)=>setItemList(resp))
.catch(err=>{console.log('un error')})

},[])

console.log(itemList)
    return (
        <div>
            <div classname="banner">
                <h1 className='greeting'>{props.greeting}</h1>
                <h2 className='user'>{props.user}</h2>


                <ItemCount stock={5} initial={1} onAdd={handleCount}/>
              <itemList lista={productos}/>
            </div>
        </div>
    )
}

export default ItemListContainer


