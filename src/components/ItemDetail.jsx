import React from 'react'
import { handleCount } from './Items'
import Card from 'react-bootstrap/Card'
import {Row } from 'react-bootstrap'
import ItemCount from './ItemCount'
import Container from 'react-bootstrap/Container'
import { Col } from 'react-bootstrap'
import { productos } from './productos'
import {useState, useContext} from 'react'

import { NotiContext } from '../context/CartContext'


function ItemDetail({id,nombre,image,stock,precio}) {
  const [cantidad,setCantidad]=useState(0)
  const [pulsar, setPulsar]=useState(false)
  const{cartList, guardarItem}=useContext(NotiContext)

  function onAdd(count){
setCantidad(count)
guardarItem({productos,count})

  }
//  const {cart,setCart}=useCartContext();
//  const{item}=useAppContext();
//  const addToCart=id=>{
  //  const findProductInDB=item.find(it => it.id ===id);
//
  //  setCart([...cart,findProductInDB])
    //console.log(cart);
  //}

    return (
        <div>
            
         <Container fluid="md">
        <Row>
          <Col>
          
     
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
      
      
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    Precio {precio}

  </Card.Body>
  <ItemCount stock={5} initial={1} onAdd={onAdd} />
</Card>
</Col>
</Row>
</Container>
        </div>
       
    )
}

export default ItemDetail
