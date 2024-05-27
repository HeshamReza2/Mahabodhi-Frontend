import React, { useEffect, useState } from 'react'
import './PersonalDetails.css'
import { Col, Container, Row } from 'react-bootstrap'
import ApplicationNavbar from '../ApplicationNavbar'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

function PersonalDetails() {
    const navigate = useNavigate()
    const location = useLocation()
    
    useEffect(() => {
        if(!cookies.get('id')){
            navigate('/login')
            cookies.remove('id')
        }
    })

    const bloodGroup = [ 'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
    const religionList = [ 'Hindu', 'Muslim', 'Christian', 'Sikh', 'Jain', 'Buddhist', 'Zoroastrian']
    const categoryList = [ 'General', 'BC-I', 'BC-II', 'S.C.', 'S.T.']
    const subCategoryList = [ 'Girls', 'Visually Divyang (VH)', 'Hearing Divyang (HH)', 'Orthopaedically Divyang (OH)', 'Not Applicable']

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

    const genderList = [ 'Male', 'Female', 'Transgender']
    const minorityList = [ {text: 'Yes', value: true}, {text: 'No', value: false} ]

    const monthList = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const yesNo = ( value) => {
        if(value == false) return 'No'
        else if(value == true) return 'Yes'
    }

    const [ data, setData ] = useState(location.state)
    const [ data2, setData2 ] = useState([])
    console.log(data2)

    const updateData = e => {
        setData2({
            ...data2,
            [e.target.name]: e.target.value
        })
    }

    const dob = new Date(data.dob)
    const today = Date.now()

    const submit = () => {
        axios
            .patch(`http://localhost:8060/update-student/${data._id}`, data2)
            .then(res => {
                if(res.status == 200){
                    alert('Step 1 complete. Moving to step 2')
                    navigate('/application-form/contact-details', { state: data })
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
                    <h6>Personal Details</h6>
                    
                    <form>
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
                                <input type='text' className='form-control my-3 input-text' autoFocus required name='mother_name' placeholder='Enter Your Mother`s Name' defaultValue={data.mother_name || ''} onChange={updateData} />
                                <i class="fa-solid fa-user input-text-icon"></i>
                            </Col>
                        </Row>

                        <Row className='form-group'>
                            <Col sm='6' className='label-box'>
                                <label for="dob">Date of Birth</label>
                                <a>*</a>
                            </Col>
                            
                            <Col sm='6' className='label-box'>
                                <input type='text' className='form-control my-3 input-text' autoFocus name='dob' placeholder='Enter Your Date of Birth' value={`${dob.getDate()}-${monthList[dob.getMonth()]}-${dob.getFullYear()}` || ''} max={today} />
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
                                <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus name='blood_group' onChange={updateData} >
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
                                <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus required name='gender' onChange={updateData} >
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
                                <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus required name='religion' onChange={updateData} >
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
                                <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus required name='category' onChange={updateData} >
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
                                <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus required name='sub_category' onChange={updateData} >
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
                                <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus name='minority' onChange={updateData} >
                                    <option value={yesNo(data.minority) || 'Do you belong to Minority Category?'}>{yesNo(data.minority) || 'Do you belong to Minority Category?'}</option>
                                    {
                                        minorityList.map((item, index) => {
                                            if(item.value !== data.minority){
                                                return(
                                                    <option value={item.value} key={index}>{item.text}</option>
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
                                <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus required name='economically_weak' onChange={updateData} >
                                    <option value={yesNo(data.economically_weak) || 'Do you possess Economically Weaker Section (EWS) certificate?'}>{yesNo(data.economically_weak) || 'Do you possess Economically Weaker Section (EWS) certificate?'}</option>
                                    {
                                        minorityList.map((item, index) => {
                                            if(item.value !== data.economically_weak){
                                                return(
                                                    <option value={item.value} key={index}>{item.text}</option>
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
                                <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus required name='domicile_state' onChange={updateData} >
                                    <option value={data.domicile_state || 'Select Your Domicile State'}>{data.domicile_state || 'Select Your Domicile State'}</option>
                                    {
                                        domicileStates.map((item, index) => {
                                            if(item !== data.domicile_state){
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
                                <label for="domicile_certificate_no">Domicile Certificate Number</label>
                                <a>*</a>
                            </Col>

                            <Col sm='6' className='label-box'>
                                <input type='text' className='form-control my-3 input-text' autoFocus name='domicile_certificate_no' placeholder='Enter Your Domicile Certificate Number' defaultValue={data.domicile_certificate_no || ''} onChange={updateData} />
                                <i class="fa-solid fa-hashtag input-text-icon"></i>
                            </Col>
                        </Row>

                        <Row className='form-group'>
                            <Col sm='6' className='label-box'>
                                <label for="aadhar">Aadhar Number</label>
                                <a>*</a>
                            </Col>

                            <Col sm='6' className='label-box'>
                                <input type='number' className='form-control my-3 input-text' autoFocus required name='aadhar' placeholder='Enter Your Aadhar Number' defaultValue={data.aadhar || ''} onChange={updateData} />
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
                                <input type='number' className='form-control my-3 input-text' autoFocus name='mobile2' placeholder='Enter Your Alternate Mobile Number' defaultValue={data.mobile2 || ''} onChange={updateData} />
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
                            <button className='btn btn-primary' onClick={e => {e.preventDefault(); submit()}}>Save & Next Step</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default PersonalDetails
