import React, { useState } from 'react'
import './PreviousExamDetails.css'
import { useLocation, useNavigate } from 'react-router'
import { Col, Container, Row } from 'react-bootstrap'
import ApplicationNavbar from '../ApplicationNavbar'

function PreviousExamDetails() {
  const navigate = useNavigate()
  const location = useLocation()
  
  const [ data, setData ] = useState(location.state)
  const [ data2, setData2 ] = useState([])
  console.log(data2);

  const updateData = e => {
    setData2({
      ...data2,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <ApplicationNavbar />

      <Container style={{marginBottom: '80px'}}>
        <Row>
          <Col sm='12' className='form-personal-details'>
            <h6>Previous Exam Details</h6>

            <form>
              <div className='table-responsive'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Exam Type</th>
                      <th scope='col'>School / College Name</th>
                      <th scope='col'>Board Name</th>
                      <th scope='col'>Year of Passing</th>
                      <th scope='col'>Subject</th>
                      <th scope='col'>Rol No</th>
                      <th scope='col'>Marks Obtained</th>
                      <th scope='col'>Max Marks</th>
                      <th scope='col'>Percentage (%)</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Secondary / Matriculation</td>
                      <td>
                        <Row className='form-group'>
                          <Col sm='12' className='label-box'>
                            <input type='number' className='form-control my-3 input-text' autoFocus required name='permanent_pincode' placeholder='Enter your Pincode' defaultValue={data.permanent_pincode || 'Enter your Pincode'} onChange={updateData} />
                          </Col>
                        </Row>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PreviousExamDetails
