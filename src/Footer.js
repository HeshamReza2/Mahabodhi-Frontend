import React from 'react'
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import { MDBFooter } from 'mdb-react-ui-kit'

function Footer() {
  return (
    <Container fluid className='footer p-0'>
        <Row className='justify-content-center'>
            <Col sm='12'>
              <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <div className='text-center p-3 fixed-bottom' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                  <a className='text-reset fw-bold' href='/'><i class="fa-regular fa-copyright"></i> 2024 Mahabodhi Mahavidyalaya, Nalanda</a>
                </div>
              </MDBFooter>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer
