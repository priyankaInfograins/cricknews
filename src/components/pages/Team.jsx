import React from 'react';
import BreadCrumbs from './subComponents/BreadCrumbs';
import {Container, Row, Col} from 'react-bootstrap'
const Team = () => {
    return(
        <>
            <div className="team_section">
                <BreadCrumbs heading = "Our Team"/>

                <div className="team_content">
                    <Container>
                        <Row className='my-3'>
                            <Col lg={4} md={6} className="my-4">
                                <div className="team_box">
                                    <div className="team_img">
                                        <img src="https://seeklogo.com/images/C/cricket-logo-BAD6D70A64-seeklogo.com.png" alt="team1" className='img-fluid' />
                                    </div>
                                    <div className="team_description">
                                        <div className="team_name">Team Name</div>
                                        <div className="team_country_name">India</div>
                                        <div className="team_para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae eum iusto quaerat quod quam at enim magni accusantium cumque .</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="my-4">
                                <div className="team_box">
                                    <div className="team_img">
                                        <img src="https://seeklogo.com/images/C/cricket-logo-BAD6D70A64-seeklogo.com.png" alt="team1" className='img-fluid' />
                                    </div>
                                    <div className="team_description">
                                        <div className="team_name">Team Name</div>
                                        <div className="team_country_name">India</div>
                                        <div className="team_para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae eum iusto quaerat quod quam at enim magni accusantium cumque .</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="my-4">
                                <div className="team_box">
                                    <div className="team_img">
                                        <img src="https://seeklogo.com/images/C/cricket-logo-BAD6D70A64-seeklogo.com.png" alt="team1" className='img-fluid' />
                                    </div>
                                    <div className="team_description">
                                        <div className="team_name">Team Name</div>
                                        <div className="team_country_name">India</div>
                                        <div className="team_para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae eum iusto quaerat quod quam at enim magni accusantium cumque .</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="my-4">
                                <div className="team_box">
                                    <div className="team_img">
                                        <img src="https://seeklogo.com/images/C/cricket-logo-BAD6D70A64-seeklogo.com.png" alt="team1" className='img-fluid' />
                                    </div>
                                    <div className="team_description">
                                        <div className="team_name">Team Name</div>
                                        <div className="team_country_name">India</div>
                                        <div className="team_para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae eum iusto quaerat quod quam at enim magni accusantium cumque .</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="my-4">
                                <div className="team_box">
                                    <div className="team_img">
                                        <img src="https://seeklogo.com/images/C/cricket-logo-BAD6D70A64-seeklogo.com.png" alt="team1" className='img-fluid' />
                                    </div>
                                    <div className="team_description">
                                        <div className="team_name">Team Name</div>
                                        <div className="team_country_name">India</div>
                                        <div className="team_para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae eum iusto quaerat quod quam at enim magni accusantium cumque .</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="my-4">
                                <div className="team_box">
                                    <div className="team_img">
                                        <img src="https://seeklogo.com/images/C/cricket-logo-BAD6D70A64-seeklogo.com.png" alt="team1" className='img-fluid' />
                                    </div>
                                    <div className="team_description">
                                        <div className="team_name">Team Name</div>
                                        <div className="team_country_name">India</div>
                                        <div className="team_para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae eum iusto quaerat quod quam at enim magni accusantium cumque .</div>
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



export default Team;