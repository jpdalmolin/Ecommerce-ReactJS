import React from 'react'
import Items from './Items'


function ItemList({productos}) {
    return (
        <div className='shoplist'>
            {productos.map((item) => {
              const {id, nombre,stock,image,precio} = item;
              return (
              <div >
                <Items id={id} image={image} nombre={nombre} stock={stock} precio={precio}/>
              </div>
            )})}
          </div>
          
    )
}

export default ItemList
