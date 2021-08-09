import React from 'react'
import Card from 'react-bootstrap/Card'
import {Row } from 'react-bootstrap'
import ItemCount from './ItemCount'
import Container from 'react-bootstrap/Container'
import { Col } from 'react-bootstrap'
import {useContext} from 'react'
import { NotiContext } from '../context/CartContext'
function ItemDetail({producto}) {
  const{guardarItem}=useContext(NotiContext)
  console.log(producto)
 function onAdd(count){
guardarItem({producto,count})
  }
    return (
        <div>
      <Container fluid="md">
      <Row>
      <Col>
    <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={producto.image} />
     <Card.Body>
    <Card.Title>{producto.nombre}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    Precio {producto.precio}
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