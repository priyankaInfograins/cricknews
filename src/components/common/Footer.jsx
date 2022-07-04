import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import {FiPhone} from 'react-icons/fi'
import {HiOutlineMailOpen, HiOutlineLocationMarker} from 'react-icons/hi'
import {FaFacebookF, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'
export default function Footer(){
    return(
        <>
        <div className='footer'>
           <Container>
            <Row>
            <Col lg={3} md={6} sm={12}>
                <div className="footer_about">
                    <div className="footer_logo">
                        <h3>Crick<span>News</span></h3>
                    </div>
                    <div className="footer_text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti in dolore nemo beatae quisquam! Iste porro, cum vitae quia sint 
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
                <div className="useful_links">
                    <div className="link_header">USEFUL LINKS</div>

                    <div className="links_text">
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/'>News</a></li>
                            <li><a href='/'>Blogs</a></li>
                            <li><a href='/'>FAQs</a></li>
                        </ul>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
                <div className="contact_us">
                    <div className="header">CONTACT US</div>
                    <div className="contact_link">
                        <ul>
                            <li><a href='/'><span><HiOutlineLocationMarker/></span><span>Indore</span></a></li>
                            <li><a href='/'><span><FiPhone/></span><span>+91 999 888 7771</span></a></li>
                            <li><a href='/'><span><HiOutlineMailOpen/></span><span>demo@gmail.com</span></a></li>
                        </ul>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
                <div className="latest_news">
                    <div className="header">GET LATEST NEWS!</div>
                    <p>Lorem ipsome dolar sit amiet, loreame ipsum</p>
                    <div className="input_box">
                        <input type="email" className='form-control' placeholder='Enter Your Email' />
                        <button className='send_button'>SEND</button>
                    </div>
                </div>
            </Col>
            </Row>
           </Container>
        </div>
        <div className="bottom_footer">
            <Container>
                <Row>
                    <Col lg={12}>
                      <div className="bottom_footer_content">
                      <div className="copyright_text">CrickNews@. All Rights Reseverd.</div>
                        <div className="social_links">
                            <ul>
                                <li><a href='/'><span><FaFacebookF/></span></a></li>
                                <li><a href='/'><span><FaInstagram/></span></a></li>
                                <li><a href='/'><span><FaYoutube/></span></a></li>
                                <li><a href='/'><span><FaTwitter/></span></a></li>
                            </ul>
                        </div>
                      </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}


 