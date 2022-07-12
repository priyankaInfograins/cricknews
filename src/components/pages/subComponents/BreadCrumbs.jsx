import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
const BreadCrumbs = (props) => {
    return (
        <>
            <div className="breadcrumbs_section">
                <Container>
                    <Row>
                        <Col lg={12} sm={12}>
                            <div className="breadcrumbs_banner_content">
                                <div className="breadcrumbs_title">{props.heading}</div>
                                <div className="breadcrumbs_text">Home &nbsp;&nbsp;  » &nbsp;&nbsp; <span>{props.heading}</span></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}



export default BreadCrumbs;