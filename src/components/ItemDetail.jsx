import React from 'react'


function ItemDetail({item={}}) {
    console.log(item)
    return (
        <div>
        <h3>Nombre{item.nombre}</h3>
        <h3>Imagen{item.image}</h3>
        <h3>Stock{item.stock}</h3>
        
        </div>
       
    )
}

export default ItemDetail
