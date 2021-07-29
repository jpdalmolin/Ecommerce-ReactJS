import React from 'react'
import { handleCount } from './Items'
import Card from 'react-bootstrap/Card'
import {Row } from 'react-bootstrap'
import ItemCount from './ItemCount'
import Container from 'react-bootstrap/Container'
import { Col } from 'react-bootstrap'

function ItemDetail({id,nombre,image,stock,precio}) {

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
  <ItemCount stock={5} initial={1} onAdd={handleCount}/>
</Card>
</Col>
</Row>
</Container>
        </div>
       
    )
}

export default ItemDetail
