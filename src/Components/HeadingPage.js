import React from 'react'
import './HeadingPage.css'
import { Col, Container, Row } from 'react-bootstrap'

function HeadingPage(props) {
  return (
    <Container fluid className='p-0'>
        <Row>
            <Col sm='12' className='headingOfAll'>
                <a><i class={`fa-solid ${props.icon}`}></i></a>
                <h6>{props.heading}</h6>
            </Col>
        </Row>
    </Container>
  )
}

export default HeadingPage
