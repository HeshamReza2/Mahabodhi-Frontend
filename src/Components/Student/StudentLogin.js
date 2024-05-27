import React, { useEffect, useRef, useState } from 'react'
import './StudentLogin.css'
import { Col, Container, Row } from 'react-bootstrap'
import ReCAPTCHA from 'react-google-recaptcha'
import { useNavigate } from 'react-router'
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

function StudentLogin() {
  const navigate = useNavigate()
  const recaptchaRef = useRef()

  const [ data, setData ] = useState([])
  console.log(data);
  const [ field, setField ] = useState('application_no')
  const [ valid, setValid ] = useState(false)

  const [ studentData, setStudentData ] = useState({
    number: '',
    date: ''
  })

  const isNumeric = (string) => /^[+-]?\d+(\.\d+)?$/.test(string)

  useEffect(() => {
    if(isNumeric(studentData.number)) setField('registration_no')
    else setField('application_no')
  }, [studentData.number])

  const updateStudentData = e => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if(studentData.number !== ''){
      axios
        .post(`http://localhost:8060/find-student-any-field`, { field: field, value: studentData.number})
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }
    else console.log('none')
  }, [studentData.number])

  useEffect(() => {
    if(data != [] || data !== '' || data !== null || data !== undefined){
      if(studentData.date !=''){
        if(new Date(data.dob).getFullYear() == new Date(studentData.date).getFullYear()){
          if(new Date(data.dob).getMonth() == new Date(studentData.date).getMonth()){
            if(new Date(data.dob).getDate() == new Date(studentData.date).getDate()) setValid(true)
              else setValid(false)
          }
          else setValid(false)
        }
        else setValid(false)
      }
      else if(studentData.date ='') setValid(false)
    }
    else if(data == [] || data == '' || data == null || data == undefined) setValid(false)
  })

  const submit = e => {
    e.preventDefault()
    const captchaValue = recaptchaRef.current.getValue()
    if(!captchaValue) alert('Fill the captcha')
    else{
      if(valid == true){
        if(data.admission_status == true){
          cookies.set('id', data._id, { path: '/', maxAge: 3600*24 })
          navigate('/dashboard')
        }
        else if(data.admission_status == false){
          cookies.set('id', data._id, { path: '/', maxAge: 60*15 })
          navigate('/application-form/personal-details', { state: data})
        }
      }
      else if(valid == false){
        if(field == 'registration_no') alert('Registration Number or Date of Birth not valid')
        else if(field == 'application_no') alert('Application Number or Date of Birth not valid')
      }
    }
  }
  return (
    <>
      <Container fluid className='login-container'>
        <Row className='justify-content-center'>
          <Col sm='6' className='login-col'>
              <form className='login-form' onSubmit={submit}>
                <div className='form-group'>
                  <label for="registration_no">University Application / Registration Number</label>

                  <input type='text' className='form-control my-3 input-text' autoFocus required name='number' placeholder='Enter Your University Registration Number' onChange={updateStudentData} />
                  <i class="fa-solid fa-hashtag input-text-icon"></i>
                </div>
                
                <div className='form-group'>
                  <label for="dob">Date of Birth</label>

                  <input type='date' className='form-control my-3 input-text' autoFocus required name='date' placeholder='Enter Your Date of Birth' onChange={updateStudentData} />
                  <i class="fa-solid fa-calendar input-text-icon"></i>
                </div>

                <div className='captcha'>
                  <ReCAPTCHA ref={recaptchaRef} sitekey='6Ldlf-QpAAAAACvmYdGHL_pcQM7gUblcNhlZTX_G' />
                </div>

                <div className='buttons'>
                  <button className='btn btn-primary'>Verify</button>
                </div>
              </form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default StudentLogin
