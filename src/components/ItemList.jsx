import React from 'react'
import Items from './Items'
import productos from './productos'

function ItemList({list}) {
    return (
        <div className='shoplist'>
            {productos.map((item) => {
              const {id, img, desc, price, stock} = producto;
              return (
              <div >
                <Items img={img} desc={desc} price={price} stock={stock}/>
              </div>
            )})}
          </div>
          
    )
}

export default ItemList
