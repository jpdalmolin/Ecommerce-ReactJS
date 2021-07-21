import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button, Row } from 'react-bootstrap'
import ItemCount from './ItemCount'
import Container from 'react-bootstrap/Container'
import { Col } from 'react-bootstrap'
const handleCount=(cant)=>{
  alert("Usted agrego " +cant+ " a su carrito !");

}



export const Items = ({nombre,id,stock,image}) => {
    return (
      <>
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
    
    <ItemCount stock={5} initial={1} onAdd={handleCount}/>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
</>
    )
  }
  export default Items