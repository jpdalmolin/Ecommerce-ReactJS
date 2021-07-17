import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList';



const handleCount=(cant)=>{
    alert("Usted agrego " +cant+ " a su carrito !");

}

const ItemListContainer = (props) =>{
    return (
        <div>
            <div classname="banner">
                <h1 className='greeting'>{props.greeting}</h1>
                <h2 className='user'>{props.user}</h2>


                <ItemCount stock={5} initial={1} onAdd={handleCount}/>
            </div>
        </div>
    )
}

export default ItemListContainer















/* import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList';



const handleCount=(cant)=>{
    console.log(cant);



}

const ItemListContainer = (props) =>{
    return (
        <div>
            <div classname="banner">
                <h1 className='greeting'>{props.greeting}</h1>
                <h2 className='user'>{props.user}</h2>

               <ItemList lista={list} /> 

                <ItemCount stock={5} initial={1} onAdd={handleCount}/>
            </div>
        </div>
    )
}

export default ItemListContainer*/


/*import {useState, useEffect} from 'react'
import ItemCount from './ItemCount'
​
​
const handleCount=(cant)=>{
    alert(`ud a agregado asdfasdjf : ${cant}`)
}
​
​
​
function ItemListContainer() {
    const [itemList, setItemList] = useState([])    
    useEffect(() => {
        const items=[
            {id:'sadfsadfih654sadf', nombre: 'gorra roja'},
            {id:'sadfsadfih654ssfdd', nombre: 'gorra azul'}
        ]      
    
        const task = new Promise((resuelto, rechazado)=>{
            //console.log('promesa')
            let status=200
            if(status===200){
    
                setTimeout(()=>{
                    resuelto(items)
                },3000)
            }else{
                rechazado('rechazado')
            }
    
    
        })
        const getPromiseTask=()=>{
            return task
        }
​
        getPromiseTask()
    .then((resp)=> setItemList(resp))    
    .catch(err=> { console.log('un error')})    
    
        
    }, [])
​
    console.log(itemList)
    return (
        <div>
          <ItemCount stock={5} initial={1} onAdd={handleCount} />
          <ul>
            { itemList.map((item)=> <li key={item.id}>{item.nombre}</li> ) }
          </ul>
        </div>
    )
}
​
export default ItemListContainer */