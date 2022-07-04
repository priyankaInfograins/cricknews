import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab, Accordion, Tabs } from 'react-bootstrap';
import { MatchList } from '../../assets/js/matchList'

const LiveScore = () => {
    var data = MatchList
  
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
                                                                                
                                                                            {e.seriesAdWrapper.matches.map((e)=>{
                                                                              console.log("matchScore============", e.matchScore)
                                                                            //   var matchScore = e.matchScore
                                                                            //   var data = Object.values(matchScore)
                                                                            //   console.log("matchScore============", data)
                                                                               return(
                                                                                <div className="row">
                                                                                <div className="col-md-6">
                                                                                    <div className="match_info_div"  style={{border:"1px solid gray", padding:"10px", margin:"10px 20px", width:"70%"}}>
                                                                                    <p><b>matchDesc</b>: {e.matchInfo.matchDesc}</p>
                                                                                    <p><b>matchFormat</b>: {e.matchInfo.matchFormat}</p>
                                                                                    <p><b>state</b>: {e.matchInfo.state}</p>
                                                                                    <p><b>status</b>: {e.matchInfo.status}</p>
                                                                                    <p><b>team1</b>: {e.matchInfo.team1.teamName}</p>
                                                                                    <p><b>team2</b>: {e.matchInfo.team2.teamName}</p>
                                                                                    <p><b>venueInfo</b>:  {e.matchInfo.venueInfo.ground}, {e.matchInfo.venueInfo.city}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                    <div className="match_score_div" style={{border:"1px solid gray", padding:"10px", margin:"10px 20px"}}>
                                                                                        {e.matchScore ? 
                                                                                         <div>
                                                                                            <h6>Team Score 1</h6>
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
                                                                                       
                                                                                        {/* {e.matchScore ? 
                                                                                         <div>
                                                                                            <h6>Team Score 1</h6>
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
                                                                                        } */}
                                                                                       
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                               )
                                                                            })}
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