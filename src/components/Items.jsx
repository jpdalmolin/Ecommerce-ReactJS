import React from 'react'
import productos from './productos'

export const Items = (productos) => {
    return (
      <div className='section-center' >
        <article key={productos.id} className='menu-item'> 
         <img src={productos.img} alt={productos.desc} className='photo'/>
         <div className='item-info'>
         <div>
         <p className='item-text'>{productos.desc}{productos.stock}</p>
         <h5 className="price">${productos.price}</h5>
         </div>
         </div>
        </article>
      </div>
    )
  }
  export default Items