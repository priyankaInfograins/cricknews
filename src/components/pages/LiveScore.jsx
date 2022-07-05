import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab, Accordion, Tabs, Table, Button, Collapse } from 'react-bootstrap';
import { MatchList } from '../../assets/js/matchList'

const LiveScore = () => {
    var data = MatchList
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="liveScore_section">
                <div className="liveScore_banner">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="liveScore_banner_content">
                                    <div className="liveScore_title">Live Score</div>
                                    {/* <div className="liveScore_text">Home &nbsp;&nbsp;  » &nbsp;&nbsp; <span>Live Score</span></div> */}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="liveScore_data">
                    <Container>


                        <Row>
                            <Col lg={12}>
                                <Tabs
                                    defaultActiveKey="International"
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                >
                                    {data.typeMatches.map((e, i) => {

                                        var matchType = e.matchType
                                        var seriesMatches = e.seriesMatches
                                        var seriesAdWrapper

                                        console.log("seriesMatches", seriesMatches, i)
                                        return (

                                            <Tab eventKey={i} title={matchType}>

                                                {seriesMatches.map((e) => {
                                                    return (
                                                        <>
                                                            {e.seriesAdWrapper ?
                                                                <div>

                                                                    <Accordion>
                                                                        <Accordion.Item eventKey={i}>
                                                                            <Accordion.Header>


                                                                                {e.seriesAdWrapper.seriesName}

                                                                            </Accordion.Header>
                                                                            <Accordion.Body>

                                                                                <div className="row">

                                                                                    <div className="col-md-12" style={{border:"1px solid gray"}}>
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
                                                                                                    <th>venueInfo</th>
                                                                                                    <th style={{ color: "#00adff" }}>Match Score</th>
                                                                                                </tr>
                                                                                            </thead>
                                                                                        </Table>



                                                                                        {e.seriesAdWrapper.matches.map((e, index) => {
                                                                                            console.log("matchScore============ index", e.matchScore)

                                                                                            return (
                                                                                                <div>
                                                                                                    <Table responsive >

                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td>{e.matchInfo.matchDesc}</td>
                                                                                                                <td>{e.matchInfo.matchFormat}</td>
                                                                                                                <td>{e.matchInfo.state}</td>
                                                                                                                <td>{e.matchInfo.status}</td>
                                                                                                                <td>{e.matchInfo.team1.teamName}</td>
                                                                                                                <td>{e.matchInfo.team2.teamName}</td>
                                                                                                                <td>{e.matchInfo.venueInfo.ground}, {e.matchInfo.venueInfo.city}</td>
                                                                                                                <td>

                                                                                                                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls="collapseExample">
                                                                                                                        View
                                                                                                                    </button>

                                                                                                                </td>

                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </Table>
                                                                                                    <div>

                                                                                                        <div class="collapse" id={`collapse${index}`}>
                                                                                                            <div class="card card-body">
                                                                                                            <Container>
                                                                                        <Row className='justify-content-center'>
                                                                                            <Col lg={12}>
                                                                                                <Table bordered>
                                                                                                    <thead className="text-center">
                                                                                                        <tr>
                                                                                                            <th colSpan={6} >Team 1 Score</th>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <th colSpan={3} >Inngs 1</th>
                                                                                                            <th colSpan={3} >Inngs 2</th>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <th >Overs</th>
                                                                                                            <th>Runs</th>
                                                                                                            <th>Wickets</th>
                                                                                                            <th>Overs</th>
                                                                                                            <th>Runs</th>
                                                                                                            <th>Wickets</th>
                                                                                                        </tr>

                                                                                                    </thead>
                                                                                                    <tbody className="text-center">
                                                                                                        {e.matchScore ? 
                                                                                                            <tr>
                                                                                                                <td>{e.matchScore.team1Score.inngs1.overs}</td>
                                                                                                                <td>{e.matchScore.team1Score.inngs1.runs}</td>
                                                                                                                <td>{e.matchScore.team1Score.inngs1.wickets}</td>
                                                                                                                <td>{e.matchScore.team1Score.inngs2 ?  e.matchScore.team1Score.inngs2.overs : " "}</td>
                                                                                                                <td>{e.matchScore.team1Score.inngs2 ? e.matchScore.team1Score.inngs2.runs : " "}</td>
                                                                                                                <td>{e.matchScore.team1Score.inngs2 ?  e.matchScore.team1Score.inngs2.wickets : " "}</td>
                                                                                                            </tr>
                                                                                                            : 
                                                                                                            <div></div>
                                                                                                        }
                                                                                                   
                                                                                                    </tbody>
                                                                                                </Table>
                                                                                            </Col>
                                                                                        </Row>
                                                                                     
                                                                                       
                                                                                        <Row className='justify-content-center'>
                                                                                        <Col lg={12}>
                                                                                            <Table bordered>
                                                                                                <thead className="text-center">
                                                                                                    <tr>
                                                                                                        <th colSpan={6} >Team 2 Score</th>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <th colSpan={3} >Inngs 1</th>
                                                                                                        <th colSpan={3} >Inngs 2</th>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <th >Overs</th>
                                                                                                        <th>Runs</th>
                                                                                                        <th>Wickets</th>
                                                                                                        <th>Overs</th>
                                                                                                        <th>Runs</th>
                                                                                                        <th>Wickets</th>
                                                                                                    </tr>

                                                                                                </thead>
                                                                                                <tbody className="text-center">
                                                                                                    {e.matchScore ? 
                                                                                                        <tr>
                                                                                                            <td>{e.matchScore.team2Score ? e.matchScore.team2Score.inngs1.overs : " "}</td>
                                                                                                            <td>{e.matchScore.team2Score ? e.matchScore.team2Score.inngs1.runs : ""}</td>
                                                                                                            <td>{e.matchScore.team2Score ? e.matchScore.team2Score.inngs1.wickets : ""}</td>
                                                                                                            {/* <td>{e.matchScore.team2Score ? (e.matchScore.team2Score.inngs2 ?  e.matchScore.team1Score.inngs2.overs : " ") : ""}</td>
                                                                                                            <td>{e.matchScore.team2Score ? (e.matchScore.team2Score.inngs2 ? e.matchScore.team1Score.inngs2.runs : " ") : ""}</td>
                                                                                                            <td>{e.matchScore.team2Score ? (e.matchScore.team2Score.inngs2 ?  e.matchScore.team1Score.inngs2.wickets : " ") : ""}</td> */}
                                                                                                        </tr>
                                                                                                        : 
                                                                                                        <div></div>
                                                                                                    }
                                                                                               
                                                                                                </tbody>
                                                                                            </Table>
                                                                                        </Col>
                                                                                    </Row>
                                                                                       
                                                                                      
                                                                                    </Container>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            )
                                                                                        })}



                                                                                    </div>









                                                                                    



                                                                                    {/* <div className="col-md-12">
                                                                                        <h5 style={{ color: "#00adff" }}>Match Score</h5>


                                                                                        {e.seriesAdWrapper.matches.map((e) => {
                                                                                            return (
                                                                                                <div className="match_score_div" style={{ border: "1px solid gray", padding: "10px", margin: "10px 20px" }}>
                                                                                                    {e.matchScore ?
                                                                                                        <div>
                                                                                                            <h6>Team1 Score </h6>
                                                                                                            <div className='' style={{ display: "flex", justifyContent: "space-around" }}>
                                                                                                                <div className="team_score1">
                                                                                                                    <p><b>inngs1 :-</b></p>
                                                                                                                    <p><b>overs</b>: {e.matchScore.team1Score.inngs1.overs}</p>
                                                                                                                    <p><b>runs</b>:{e.matchScore.team1Score.inngs1.runs}</p>
                                                                                                                    <p><b>wickets</b>:{e.matchScore.team1Score.inngs1.wickets}</p>
                                                                                                                </div>
                                                                                                                <div className="team_score1">
                                                                                                                    <p><b>inngs2 :-</b></p>
                                                                                                                    <p><b>overs</b>: {e.matchScore.team1Score.inngs1.overs}</p>
                                                                                                                    <p><b>runs</b>:{e.matchScore.team1Score.inngs1.runs}</p>
                                                                                                                    <p><b>wickets</b>:{e.matchScore.team1Score.inngs1.wickets}</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        :
                                                                                                        <div></div>
                                                                                                    }

                                                                                                    {e.matchScore ?
                                                                                                        <div>
                                                                                                            <h6>Team2 Score </h6>
                                                                                                            <div className='' style={{ display: "flex", justifyContent: "space-around" }}>
                                                                                                                <div className="team_score2">
                                                                                                                    <p><b>inngs1 :-</b></p>
                                                                                                                    <p><b>overs</b>:{e.matchScore.team2Score ? e.matchScore.team2Score.inngs1.overs : " "}</p>
                                                                                                                    <p><b>runs</b>:{e.matchScore.team2Score ? e.matchScore.team1Score.inngs1.runs : " "}</p>
                                                                                                                    <p><b>wickets</b>:{e.matchScore.team2Score ? e.matchScore.team1Score.inngs1.wickets : " "}</p>
                                                                                                                </div>
                                                                                                                <div className="team_score2">
                                                                                                                    <p><b>inngs2 :-</b></p>
                                                                                                                    <p><b>overs</b>:{e.matchScore.team2Score ? e.matchScore.team2Score.inngs1.overs : " "}</p>
                                                                                                                    <p><b>runs</b>:{e.matchScore.team2Score ? e.matchScore.team1Score.inngs1.runs : " "}</p>
                                                                                                                    <p><b>wickets</b>:{e.matchScore.team2Score ? e.matchScore.team1Score.inngs1.wickets : " "}</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        :
                                                                                                        <div></div>
                                                                                                    }

                                                                                                </div>
                                                                                            )
                                                                                        })}
                                                                                    </div> */}
                                                                                    {/* <div className="col-md-12">
                                                                                <h5>Match Score</h5>
                                                                                    <div className="match_score_div" style={{border:"1px solid gray", padding:"10px", margin:"10px 20px"}}>
                                                                                        {e.matchScore ? 
                                                                                         <div>
                                                                                            <h6>Team1 Score </h6>
                                                                                        <div className='' style={{display:"flex", justifyContent:"space-around"}}>
                                                                                            <div className="team_score1">
                                                                                            <p><b>inngs1 :-</b></p>
                                                                                            <p><b>overs</b>: {e.matchScore.team1Score.inngs1.overs}</p>
                                                                                            <p><b>runs</b>:{e.matchScore.team1Score.inngs1.runs}</p>
                                                                                            <p><b>wickets</b>:{e.matchScore.team1Score.inngs1.wickets}</p>
                                                                                        </div>
                                                                                        <div className="team_score1">
                                                                                        <p><b>inngs2 :-</b></p>
                                                                                            <p><b>overs</b>: {e.matchScore.team1Score.inngs1.overs}</p>
                                                                                            <p><b>runs</b>:{e.matchScore.team1Score.inngs1.runs}</p>
                                                                                            <p><b>wickets</b>:{e.matchScore.team1Score.inngs1.wickets}</p>
                                                                                        </div>
                                                                                        </div>
                                                                                         </div>
                                                                                        : 
                                                                                        <div></div>
                                                                                        }
                                                                                       
                                                                                        {e.matchScore ? 
                                                                                         <div>
                                                                                            <h6>Team2 Score </h6>
                                                                                        <div className='' style={{display:"flex", justifyContent:"space-around"}}>
                                                                                            <div className="team_score2">
                                                                                            <p><b>inngs1 :-</b></p>
                                                                                            <p><b>overs</b>:{e.matchScore.team2Score ? e.matchScore.team2Score.inngs1.overs: " " }</p>
                                                                                            <p><b>runs</b>:{e.matchScore.team2Score ? e.matchScore.team1Score.inngs1.runs: " " }</p>
                                                                                            <p><b>wickets</b>:{e.matchScore.team2Score ? e.matchScore.team1Score.inngs1.wickets: " " }</p>
                                                                                        </div>
                                                                                        <div className="team_score2">
                                                                                        <p><b>inngs2 :-</b></p>
                                                                                        <p><b>overs</b>:{e.matchScore.team2Score ? e.matchScore.team2Score.inngs1.overs: " " }</p>
                                                                                            <p><b>runs</b>:{e.matchScore.team2Score ? e.matchScore.team1Score.inngs1.runs: " " }</p>
                                                                                            <p><b>wickets</b>:{e.matchScore.team2Score ? e.matchScore.team1Score.inngs1.wickets: " " }</p>
                                                                                        </div>
                                                                                        </div>
                                                                                         </div>
                                                                                        : 
                                                                                        <div></div>
                                                                                        }
                                                                                       
                                                                                    </div>
                                                                                </div> */}
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