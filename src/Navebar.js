import React, { useEffect, useRef, useState } from 'react'
import './Navebar.css'
import { Col, Container, Row } from 'react-bootstrap'
import SidebarMenu from 'react-bootstrap-sidebar-menu'
import { Outlet, useNavigate } from 'react-router'
import Footer from './Footer'

function Navebar() {
    const navigate = useNavigate()
    const pathname  = window.location.href

    const [ xsAmount, setXsAmount ] = useState(2)
    const [ navToggle, setNavToggle ] = useState(true)
    const [ navDisplay, setNavDisplay ] = useState({display: ''})
    const [ arrow, setArrow ] = useState('fa-chevron-left')

    useEffect(() => {
        if(xsAmount == 2) {
            setNavToggle(false)
        }
        else if(xsAmount == 3) {
            setNavToggle(true)
        }
    }, [xsAmount])

    useEffect(() => {
        if(navToggle == false) {
            setNavDisplay({display: 'none'})
            setArrow('fa-chevron-right')
        }
        else if(navToggle == true) {
            setNavDisplay({display: ''})
            setArrow('fa-chevron-left')
        }
    }, [navToggle])

    const [ matches, setMatches ] = useState(window.matchMedia('(max-width: 768px)').matches)

    useEffect(() => {
        window
            .matchMedia('(max-width: 768px)')
            .addEventListener('change', e => setMatches( e.matches ))
    })

    useEffect(() => {
        if(matches == true) setXsAmount(2)
        else if(matches == false) setXsAmount(3)
    }, [matches])

    const [ adminNav, setAdminNav ] = useState({display: 'none'})
    const [ studentNav, setStudentNav ] = useState({display: ''})

    const [ including, setIncluding ] = useState(false)
    const [ including1, setIncluding1 ] = useState(false)

    useEffect(() => {
        if(pathname?.includes('/admin/')) setIncluding(true)
        else setIncluding(false)
    }, [pathname])

    useEffect(() => {
        if(pathname?.includes('/login')) setIncluding1(true)
        else setIncluding1(false)
    }, [pathname])

    useEffect(() => {
        if(including == true){
            setAdminNav({display: ''})
            setStudentNav({display: 'none'})
        }

        else if(including == false){
            setAdminNav({display: 'none'})
            setStudentNav({display: ''})
        }
    }, [including])

    const [ navbarDisplay, setNavbarDisplay ] = useState({display: ''})

    useEffect(() => {
        if(including1 == true){
            setNavbarDisplay({display: 'none'})
            setXsAmount(0)
        }

        else if(including1 == false){
            setNavbarDisplay({display: ''})
        }
    }, [including1])
    
  return (
    <>
        <Container fluid>
            <Row>
                <Col xs={xsAmount} className='sideMenu-col' style={navbarDisplay}>
                    <SidebarMenu>
                        <SidebarMenu.Body style={adminNav}>
                            <SidebarMenu.Nav>
                                <SidebarMenu.Nav.Link className='logo-img' onClick={() => navigate('/')}>
                                    <img src='../logo.png' alt='logo' />
                                </SidebarMenu.Nav.Link>
                            </SidebarMenu.Nav>

                            <SidebarMenu.Nav className='main-link'>
                                <SidebarMenu.Nav.Link onClick={e => {e.preventDefault(); navigate('/admin/dashboard')}}>
                                    <SidebarMenu.Nav.Icon>
                                        <a><i class="fa-solid fa-gauge"></i></a>
                                    </SidebarMenu.Nav.Icon>

                                    <SidebarMenu.Nav.Title style={navDisplay}> Dashboard </SidebarMenu.Nav.Title>
                                </SidebarMenu.Nav.Link>
                            </SidebarMenu.Nav>

                            <SidebarMenu.Sub className='main-link'>
                                <SidebarMenu.Sub.Toggle>
                                    <SidebarMenu.Nav.Icon>
                                        <a><i class="fa-solid fa-align-justify"></i></a>
                                    </SidebarMenu.Nav.Icon>

                                    <SidebarMenu.Nav.Title style={navDisplay}> Application </SidebarMenu.Nav.Title>
                                </SidebarMenu.Sub.Toggle>

                                <SidebarMenu.Sub.Collapse>
                                    <SidebarMenu.Nav>
                                        <SidebarMenu.Nav.Link>
                                            <SidebarMenu.Nav.Icon>
                                                <a><i class="fa-solid fa-user-pen"></i></a>
                                            </SidebarMenu.Nav.Icon>

                                            <SidebarMenu.Nav.Title style={navDisplay}> Student Application </SidebarMenu.Nav.Title>
                                        </SidebarMenu.Nav.Link>
                                    </SidebarMenu.Nav>

                                    <SidebarMenu.Nav>
                                        <SidebarMenu.Nav.Link>
                                            <SidebarMenu.Nav.Icon>
                                                <a><i class="fa-solid fa-user"></i></a>
                                            </SidebarMenu.Nav.Icon>

                                            <SidebarMenu.Nav.Title style={navDisplay}> Print Application </SidebarMenu.Nav.Title>
                                        </SidebarMenu.Nav.Link>
                                    </SidebarMenu.Nav>

                                    <SidebarMenu.Nav>
                                        <SidebarMenu.Nav.Link>
                                            <SidebarMenu.Nav.Icon>
                                                <a><i class="fa-solid fa-money-check-dollar"></i></a>
                                            </SidebarMenu.Nav.Icon>

                                            <SidebarMenu.Nav.Title style={navDisplay}> Fee Collection Setup </SidebarMenu.Nav.Title>
                                        </SidebarMenu.Nav.Link>
                                    </SidebarMenu.Nav>
                                </SidebarMenu.Sub.Collapse>
                            </SidebarMenu.Sub>

                            <SidebarMenu.Sub className='main-link'>
                                <SidebarMenu.Sub.Toggle>
                                    <SidebarMenu.Nav.Icon>
                                        <a><i class="fa-solid fa-gear"></i></a>
                                    </SidebarMenu.Nav.Icon>

                                    <SidebarMenu.Nav.Title style={navDisplay}> Settings </SidebarMenu.Nav.Title>
                                </SidebarMenu.Sub.Toggle>

                                <SidebarMenu.Sub.Collapse>
                                    <SidebarMenu.Nav>
                                        <SidebarMenu.Nav.Link>
                                            <SidebarMenu.Nav.Icon>
                                                <a><i class="fa-solid fa-book"></i></a>
                                            </SidebarMenu.Nav.Icon>

                                            <SidebarMenu.Nav.Title style={navDisplay}> Subject Selection Setup </SidebarMenu.Nav.Title>
                                        </SidebarMenu.Nav.Link>
                                    </SidebarMenu.Nav>

                                    <SidebarMenu.Nav>
                                        <SidebarMenu.Nav.Link>
                                            <SidebarMenu.Nav.Icon>
                                                <a><i class="fa-solid fa-sheet-plastic"></i></a>
                                            </SidebarMenu.Nav.Icon>

                                            <SidebarMenu.Nav.Title style={navDisplay}> Spreadsheet Setup </SidebarMenu.Nav.Title>
                                        </SidebarMenu.Nav.Link>
                                    </SidebarMenu.Nav>
                                </SidebarMenu.Sub.Collapse>
                            </SidebarMenu.Sub>

                            <SidebarMenu.Nav className='main-link'>
                                <SidebarMenu.Nav.Link>
                                    <SidebarMenu.Nav.Icon>
                                        <a><i class="fa-solid fa-power-off"></i></a>
                                    </SidebarMenu.Nav.Icon>

                                    <SidebarMenu.Nav.Title style={navDisplay}> Log Out </SidebarMenu.Nav.Title>
                                </SidebarMenu.Nav.Link>
                            </SidebarMenu.Nav>

                            <SidebarMenu.Nav className='main-link'>
                                <SidebarMenu.Nav.Link onClick={() => {setNavToggle(!navToggle); setXsAmount(xsAmount == 3 ? 2 : 3)}}>
                                    <SidebarMenu.Nav.Icon>
                                        <a><i class={`fa-solid ${arrow}`}></i></a>
                                    </SidebarMenu.Nav.Icon>
                                </SidebarMenu.Nav.Link>
                            </SidebarMenu.Nav>
                        </SidebarMenu.Body>

                        
                        <SidebarMenu.Body style={studentNav}>
                            <SidebarMenu.Nav>
                                <SidebarMenu.Nav.Link className='logo-img' onClick={() => navigate('/')}>
                                    <img src='../logo.png' alt='logo' />
                                </SidebarMenu.Nav.Link>
                            </SidebarMenu.Nav>

                            <SidebarMenu.Nav className='main-link'>
                                <SidebarMenu.Nav.Link onClick={e => {e.preventDefault(); navigate('/dashboard')}}>
                                    <SidebarMenu.Nav.Icon>
                                        <a><i class="fa-solid fa-gauge"></i></a>
                                    </SidebarMenu.Nav.Icon>

                                    <SidebarMenu.Nav.Title style={navDisplay}> Dashboard </SidebarMenu.Nav.Title>
                                </SidebarMenu.Nav.Link>
                            </SidebarMenu.Nav>

                            <SidebarMenu.Nav className='main-link'>
                                <SidebarMenu.Nav.Link onClick={e => {e.preventDefault(); navigate('/')}}>
                                    <SidebarMenu.Nav.Icon>
                                        <a><i class="fa-solid fa-user-pen"></i></a>
                                    </SidebarMenu.Nav.Icon>

                                    <SidebarMenu.Nav.Title style={navDisplay}> Application Form </SidebarMenu.Nav.Title>
                                </SidebarMenu.Nav.Link>
                            </SidebarMenu.Nav>

                            <SidebarMenu.Nav className='main-link'>
                                <SidebarMenu.Nav.Link>
                                    <SidebarMenu.Nav.Icon>
                                        <a><i class="fa-solid fa-power-off"></i></a>
                                    </SidebarMenu.Nav.Icon>

                                    <SidebarMenu.Nav.Title style={navDisplay}> Log Out </SidebarMenu.Nav.Title>
                                </SidebarMenu.Nav.Link>
                            </SidebarMenu.Nav>

                            <SidebarMenu.Nav className='main-link'>
                                <SidebarMenu.Nav.Link onClick={() => {setNavToggle(!navToggle); setXsAmount(xsAmount == 3 ? 2 : 3)}}>
                                    <SidebarMenu.Nav.Icon>
                                        <a><i class={`fa-solid ${arrow}`}></i></a>
                                    </SidebarMenu.Nav.Icon>
                                </SidebarMenu.Nav.Link>
                            </SidebarMenu.Nav>
                        </SidebarMenu.Body>
                    </SidebarMenu>
                </Col>

                <Col xs={12-xsAmount}>
                    <Outlet />

                    
                </Col>
                
                <Col sx='12' className='p-0'>
                    <Footer/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Navebar
