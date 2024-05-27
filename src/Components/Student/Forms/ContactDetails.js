import React, { useEffect, useState } from 'react'
import './ContactDetails.css'
import ApplicationNavbar from '../ApplicationNavbar'
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios'

import states from './Districts.json'

function ContactDetails() {
  const navigate = useNavigate()
  const location = useLocation()

  const [ domicileStates, setDomicileStates ] = useState([])

  useEffect(() => {
    axios
      .post('http://localhost:8060/find-states', { type: 'state'})
      .then(res => setDomicileStates(res.data))
      .catch(err => console.log(err))
  }, [])

  const [ unionTerritories, setUnionTerritories ] = useState([])

  useEffect(() => {
    axios
      .post('http://localhost:8060/find-states', { type: 'ut'})
      .then(res => setUnionTerritories(res.data))
      .catch(err => console.log(err))
  }, [])

  const [ data, setData ] = useState(location.state)
  const [ data2, setData2 ] = useState([])
  console.log(data2);

  const updateData = e => {
    setData2({
      ...data2,
      [e.target.name]: e.target.value
    })
  }

  const [ corrValue, setCorrValue ] = useState(false)

  useEffect(() => {
    if(corrValue == true) setData2({
      ...data2,
      correspondence_state: data2.permanent_state,
      correspondence_district: data2.permanent_district,
      correspondence_address_vill: data2.permanent_address_vill,
      correspondence_address_post: data2.permanent_address_post,
      correspondence_address_police: data2.permanent_address_police,
      correspondence_pincode: data2.permanent_pincode
    })

    else if(corrValue == false) setData2({
      ...data2,
      correspondence_state: '',
      correspondence_district: '',
      correspondence_address_vill: '',
      correspondence_address_post: '',
      correspondence_address_police: '',
      correspondence_pincode: ''
    })
  }, [corrValue, data2])

  const getDistricts = (state, setState) => {
    axios
      .post('http://localhost:8060/search-states', { name: state })
      .then(res => setState(res.data.districts[0]))
      .catch(err => console.log(err))
  }

  const [ districts, setDistricts ] = useState([])
  const [ districts2, setDistricts2 ] = useState([])

  useEffect(() => {
    getDistricts(data.permanent_state || data2.permanent_state, setDistricts)
  }, [data.permanent_state, data2.permanent_state])

  useEffect(() => {
    getDistricts(data.correspondence_state || data2.correspondence_state, setDistricts)
  }, [data.correspondence_state, data2.correspondence_state])

  const submit = () => {
    axios
        .patch(`http://localhost:8060/update-student/${data._id}`, data2)
        .then(res => {
            if(res.status == 200){
                alert('Step 2 complete. Moving to step 3')
                navigate('/application-form/previous-exam-details', { state: data })
            }

            else alert('Error! Please try again.')
        })
        .catch(err => console.log(err))
}

  return (
    <>
      <ApplicationNavbar />

      <Container style={{marginBottom: '80px'}}>
        <Row>
          <Col sm='12' className='form-personal-details'>
            <h6>Contact Details</h6>

            <form>
              <h6 className='second-head-h6'>Permanent Address</h6>

              <Row className='form-group'>
                <Col sm='6' className='label-box'>
                  <label for="permanent_state">State</label>
                  <a>*</a>
                </Col>
                  
                <Col sm='6' className='label-box'>
                  <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus required name='permanent_state' onChange={updateData} >
                    <option value={data.permanent_state || 'Select Your Permanent State'}>{data.permanent_state || 'Select Your Permanent State'}</option>
                    {
                      domicileStates.map((item, index) => {
                        if(item !== data.permanent_state){
                          return(
                            <option value={item.name} key={index}>{item.name}</option>
                          )
                        }
                      })
                    }

                    <option disabled>---Union Territories---</option>

                    {
                      unionTerritories.map((item, index) => {
                        if(item !== data.domicile_state){
                          return(
                            <option value={item.name} key={index}>{item.name}</option>
                          )
                        }
                      })
                    }
                  </select>
                </Col>
              </Row>

              <Row className='form-group'>
                <Col sm='6' className='label-box'>
                  <label for="permanent_district">District</label>
                  <a>*</a>
                </Col>
                  
                <Col sm='6' className='label-box'>
                  <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus required name='permanent_district' onChange={updateData} >
                    <option value={data.permanent_district || 'Select Your Permanent District'}>{data.permanent_district || 'Select Your Permanent District'}</option>
                    {
                      districts.map((item, index) => {
                        if(item !== data.permanent_district){
                          return(
                            <option value={item} key={index}>{item}</option>
                          )
                        }
                      })
                    }
                  </select>
                </Col>
              </Row>

              <Row className='form-group'>
                <Col sm='6' className='label-box'>
                  <label for="name">Candidate Name</label>
                  <a>*</a>
                </Col>
                
                <Col sm='6' className='label-box'>
                  <Row>
                    <Col lg='4'>
                      <div className='label-box-2'>
                        <label for="permanent_address_vill">Vill</label>
                        <a>*</a>
                      </div>

                      <div className='label-box-2'>
                        <input type='text' className='form-control my-3 input-text' autoFocus required name='permanent_address_vill' placeholder='Enter your Permanent Village' defaultValue={data.permanent_address_vill || 'Enter your Permanent Village'} onChange={updateData} />
                        <i class="fa-solid fa-location-dot input-text-icon"></i>
                      </div>
                    </Col>

                    <Col lg='4'>
                      <div className='label-box-2'>
                        <label for="permanent_address_post">Post Office</label>
                        <a>*</a>
                      </div>

                      <div className='label-box-2'>
                        <input type='text' className='form-control my-3 input-text' autoFocus required name='permanent_address_post' placeholder='Enter your Permanent Post Office' defaultValue={data.permanent_address_post || 'Enter your Permanent Post Office'} onChange={updateData} />
                        <i class="fa-solid fa-envelopes-bulk input-text-icon"></i>
                      </div>
                    </Col>

                    <Col lg='4'>
                      <div className='label-box-2'>
                        <label for="permanent_address_police">Police Station</label>
                        <a>*</a>
                      </div>

                      <div className='label-box-2'>
                        <input type='text' className='form-control my-3 input-text' autoFocus required name='permanent_address_police' placeholder='Enter your Permanent Police Station' defaultValue={data.permanent_address_police || 'Enter your Permanent Police Station'} onChange={updateData} />
                        <i class="fa-solid fa-building-shield input-text-icon"></i>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className='form-group'>
                <Col sm='6' className='label-box'>
                  <label for="permanent_pincode">Pincode</label>
                  <a>*</a>
                </Col>
                
                <Col sm='6' className='label-box'>
                  <input type='number' className='form-control my-3 input-text' autoFocus required name='permanent_pincode' placeholder='Enter your Permanent Pincode' defaultValue={data.permanent_pincode || 'Enter your Permanent Pincode'} onChange={updateData} />
                  <i class="fa-solid fa-map-pin input-text-icon"></i>
                </Col>
              </Row>



              <h6 className='second-head-h6'>Correspondence Address</h6>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" defaultChecked={false} checked={corrValue} onChange={e => setCorrValue(!corrValue)} />
                <label class="form-check-label" for="flexCheckDefault">Correspondence Address is same as Permanent Address</label>
              </div>

              <Row className='form-group'>
                <Col sm='6' className='label-box'>
                  <label for="correspondence_state">State</label>
                  <a>*</a>
                </Col>
                  
                <Col sm='6' className='label-box'>
                  <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus required name='correspondence_state' onChange={updateData} disabled={corrValue} >
                    <option value={data.correspondence_state || data2.correspondence_state || 'Select Your Correspondence State'}>{data.correspondence_state || data2.correspondence_state || 'Select Your Correspondence State'}</option>
                    {
                      domicileStates.map((item, index) => {
                        if(item !== data.correspondence_state){
                          return(
                            <option value={item.name} key={index}>{item.name}</option>
                          )
                        }
                      })
                    }

                    <option disabled>---Union Territories---</option>

                    {
                      unionTerritories.map((item, index) => {
                        if(item !== data.domicile_state){
                          return(
                            <option value={item.name} key={index}>{item.name}</option>
                          )
                        }
                      })
                    }
                  </select>
                </Col>
              </Row>

              <Row className='form-group'>
                <Col sm='6' className='label-box'>
                  <label for="correspondence_district">District</label>
                  <a>*</a>
                </Col>
                  
                <Col sm='6' className='label-box'>
                  <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus required name='correspondence_district' disabled={corrValue} onChange={updateData} >
                    <option value={data.correspondence_district || data2.correspondence_district || 'Select Your Correspondence District'}>{data.correspondence_district || data2.correspondence_district || 'Select Your Correspondence District'}</option>
                    {
                      districts2.map((item, index) => {
                        if(item !== data.domicile_state){
                          return(
                            <option value={item} key={index}>{item}</option>
                          )
                        }
                      })
                    }
                  </select>
                </Col>
              </Row>

              <Row className='form-group'>
                <Col sm='6' className='label-box'>
                  <label for="name">Candidate Name</label>
                  <a>*</a>
                </Col>
                
                <Col sm='6' className='label-box'>
                  <Row>
                    <Col lg='4'>
                      <div className='label-box-2'>
                        <label for="correspondence_address_vill">Vill</label>
                        <a>*</a>
                      </div>

                      <div className='label-box-2'>
                        <input type='text' className='form-control my-3 input-text' autoFocus required name='correspondence_address_vill' placeholder='Enter your Correspondence Village' defaultValue={data.correspondence_address_vill || data2.correspondence_address_vill || 'Enter your Correspondence Village'} disabled={corrValue} onChange={updateData} />
                        <i class="fa-solid fa-location-dot input-text-icon"></i>
                      </div>
                    </Col>

                    <Col lg='4'>
                      <div className='label-box-2'>
                        <label for="correspondence_address_post">Post Office</label>
                        <a>*</a>
                      </div>

                      <div className='label-box-2'>
                        <input type='text' className='form-control my-3 input-text' autoFocus required name='correspondence_address_post' placeholder='Enter your Correspondence Post Office' defaultValue={data.correspondence_address_post || data2.correspondence_address_post || 'Enter your Correspondence Post Office'} disabled={corrValue} onChange={updateData} />
                        <i class="fa-solid fa-envelopes-bulk input-text-icon"></i>
                      </div>
                    </Col>

                    <Col lg='4'>
                      <div className='label-box-2'>
                        <label for="correspondence_address_police">Police Station</label>
                        <a>*</a>
                      </div>

                      <div className='label-box-2'>
                        <input type='text' className='form-control my-3 input-text' autoFocus required name='correspondence_address_police' placeholder='Enter your Correspondence Police Station' defaultValue={data.correspondence_address_police || data2.correspondence_address_police || 'Enter your Correspondence Police Station'} disabled={corrValue} onChange={updateData} />
                        <i class="fa-solid fa-building-shield input-text-icon"></i>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className='form-group'>
                <Col sm='6' className='label-box'>
                  <label for="correspondence_pincode">Pincode</label>
                  <a>*</a>
                </Col>
                
                <Col sm='6' className='label-box'>
                  <input type='number' className='form-control my-3 input-text' autoFocus required name='correspondence_pincode' placeholder='Enter your Correspondence Pincode' defaultValue={data.correspondence_pincode || data2.correspondence_pincode || 'Enter your Correspondence Pincode'} disabled={corrValue} onChange={updateData} />
                  <i class="fa-solid fa-map-pin input-text-icon"></i>
                </Col>
              </Row>

              <div className='buttons'>
                <button className='btn btn-primary' onClick={e => {e.preventDefault(); navigate(-1)}}>Go to Previous Step</button>
                <button className='btn btn-primary' onClick={e => {e.preventDefault(); submit()}}>Save & Next Step</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ContactDetails
