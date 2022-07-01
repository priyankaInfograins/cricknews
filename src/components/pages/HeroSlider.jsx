import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import Slide1 from '../../assets/images/slider-new-1-1.jpg';
// import Slide2 from '../../assets/images/slider-new-2-1.jpg';
// import Slide3 from '../../assets/images/slider-new-3-1.jpg';

import MatchList from '../../api/matchList'

export default function HeroSlider() {

    console.log("MatchList", MatchList);
    return (
        <>
            <section className='hero_section_slide_container'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={6}>
                            <div className='hero_head_div'>
                                <h1>Heading Text</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit rem incidunt porro minima nihil. Corporis cupiditate repellendus possimus tempore at provident odit, a architecto doloremque dolorum, quas fuga quibusdam! Laudantium?</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='hero_bottom'>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className='upcoming_matches'>
                                <h2>Upcoming Matches</h2>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='match_name'>
                                <h6>IND VS ENG</h6>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='match_name'>
                                <h6>IND VS ENG</h6>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='match_name'>
                                <h6>IND VS ENG</h6>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
