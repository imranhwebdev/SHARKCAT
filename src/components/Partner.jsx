import React, { useEffect } from 'react';
import AOS from 'aos';
import { Container, Row, Col } from 'react-bootstrap';
import BrandIcon1 from '../assets/img/partnerImg1.png';
import BrandIcon2 from '../assets/img/partnerImg2.png';
import BrandIcon3 from '../assets/img/partnerImg3.png';
import BrandIcon4 from '../assets/img/partnerImg4.png';
import partnerLeftImg1 from '../assets/img/MIXI-MARKET.webm';
import partnerRightImg from '../assets/img/MIXI-CALL.webm';
function Partner() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    const partnerImgs = [
        {
            image: BrandIcon1,
            link:"#"
        },
        {
            image: BrandIcon2,
            link:"#"
        },
        {
            image: BrandIcon3,
            link:"#"
        },
        {
            image: BrandIcon4,
            link:"#"
        },
    ];
  return (
    <div className='partner-area'>
        <Container>
            <Row>
                <Col>
                    <div className="section-title text-center mb-3 mb-md-4 pb-1">
                        <h2 data-aos="fade-up" data-aos-duration="1000">PartnershipS</h2>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col lg={12}>
                   <div className="brand__logos d-flex align-items-center justify-content-center gap-44">
                        {partnerImgs.map((partnerImg, index) => (
                            <a target='_blank' href={partnerImg.link} className="single__brand_logo_item" key={index} data-aos="fade-up" data-aos-duration="1400">
                                <img src={partnerImg.image} alt=" " />
                            </a>
                        ))}
                   </div>
                </Col>
            </Row>
        </Container>
        <figure className='partnerImgLeft'>
            <video className='partnerImgLeft' autoPlay loop muted>
                <source src={partnerLeftImg1} type="video/webm" />
            </video>
        </figure>
        <figure className='partnerImgRight'>
            <video className='partnerImgRight' autoPlay loop muted>
                <source src={partnerRightImg} type="video/webm" />
            </video>
        </figure>
    </div>
  )
}

export default Partner