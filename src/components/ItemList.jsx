import React from 'react'
import Items from './Items'


function ItemList({productos}) {
    return (
        <div className='shoplist'>
            {productos.map((item) => {
              const {id, nombre,stock,image} = item;
              return (
              <div >
                <Items id={id} image={image} nombre={nombre} stock={stock}/>
              </div>
            )})}
          </div>
          
    )
}

export default ItemList
