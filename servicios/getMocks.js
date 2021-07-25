import { productos } from "../components/productos"
import { useParams } from 'react-router-dom';



const task=new Promise((res)=>{
    res(productos.filter(item=>item.id===1))
    
}, 2000)


export const getMocks=()=>{
    return(
        task
    )
}