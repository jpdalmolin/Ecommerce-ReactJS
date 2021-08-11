import { createContext, useState } from "react";
import CartWidget from "../components/CartWidget";
import jQuery from "jquery";
import $ from 'jquery'
import ItemDetail from "../components/ItemDetail";

import { Component, render } from 'react-dom'


export const NotiContext = createContext()//estados y funciones sean globales para todos. 
export default function UseNotiContext({children}){
    const [cartList, setCartList] = useState([])// {item: item, quantity: quantity}
  
    function guardarItem(newItem){
        console.log(newItem)
        const idx = cartList.findIndex(producto => newItem.producto.id === producto.producto.id)//-1 , posicion
        console.log('index:',idx);
       
        if(idx === -1){
           
            setCartList([...cartList,newItem])
        }else{
            const newQuantity= cartList[idx].quantity + newItem.quantity
            console.log('newQuantity', newQuantity)
            const oldList = cartList.filter(old=> old.producto.id !== newItem.producto.id)
            console.log(oldList);
            
            setCartList([...oldList,{producto: newItem.producto,quantity: newQuantity}])
        }//[item1, item2,item3]
    }
    const removeFromCart = (itemId) =>{
        cartList.splice(
            cartList.findIndex(( item => item.id !== itemId)), 1)   
        setCartList([...cartList])
    }
    
    const price =()=>{
       return cartList.reduce((acum, valor)=>(acum + (valor.quantity*valor.producto.precio)), 0) //[item.quantity, ]
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
            removeFromCart,
           price,
            size,
            guardarItem,
            cleanList,
            
        }}>
            {children}
        </NotiContext.Provider>
    )
};