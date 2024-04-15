import React, { useEffect } from 'react';
import AOS from 'aos';
import { Container, Row, Col } from 'react-bootstrap';
import tokenInfoImg1 from "../assets/img/tokenInfoImg1.png";
import tokenInfoImg2 from "../assets/img/tokenInfoImg2.png";
import tokenInfoImg3 from "../assets/img/tokenInfoImg3.png";
import tokenInfoImg4 from "../assets/img/tokenInfoImg4.png";
import tokenLeftShap from "../assets/img/tokenLeftShap.png";
import tokenRightShap from "../assets/img/tokenRightShap.png";
import tokentopshap from "../assets/img/tokentopshap.png";
export default function Tokenomics() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
  return (
    <section className='tokenomics-area'>
        <figure className='tokentopshap'>
            <img src={tokentopshap} alt="" />
        </figure>
        <figure className='tokenLeftShap'>
            <img src={tokenLeftShap} alt="" />
        </figure>
        <figure className='tokenRightShap'>
            <img src={tokenRightShap} alt="" />
        </figure>
        <Container>
            <Row>
                <Col>
                    <div className="section-title">
                        <h2 data-aos="zoom-in-right"  data-aos-duration="1200">Meownomics</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <div className="tokenomics-items">
                        <div className="tokenomics-single-item"  data-aos="fade-up" data-aos-duration="1300">
                            <h3>TOTAL SUPPLY</h3>
                            <span>69,000,000 $MIXI</span>
                        </div>
                        <div className="tokenomics-single-item two"  data-aos="fade-up" data-aos-duration="1600">
                            <h3>TOKEN ADDRESS</h3>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="tokenomics-info">
                        <div className="single-info one">
                            <figure>
                                <img src={tokenInfoImg1} alt="" />
                            </figure>
                            <div className="content">
                                <h4>TAXS</h4>
                                <span>0/0</span>
                            </div>
                        </div>
                        <div className="single-info two">
                            <figure>
                                <img src={tokenInfoImg2} alt="" />
                            </figure>
                            <div className="content d-flex align-items-center justify-content-between">
                                <h4>TOTAL SUPPLY</h4>
                                <span>69M</span>
                            </div>
                        </div>
                        <div className="single-info three">
                            <figure>
                                <img src={tokenInfoImg3} alt="" />
                            </figure>
                            <div className="content">
                                <h4>LIQUIDITY</h4>
                                <span>BURNED</span>
                            </div>
                        </div> 
                        <div className="single-info four">
                            <figure>
                                <img src={tokenInfoImg4} alt="" />
                            </figure>
                            <div className="content">
                                <h4>mint & freeze</h4>
                                <span>Revoked</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}