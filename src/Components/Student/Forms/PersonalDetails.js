import React, { useEffect, useState } from 'react'
import './PersonalDetails.css'
import { Col, Container, Row } from 'react-bootstrap'
import ApplicationNavbar from '../ApplicationNavbar'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router'

function PersonalDetails() {
    const navigate = useNavigate()
    const location = useLocation()

    const bloodGroup = [ 'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
    const religionList = [ 'Hindu', 'Muslim', 'Christian', 'Sikh', 'Jain', 'Buddhist', 'Zoroastrian']
    const categoryList = [ 'General', 'BC-I', 'BC-II', 'S.C.', 'S.T.']
    const subCategoryList = [ 'Girls', 'Visually Divyang (VH)', 'Hearing Divyang (HH)', 'Orthopaedically Divyang (OH)', 'Not Applicable']

    const domicileStates = [
        'Arunachal Pradesh', 'Andhra Pradesh', 'Assam', 'Bihar', 'Chattisgarh', 'Delhi', 'Goa', 'Gujrat', 'Haryana', 'Haryana', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Tripura', 'Uttranchal', 'Uttar Pradesh', 'West Bengal', 'Union Territories'
    ]

    const genderList = [ 'Male', 'Female', 'Transgender']
    const minorityList = [ 'Yes', 'No']

    const [ data, setData ] = useState(location.state)
    console.log(data)

    const updateDate = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const dob = new Date(data.dob)

    const submit = e => {
        e.preventDefault()
        axios
            .patch(`http://localhost:8060/update-student/${data._id}`, data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
  return (
    <>
        <ApplicationNavbar />

        <Container style={{marginBottom: '80px'}}>
            <Row>
                <Col sm='12' className='form-personal-details'>
                    <h6>Personal Details</h6>
                    
                    <form onSubmit={submit}>
                        <Row className='form-group'>
                            <Col sm='6' className='label-box'>
                                <label for="name">Candidate Name</label>
                                <a>*</a>
                            </Col>
                            
                            <Col sm='6' className='label-box'>
                                <input type='text' className='form-control my-3 input-text' autoFocus required name='name' placeholder='Candidate`s Name' value={data.name || ''} />
                                <i class="fa-solid fa-user input-text-icon"></i>
                            </Col>
                        </Row>

                        <Row className='form-group'>
                            <Col sm='6' className='label-box'>
                                <label for="father_name">Father's Name</label>
                                <a>*</a>
                            </Col>
                            
                            <Col sm='6' className='label-box'>
                                <input type='text' className='form-control my-3 input-text' autoFocus required name='father_name' placeholder='Enter Your Father`s Name' value={data.father_name || ''} />
                                <i class="fa-solid fa-user input-text-icon"></i>
                            </Col>
                        </Row>

                        <Row className='form-group'>
                            <Col sm='6' className='label-box'>
                                <label for="mother_name">Mother's Name</label>
                                <a>*</a>
                            </Col>

                            <Col sm='6' className='label-box'>
                                <input type='text' className='form-control my-3 input-text' autoFocus required name='mother_name' placeholder='Enter Your Mother`s Name' defaultValue={data.mother_name || ''} onChange={updateDate} />
                                <i class="fa-solid fa-user input-text-icon"></i>
                            </Col>
                        </Row>

                        <Row className='form-group'>
                            <Col sm='6' className='label-box'>
                                <label for="dob">Date of Birth</label>
                                <a>*</a>
                            </Col>
                            
                            <Col sm='6' className='label-box'>
                                <input type='date' className='form-control my-3 input-text' autoFocus required name='dob' placeholder='Enter Your Date of Birth' defaultValue={data.dob || ''} onChange={updateDate} />
                                <i class="fa-solid fa-calendar-days input-text-icon"></i>
                            </Col>
                        </Row>

                        <Row className='form-group'>
                            <Col sm='6' className='label-box'>
                                <label for="age">Age</label>
                            </Col>

                            <Col sm='6' className='label-box'>
                                <input type='number' className='form-control my-3 input-text' autoFocus name='age' placeholder='Enter Your Father`s Name' value={12} />
                                <i class="fa-solid fa-hashtag  input-text-icon"></i>
                            </Col>
                        </Row>

                        <Row className='form-group'>
                            <Col sm='6' className='label-box'>
                                <label for="blood_group">Blood Group</label>
                            </Col>

                            <Col sm='6' className='label-box'>
                                <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus name='blood_group' onChange={updateDate} >
                                    <option value={data.blood_group || 'Select Blood Group'}>{data.blood_group || 'Select Blood Group'}</option>
                                    {
                                        bloodGroup.map((item, index) => {
                                            if(item !== data.blood_group){
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
                                <label for="gender">Gender</label>
                                <a>*</a>
                            </Col>

                            <Col sm='6' className='label-box'>
                                <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus required name='gender' onChange={updateDate} >
                                    <option value={data.gender || 'Select Your Gender'}>{data.gender || 'Select Your Gender'}</option>
                                    {
                                        genderList.map((item, index) => {
                                            if(item !== data.gender){
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
                                <label for="religion">Religion</label>
                                <a>*</a>
                            </Col>

                            <Col sm='6' className='label-box'>
                                <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus required name='religion' onChange={updateDate} >
                                    <option value={data.religion || 'Select Your Religion'}>{data.religion || 'Select Your Religion'}</option>
                                    {
                                        religionList.map((item, index) => {
                                            if(item !== data.religion){
                                                return(
                                                    <option value={item} key={index}>{item}</option>
                                                )
                                            }
                                        })
                                    }
                                    <option value='Others'>Others</option>
                                </select>
                            </Col>
                        </Row>

                        <Row className='form-group'>
                            <Col sm='6' className='label-box'>
                                <label for="category">Category</label>
                                <a>*</a>
                            </Col>

                            <Col sm='6' className='label-box'>
                                <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus required name='category' onChange={updateDate} >
                                    <option value={data.category || 'Select Your Category'}>{data.category || 'Select Your Category'}</option>
                                    {
                                        categoryList.map((item, index) => {
                                            if(item !== data.category){
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
                                <label for="sub_category">Sub Category</label>
                                <a>*</a>
                            </Col>

                            <Col sm='6' className='label-box'>
                                <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus required name='sub_category' onChange={updateDate} >
                                    <option value={data.sub_category || 'Select Your Sub Category'}>{data.sub_category || 'Select Your Sub Category'}</option>
                                    {
                                        subCategoryList.map((item, index) => {
                                            if(item !== data.sub_category){
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
                                <label for="minority">Do you belong to Minority Category?</label>
                            </Col>

                            <Col sm='6' className='label-box'>
                                <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus name='minority' onChange={updateDate} >
                                    <option value={data.minority || 'Do you belong to Minority Category?'}>{data.minority || 'Do you belong to Minority Category?'}</option>
                                    {
                                        minorityList.map((item, index) => {
                                            if(item !== data.minority){
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
                                <label for="economically_weak">Do you possess Economically Weaker Section (EWS) certificate?</label>
                                <a>(Only if select General in Category*)</a>
                            </Col>

                            <Col sm='6' className='label-box'>
                                <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus required name='economically_weak' onChange={updateDate} >
                                    <option value={data.economically_weak || 'Do you possess Economically Weaker Section (EWS) certificate?'}>{data.economically_weak || 'Do you possess Economically Weaker Section (EWS) certificate?'}</option>
                                    {
                                        minorityList.map((item, index) => {
                                            if(item !== data.economically_weak){
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
                                <label for="domicile_state">Domicile State</label>
                                <a>*</a>
                            </Col>
                            
                            <Col sm='6' className='label-box'>
                                <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus required name='domicile_state' onChange={updateDate} >
                                    <option value={data.domicile_state || 'Select Your Domicile State'}>{data.domicile_state || 'Select Your Domicile State'}</option>
                                    {
                                        domicileStates.map((item, index) => {
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
                                <label for="domicile_certificate_no">Domicile Certificate Number</label>
                                <a>*</a>
                            </Col>

                            <Col sm='6' className='label-box'>
                                <input type='text' className='form-control my-3 input-text' autoFocus name='domicile_certificate_no' placeholder='Enter Your Domicile Certificate Number' defaultValue={data.domicile_certificate_no || ''} onChange={updateDate} />
                                <i class="fa-solid fa-hashtag input-text-icon"></i>
                            </Col>
                        </Row>

                        <Row className='form-group'>
                            <Col sm='6' className='label-box'>
                                <label for="aadhar">Aadhar Number</label>
                                <a>*</a>
                            </Col>

                            <Col sm='6' className='label-box'>
                                <input type='number' className='form-control my-3 input-text' autoFocus required name='aadhar' placeholder='Enter Your Aadhar Number' defaultValue={data.aadhar || ''} onChange={updateDate} />
                                <i class="fa-solid fa-hashtag input-text-icon"></i>
                            </Col>
                        </Row>

                        <Row className='form-group'>
                            <Col sm='6' className='label-box'>
                                <label for="mobile">Mobile Number</label>
                                <a>*</a>
                            </Col>

                            <Col sm='6' className='label-box'>
                                <input type='number' className='form-control my-3 input-text' autoFocus required name='mobile' placeholder='Enter Your Mobile Number' value={data.mobile || ''} />
                                <i class="fa-solid fa-phone input-text-icon"></i>
                            </Col>
                        </Row>

                        <Row className='form-group'>
                            <Col sm='6' className='label-box'>
                                <label for="mobile2">Alternate Mobile Number</label>
                            </Col>

                            <Col sm='6' className='label-box'>
                                <input type='number' className='form-control my-3 input-text' autoFocus name='mobile2' placeholder='Enter Your Alternate Mobile Number' value={data.mobile2 || ''} />
                                <i class="fa-solid fa-phone input-text-icon"></i>
                            </Col>
                        </Row>

                        <Row className='form-group'>
                            <Col sm='6' className='label-box'>
                                <label for="email">Email</label>
                                <a>*</a>
                            </Col>

                            <Col sm='6' className='label-box'>
                                <input type='email' className='form-control my-3 input-text' autoFocus required name='email' placeholder='Enter Your Email' value={data.email || ''} />
                                <i class="fa-solid fa-envelope input-text-icon"></i>
                            </Col>
                        </Row>

                        <div className='buttons'>
                            <button className='btn btn-primary'>Save & Next Step</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default PersonalDetails
