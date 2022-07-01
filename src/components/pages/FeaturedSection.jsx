import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FeaturedMatch from './subComponents/FeaturedMatch'
import LatestNews from './subComponents/LatestNews'
import NewsBlog from './subComponents/NewsBlog'
export default function FeaturedSection() {
    return (
        <>
            <section className='featuredSection'>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <LatestNews/>
                        </Col>
                        <Col lg={6}>
                            <NewsBlog/>
                        </Col>
                        <Col lg={3}>
                            <FeaturedMatch/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
