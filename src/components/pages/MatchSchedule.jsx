import React from 'react';
import BreadCrumbs from './subComponents/BreadCrumbs';
import { Container, Row, Col, Table } from 'react-bootstrap'
const MatchSchedule = () => {
    return (
        <>
            <div className="matchShedule_section">
                <BreadCrumbs heading="Match Schedule" />

                <div className="matchSchedule_content">
                    <Container>
                        <Row className='text-center my-5'>
                            <Col lg={12}>
                                <h1>Upcomming Match List</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12}>
                               <div className="matchSchedule_table mb-5">
                               <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>DATE</th>
                                            <th>DAY</th>
                                            <th>MATCH</th>
                                            <th>VENUE</th>
                                            <th>TIME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>11-July-2022</td>
                                            <td>Monday</td>
                                            <td>India V/S Sri Lanka (1 st ODI)</td>
                                            <td>Ahmedabad</td>
                                            <td>3:30PM</td>
                                        </tr>
                                        <tr>
                                        <td>11-July-2022</td>
                                            <td>Monday</td>
                                            <td>India V/S Sri Lanka (1 st ODI)</td>
                                            <td>Ahmedabad</td>
                                            <td>3:30PM</td>
                                        </tr>
                                        <tr>
                                        <td>11-July-2022</td>
                                            <td>Monday</td>
                                            <td>India V/S Sri Lanka (1 st ODI)</td>
                                            <td>Ahmedabad</td>
                                            <td>3:30PM</td>
                                        </tr>
                                        <tr>
                                        <td>11-July-2022</td>
                                            <td>Monday</td>
                                            <td>India V/S Sri Lanka (1 st ODI)</td>
                                            <td>Ahmedabad</td>
                                            <td>3:30PM</td>
                                        </tr>
                                        <tr>
                                        <td>11-July-2022</td>
                                            <td>Monday</td>
                                            <td>India V/S Sri Lanka (1 st ODI)</td>
                                            <td>Ahmedabad</td>
                                            <td>3:30PM</td>
                                        </tr>
                                    </tbody>
                                </Table>
                               </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default MatchSchedule;