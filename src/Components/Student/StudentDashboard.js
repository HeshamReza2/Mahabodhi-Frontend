import React from 'react'
import './StudentDashboard.css'
import { Col, Container, Row } from 'react-bootstrap'
import HeadingPage from '../HeadingPage'

function StudentDashboard() {
  return (
    <>
        <HeadingPage icon='fa-gauge' heading='Dashboard' />

        <Container className='dashboard-container'>
            <Row className='dashboard-row'>
                <Col md='4' className='dashboard-col'>
                    <img src='' alt='Hesham Reza' />
                    <input type='file' />
                </Col>
                
                <Col md='4' className='dashboard-col'>
                    <h4>Hesham Reza</h4>
                    <h6>Bachelor of Arts</h6>
                    <h6>Botany</h6>
                    <p><b>Father's Name: </b>Humayun Reza</p>
                    <p><b>Caste: </b>OBC-A</p>
                    <p><b>Reservation Category: </b></p>
                    <p><b>Contact No: </b>6295087117</p>
                    <p><b>Email: </b>heshamreza2@gmail.com</p>
                </Col>
                
                <Col md='4' className='dashboard-col'>
                    <button>I Card <i class="fa-regular fa-id-card"></i></button>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default StudentDashboard
