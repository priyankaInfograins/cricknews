import React from 'react'
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Header() {
    
    return (
      
        <>
            <header>
                <Navbar variant='dark' expand="lg" className='head_nav'>
                    <Container fluid>
                        <Navbar.Brand><Link to="/">CrickNews</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="m-auto my-2 my-lg-0"
                                style={{ maxHeight: '250px' }}
                                navbarScroll
                            >
                                <Nav.Link><Link to="/live_score">Live Score</Link></Nav.Link>
                                <Nav.Link><Link to="/match_schedule">Match Schedule</Link></Nav.Link>
                                <Nav.Link href="#action3">Archives</Nav.Link>
                                <Nav.Link><Link to="/news">News</Link></Nav.Link>
                                <Nav.Link><Link to="/gallery">Gallery</Link></Nav.Link>
                                <Nav.Link><Link to="/team">Teams</Link></Nav.Link>
                                <Nav.Link><Link to="/about_us">About Us</Link></Nav.Link>
                                <Nav.Link><Link to="/contact_us">Contact Us</Link></Nav.Link>
                            </Nav>
                            {/* <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-light">Search</Button>
                            </Form> */}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}
