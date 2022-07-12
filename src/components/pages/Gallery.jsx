import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { GalleryList } from '../../assets/js/gallery';
import BreadCrumbs from './subComponents/BreadCrumbs';

const Gallery = () => {
    let data = GalleryList
    console.log("gallery data", data.photoGalleryInfoList)


    // var dateTIme =  new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(e.photoGalleryInfo.publishedTime)
    return (
        <>
            <div className="gallery_section">
                <BreadCrumbs heading="Gallery" />

                <div className=" gallery_imgages ">
                    <Container>
                        <Row className='py-5'>
                            {data.photoGalleryInfoList.map((e, i) => {

                                return (
                                    <Col lg={4} md={6} className="my-3" key={i}>
                                        {e.photoGalleryInfo ?

                                            <div className="hover01 column">
                                                <div className='content'>
                                                    <figure><img src="https://media.istockphoto.com/photos/girl-playing-cricket-picture-id872676564?k=20&m=872676564&s=612x612&w=0&h=Jx-QKxZnBykmy-0MOIuv0IBfOZRN_n1B6IiAefpFMAU=" /></figure>
                                                    <div className="overlay">
                                                        <span className='gallary_headline' style={{ fontWeight: "600" }}>{e.photoGalleryInfo.headline}</span><br></br>
                                                        <span className='gallery_time' style={{ fontSize: "16px" }}>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(e.photoGalleryInfo.publishedTime)}</span>
                                                    </div>

                                                </div>
                                            </div>

                                            :
                                            <div>{e.ad.name}</div>
                                        }
                                    </Col>
                                )
                            })}
                        </Row>

                     
                    </Container>
                </div>
            </div>
        </>
    )
}



export default Gallery;