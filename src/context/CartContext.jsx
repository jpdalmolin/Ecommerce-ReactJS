import { createContext, useState } from "react";
export const NotiContext = createContext()//estados y funciones sean globales para todos. 
export default function UseNotiContext({children}){
    const [cartList, setCartList] = useState([])// {item: item, quantity: quantity}
    function guardarItem(newItem){
        console.log(newItem)
        const idx = cartList.findIndex(productos => newItem.productos.id === productos.productos.id)//-1 , posicion
        console.log('index:',idx);
        if(idx === -1){
            setCartList([...cartList,newItem])
        }else{
            const newQuantity= cartList[idx].quantity + newItem.quantity
            console.log('newQuantity', newQuantity)
            const oldList = cartList.filter(old=> old.productos.id !== newItem.productos.id)
            console.log(oldList);
            setCartList([...oldList,{productos: newItem.productos, quantity: newQuantity}])
        }//[item1, item2,item3]
    }
    const removeItem = (oldItemId) =>{
        const oldList = cartList.filter(productos => productos.item.id !== oldItemId)
    }
    const price =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.quantity* valor.productos.precio)), 0) //[item.quantity, ]
    }
    const size =()=>{
        return cartList.reduce((acum, valor)=> acum + valor.quantity, 0) //[item.quantity],0) 
    }
    function cleanList (){
        setCartList([])
    }
    return(
        <NotiContext.Provider value={{
            cartList,
            removeItem,
            price,
            size,
            guardarItem
        }}>
            {children}
        </NotiContext.Provider>
    )
};