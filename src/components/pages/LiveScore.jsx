import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Tab, Accordion, Tabs, Table, Button, Collapse } from 'react-bootstrap';
import { MatchList } from '../../assets/js/matchList'
import BreadCrumbs from './subComponents/BreadCrumbs';


const LiveScore = () => {
    const [liveData, setLiveData] = useState([])
    var data = MatchList
    console.log("data", data)

    //useEffect(()=>{
        //const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '75feb6c1dfmshd03c88ff0f818b7p1caed4jsnf4de6a9b00bc',
    //         'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    //     }
    // };
    
    // fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent', options)
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log("response",response)
    //         setLiveData(response)
    //     })
    //     .catch(err => console.error(err));
    // })
    // console.log("liveData", liveData)
    return (
        <>
            <div className="liveScore_section">
                <BreadCrumbs heading = "Live Score"  />

                <div className="liveScore_data">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Tabs
                                    defaultActiveKey={0}
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                >
                                    {data.typeMatches.map((e, i) => {

                                        var matchType = e.matchType
                                        var seriesMatches = e.seriesMatches
                                        return (

                                            <Tab eventKey={i} title={matchType}>

                                                {seriesMatches.map((e) => {
                                                    return (
                                                        <>
                                                            {e.seriesAdWrapper ?
                                                                <div>

                                                                    <Accordion>
                                                                        <Accordion.Item eventKey={i} key={e.id}>
                                                                            <Accordion.Header>
                                                                                {e.seriesAdWrapper.seriesName}
                                                                            </Accordion.Header>
                                                                            <Accordion.Body>

                                                                                <div className="row">

                                                                                    <div className="col-md-12 p-3" style={{ border: "1px solid gray" }}>
                                                                                        <h5 style={{ color: "#00adff" }}>Match Overview</h5>
                                                                                        <Table responsive>
                                                                                            <thead>
                                                                                                <tr>
                                                                                                    <th>Match Desc</th>
                                                                                                    <th>Match Format</th>
                                                                                                    <th>State</th>
                                                                                                    <th>Status</th>
                                                                                                    <th>Team 1</th>
                                                                                                    <th>Team 2</th>
                                                                                                    <th>Venue</th>
                                                                                                    <th style={{ color: "#00adff" }}>Match Score</th>
                                                                                                </tr>
                                                                                            </thead>
                                                                                        </Table>


                                                                                        {e.seriesAdWrapper.matches.map((e, index) => {

                                                                                            return (
                                                                                                <div>
                                                                                                    <Table responsive hover>

                                                                                                        <tbody>
                                                                                                            <tr key={e.id}>
                                                                                                                <td>{e.matchInfo.matchDesc}</td>
                                                                                                                <td>{e.matchInfo.matchFormat}</td>
                                                                                                                <td>{e.matchInfo.state}</td>
                                                                                                                <td>{e.matchInfo.status}</td>
                                                                                                                <td>{e.matchInfo.team1.teamName}</td>
                                                                                                                <td>{e.matchInfo.team2.teamName}</td>
                                                                                                                <td>{e.matchInfo.venueInfo.ground}, {e.matchInfo.venueInfo.city}</td>
                                                                                                                <td>
                                                                                                                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls="collapseExample">
                                                                                                                        View
                                                                                                                    </button>
                                                                                                                </td>

                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </Table>
                                                                                                    <div>

                                                                                                        <div className="collapse" id={`collapse${index}`}>
                                                                                                            <div className="card card-body">
                                                                                                                <Container>
                                                                                                                    <Row className='justify-content-center'>
                                                                                                                        <Col lg={12}>
                                                                                                                            <div className='text-center border p-3'  style={{backgroundColor:"#6c757d0a"}}>
                                                                                                                                <h6 className='mb-3' style={{color: "#0048b3",fontSize:"18px"}}>Team 1 Score</h6>
                                                                                                                                <Row className="justify-content-center">
                                                                                                                                    <Col lg={6}>
                                                                                                                                        <Table bordered>
                                                                                                                                            <thead className='text-center'>
                                                                                                                                                <tr>
                                                                                                                                                    <th colSpan={3} >Inngs 1</th>
                                                                                                                                                </tr>
                                                                                                                                                <tr>
                                                                                                                                                    <th>Overs</th>
                                                                                                                                                    <th>Runs</th>
                                                                                                                                                    <th>Wickets</th>

                                                                                                                                                </tr>
                                                                                                                                            </thead>
                                                                                                                                            <tbody className="text-center">
                                                                                                                                                {e.matchScore ?
                                                                                                                                                    <tr key={e.id}>
                                                                                                                                                        <td>{e.matchScore.team1Score.inngs1.overs}</td>
                                                                                                                                                        <td>{e.matchScore.team1Score.inngs1.runs}</td>
                                                                                                                                                        <td>{e.matchScore.team1Score.inngs1.wickets}</td>
                                                                                                                                                    </tr>
                                                                                                                                                    :
                                                                                                                                                    <tr></tr>
                                                                                                                                                }

                                                                                                                                            </tbody>
                                                                                                                                        </Table>
                                                                                                                                    </Col>
                                                                                                                                    {e.matchScore ?
                                                                                                                                        (
                                                                                                                                            e.matchScore.team1Score.inngs2 ?
                                                                                                                                                <Col lg={6}>

                                                                                                                                                    <Table bordered>
                                                                                                                                                        <thead className='text-center'>
                                                                                                                                                            <tr>
                                                                                                                                                                <th colSpan={3} >Inngs 2</th>
                                                                                                                                                            </tr>
                                                                                                                                                            <tr>
                                                                                                                                                                <th>Overs</th>
                                                                                                                                                                <th>Runs</th>
                                                                                                                                                                <th>Wickets</th>

                                                                                                                                                            </tr>
                                                                                                                                                        </thead>
                                                                                                                                                        <tbody className="text-center">

                                                                                                                                                            <tr key={e.id}>
                                                                                                                                                                <td>{ e.matchScore.team1Score.inngs2.overs }</td>
                                                                                                                                                                <td>{ e.matchScore.team1Score.inngs2.runs }</td>
                                                                                                                                                                <td>{ e.matchScore.team1Score.inngs2.wickets }</td>
                                                                                                                                                            </tr>


                                                                                                                                                        </tbody>
                                                                                                                                                    </Table>

                                                                                                                                                </Col>
                                                                                                                                                :
                                                                                                                                                " "
                                                                                                                                        )

                                                                                                                                        :
                                                                                                                                        " "
                                                                                                                                    }
                                                                                                                                </Row>
                                                                                                                            </div>
                                                                                                                        </Col>
                                                                                                                    </Row>

                                                                                                                    {e.matchScore ?
                                                                                                                        (e.matchScore.team2Score ?
                                                                                                                            <Row className='justify-content-center mt-4'>
                                                                                                                                <Col lg={12}>
                                                                                                                                    <div className='text-center border p-3' style={{backgroundColor:"#6c757d0a"}}>
                                                                                                                                        <h6 className='mb-3'  style={{color: "#0048b3",fontSize:"18px"}}>Team 2 Score</h6>
                                                                                                                                        <Row className='justify-content-center'>
                                                                                                                                            <Col lg={6}>
                                                                                                                                                <Table bordered>
                                                                                                                                                    <thead className='text-center'>
                                                                                                                                                        <tr>
                                                                                                                                                            <th colSpan={3} >Inngs 1</th>
                                                                                                                                                        </tr>
                                                                                                                                                        <tr>
                                                                                                                                                            <th>Overs</th>
                                                                                                                                                            <th>Runs</th>
                                                                                                                                                            <th>Wickets</th>

                                                                                                                                                        </tr>
                                                                                                                                                    </thead>
                                                                                                                                                    <tbody className="text-center">
                                                                                                                                                        {e.matchScore ?
                                                                                                                                                            <tr key={e.id}>
                                                                                                                                                                <td>{e.matchScore.team2Score ? e.matchScore.team2Score.inngs1.overs : " "}</td>
                                                                                                                                                                <td>{e.matchScore.team2Score ? e.matchScore.team2Score.inngs1.runs : ""}</td>
                                                                                                                                                                <td>{e.matchScore.team2Score ? e.matchScore.team2Score.inngs1.wickets : ""}</td>
                                                                                                                                                            </tr>
                                                                                                                                                            :
                                                                                                                                                            <tr></tr>
                                                                                                                                                        }

                                                                                                                                                    </tbody>
                                                                                                                                                </Table>
                                                                                                                                            </Col>
                                                                                                                                            {e.matchScore ?
                                                                                                                                                (e.matchScore.team2Score ? 
                                                                                                                                                    ( e.matchScore.team2Score.inngs2 ? 
                                                                                                                                                        <Col lg={6}>
                                                                                                                                                        <Table bordered>
                                                                                                                                                            <thead className='text-center'>
                                                                                                                                                                <tr>
                                                                                                                                                                    <th colSpan={3} >Inngs 2</th>
                                                                                                                                                                </tr>
                                                                                                                                                                <tr>
                                                                                                                                                                    <th>Overs</th>
                                                                                                                                                                    <th>Runs</th>
                                                                                                                                                                    <th>Wickets</th>

                                                                                                                                                                </tr>
                                                                                                                                                            </thead>
                                                                                                                                                            <tbody className="text-center">

                                                                                                                                                                <tr key={e.id}>
                                                                                                                                                                    <td>{ e.matchScore.team2Score.inngs2.overs}</td>
                                                                                                                                                                    <td>{ e.matchScore.team2Score.inngs2.runs}</td>
                                                                                                                                                                    <td>{ e.matchScore.team2Score.inngs2.wickets}</td>
                                                                                                                                                                </tr>


                                                                                                                                                            </tbody>
                                                                                                                                                        </Table>
                                                                                                                                                    </Col>

                                                                                                                                                        :
                                                                                                                                                        " "

                                                                                                                                                )
                                                                                                                                                   
                                                                                                                                                    :
                                                                                                                                                    " "
                                                                                                                                                )

                                                                                                                                                :
                                                                                                                                                " "
                                                                                                                                            }
                                                                                                                                        </Row>
                                                                                                                                    </div>
                                                                                                                                </Col>
                                                                                                                            </Row>
                                                                                                                            :
                                                                                                                            <Row></Row>
                                                                                                                        )
                                                                                                                        :
                                                                                                                        " "
                                                                                                                    }

                                                                                                                </Container>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            )
                                                                                        })}
                                                                                    </div>
                                                                                </div>

                                                                            </Accordion.Body>
                                                                        </Accordion.Item>
                                                                    </Accordion>




                                                                </div>

                                                                :
                                                                <div></div>
                                                            }


                                                        </>

                                                    )

                                                })}


                                            </Tab>
                                        )
                                    })}

                                </Tabs>
                            </Col>
                        </Row>
                    </Container>





                </div>
            </div>
        </>
    )
}



export default LiveScore;