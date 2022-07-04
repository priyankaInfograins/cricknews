import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { FaBuilding, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const ContactUs = () => {
    return (
        <>
            <div className="contactUs_section">
                <div className="contact_banner">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="contact_banner_content">
                                    <div className="contact_title">Contact Us</div>
                                    <div className="contact_text">Home &nbsp;&nbsp;  » &nbsp;&nbsp; <span>Contact Us</span></div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="contact_box">
                    <Container>
                        <Row>
                            <Col lg={4} md={4} sm={12}>
                                <div className="address">
                                    <div className="icon"><FaBuilding /></div>
                                    <div className="title">Address:</div>
                                    <div className="text">Atulya IT Park, Indore Madhya Pradesh</div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12}>
                                <div className="email">
                                    <div className="icon"><MdEmail /></div>
                                    <div className="title">Email:</div>
                                    <div className="text">demo@gmail.com</div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12}>
                                <div className="phone">
                                    <div className="icon"><FaPhoneAlt /></div>
                                    <div className="title">Phone:</div>
                                    <div className="text">+91 999 888 7771</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="contact_div">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="contact_head">Contact Us</div>
                                <div className="contact_para">Let's Get In Touch</div>
                            </Col>
                        </Row>

                        <Row className='py-5'>
                            <Col lg={12} md={12}>
                                <div className="contact_bg">
                                <div className="contact_img">

</div>
{/* </Col>
<Col lg={6} md={6} sm={12}> */}
<div className="contact_form">
    <div className="input_field">
        <input type="text" placeholder='Name' className='form-control' />
    </div>

    <div className="input_field">
        <input type="email" placeholder='Email' className='form-control' />
    </div>

    <div className="input_field">
        <input type="number" placeholder='Phone' className='form-control' />
    </div>

    <div className="input_field">
        <textarea type="text" placeholder='Message' className='form-control' rows={4} />
    </div>

    <div className="contact_button">
        <button>SEND</button>
    </div>
</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        </>
    )
}



export default ContactUs;