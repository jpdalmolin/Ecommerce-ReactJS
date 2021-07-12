import React from 'react'



const ItemListContainer = (props) =>{
    return (
        <div>
            <div classname="banner">
                <h1 className='greeting'>{props.greeting}</h1>
                <h2 className='user'>{props.user}</h2>
            </div>
        </div>
    )
}

export default ItemListContainer
