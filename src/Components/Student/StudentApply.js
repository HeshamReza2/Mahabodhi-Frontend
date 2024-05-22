import React from 'react'
import './StudentApply.css'
import { Col, Container, Row } from 'react-bootstrap'
import ApplicationNavbar from './ApplicationNavbar'

function StudentApply() {
  return (
    <>
        <Container>
            <Row>
                <Col sm='12'>
                    <ApplicationNavbar />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default StudentApply
