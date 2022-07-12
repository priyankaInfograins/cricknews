import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BreadCrumbs from './subComponents/BreadCrumbs';
import {NewsList} from '../../assets/js/NewsList'
import {MdOutlineWatchLater} from 'react-icons/md'
import moment from 'moment'
const News = () => {
    const newsData = NewsList
    console.log("newsData", newsData.storyList)
    return(
        <>
            <div className="news_section">
                <BreadCrumbs heading="Top News" />
                <div className="news_content mt-3 mb-5">
                    <Container>
                        <Row className='justify-content-center'>
                            {newsData.storyList.map((e,i)=>{
                                return(
                                    <>
                                    {e.story ? 
                                    <Col lg={8} className="my-3" key={i}>
                                    <div className="news_data">
                                        <div className="news_caption">{e.story.coverImage.caption}</div>
                                        <div className="news_img">
                                            <img src="https://media.newyorker.com/photos/5f2b2b45d4b98d588c5cdf22/16:9/w_2559,h_1439,c_limit/Caesar-Cricket.jpg" alt="news_img" className='img-fluid' />
                                        </div>
                                        <div className="news_context">{e.story.context}</div>
                                        <div className="news_headline">{e.story.hline}</div>
                                        <div className="news_intro">{e.story.intro}</div>
                                        <div className="news_time">
                                            <div><MdOutlineWatchLater/></div>
                                            <div className='time'>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(e.story.pubTime)}</div>
                                        </div>
                                    </div>
                                </Col>
                                :
                                " "
                                    }
                                    </>
                                )
                            })}
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default News;