import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function ItemCount({initial,stock,onAdd}) {
    const [cantidad,setCantidad]=useState(initial)
    const handleAdd=()=>{
        if(cantidad<stock){
            setCantidad(cantidad+1)


        }


    }
    const handleRemove=()=>{
        if(cantidad>initial){
            setCantidad(cantidad-1)


    }
}

    const handleOnAdd=()=>{
            onAdd(cantidad)
            show();
         
    }
    function show()
    {
        document.getElementById('three').removeAttribute('disabled');
        let boton= document.getElementById('two')
        boton.parentNode.removeChild(boton);
    }
    

    return (
        <div className="card text-center w-50">
           
            <div className="card-footer">
                <button onClick={handleRemove}>
            -               
                </button>
               
                <label className="alert alert-white">{cantidad}</label>
                <button onClick={handleAdd}>+</button>
                <button className="btn btn-primary btn-block" id="two" onClick={handleOnAdd}>Add to Cart</button>
                <Link to={`/cart/`}><button type="button" id="three" disabled="disabled"> Terminar Compra</button></Link>
                
            </div>
        </div>
    )
}

export default ItemCount