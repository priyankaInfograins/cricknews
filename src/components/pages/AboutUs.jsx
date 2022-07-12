import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import about from '../../assets/images/about.jpg'
import check from '../../assets/images/check.png'
import social from '../../assets/images/social.png'
import time from '../../assets/images/time.png'
import BreadCrumbs from './subComponents/BreadCrumbs';
const AboutUs = () => {
    
    return (
        <>
            <div className="aboutUs_section">
               <BreadCrumbs heading="About Us" />

                <div className="about_content">
                    <Container>
                        <Row>
                            <Col lg={6} md={6}>
                                <div className="head">About Us</div>
                                <h2 className="sub_head">Lorem ipsum dolor sit, amet con</h2>
                                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sint ab, voluptatibus nemo est illum facere asperiores, perferendis ipsa assumenda suscipit aperiam quis aut, delectus aspernatur nesciunt vitae nostrum sequi?</div>

                                <ul>
                                    <li>Recommend-er systems</li>
                                    <li>Lead generation</li>
                                    <li>24/7 support</li>
                                </ul>
                            </Col>

                            <Col lg={6} md={6}>
                                <div className="aobut_img">
                                    <img src={about} alt="img" className='img-fluid' />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={12}>
                                <h2 className="our_service_head">Our Services</h2>
                            </Col>
                        </Row>

                        <div className="services">
                            <Row>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="service_one">
                                        <div className="icon">
                                            <img src={check} alt="img" className='img-fluid' width="100px" />
                                        </div>
                                        <div className="content">
                                            <h5>Heading Text</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="service_two">
                                        <div className="icon">
                                            <img src={social} alt="img" className='img-fluid' width="70px" />
                                        </div>
                                        <div className="content">
                                            <h5>Heading Text</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="service_three">
                                        <div className="icon">
                                            <img src={time} alt="img" className='img-fluid' width="90px" />
                                        </div>
                                        <div className="content">
                                            <h5>Heading Text</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>

                
                    
                    <div className="about_bg_img">
                    <Container fluid>
                        <Row>
                            <Col lg={12}>
                                <div className="content">
                                    <h2>Lorem ipsum doler sit amiert lorem impsum dol sit amet</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis et dolorem corrupti quisquam dolores nulla quia, aperiam aliquam amet </p>
                                    <button className='contact_btn'>contact us</button>
                                </div>
                            </Col>
                        </Row>
                        </Container>
                        </div>
                   
                
            </div>
        </>
    )
}



export default AboutUs;