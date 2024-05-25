import React, { useEffect, useState } from 'react'
import './ApplicationNavbar.css'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'

function ApplicationNavbar(props) {
  const navigate = useNavigate()
  const pathname = window.location.href

  const [ step1, setStep1 ] = useState('active-step')
  const [ step2, setStep2 ] = useState('')
  const [ step3, setStep3 ] = useState('')
  const [ step4, setStep4 ] = useState('')
  const [ step5, setStep5 ] = useState('')
  const [ step6, setStep6 ] = useState('')

  useEffect(() => {
    if(pathname == 'http://localhost:3000/application-form/personal-details'){
      setStep1('active-step')
      setStep2('')
      setStep3('')
      setStep4('')
      setStep5('')
      setStep6('')
    }

    else if(pathname == 'http://localhost:3000/application-form/contact-details'){
      setStep1('')
      setStep2('active-step')
      setStep3('')
      setStep4('')
      setStep5('')
      setStep6('')
    }

    else if(pathname == 'http://localhost:3000/application-form/previous-exam-details'){
      setStep1('')
      setStep2('')
      setStep3('active-step')
      setStep4('')
      setStep5('')
      setStep6('')
    }

    else if(pathname == 'http://localhost:3000/application-form/college-allotted-details'){
      setStep1('')
      setStep2('')
      setStep3('')
      setStep4('active-step')
      setStep5('')
      setStep6('')
    }

    else if(pathname == 'http://localhost:3000/application-form/subject-selection'){
      setStep1('')
      setStep2('')
      setStep3('')
      setStep4('')
      setStep5('active-step')
      setStep6('')
    }

    else if(pathname == 'http://localhost:3000/application-form/attachments'){
      setStep1('')
      setStep2('')
      setStep3('')
      setStep4('')
      setStep5('')
      setStep6('active-step')
    }
  })
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm='12'>
            <div className='step'>
              <ul>
                <li className={step1}><a>1</a></li>
                <li className={step2}><a>2</a></li>
                <li className={step3}><a>3</a></li>
                <li className={step4}><a>4</a></li>
                <li className={step5}><a>5</a></li>
                <li className={step6}><a>6</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ApplicationNavbar
