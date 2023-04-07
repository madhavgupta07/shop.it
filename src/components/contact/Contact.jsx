import './contact.css'
import { Card, Button, Container } from 'react-bootstrap'
import React from 'react'

const Contact = () => {
  return (
    <>
    <Container>
    <Card className="text-center" style={{marginTop: "150px"}} >
  <Card.Header>Contact Us</Card.Header>
  <Card.Body>
    <Card.Title>Email: abc@gmail.com</Card.Title>
    <Card.Title>Phone number: +91-xxxxxxxxxx</Card.Title>
    <Card.Text>
     Address: ABC Colony, Bihar
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted"></Card.Footer>
</Card>
</Container>
    </>
  )
}

export default Contact