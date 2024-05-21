import React from 'react'
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <Container fluid className='footer'>
        <Row className='justify-content-center'>
            <Col sm='12'>
            <p><i class="fa-regular fa-copyright"></i> 2024 Mahabodhi Mahavidyalaya, Nalanda</p>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer
