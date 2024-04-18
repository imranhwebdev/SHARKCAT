import React, { useEffect } from 'react';
import AOS from 'aos';
import { Container, Row, Col } from 'react-bootstrap';
import TokenBImg from "../assets/img/Token-bImg.png"
import Pattern from "../assets/img/Pattern.png"
import TokenRImg from "../assets/img/TokenRImg.png"
export default function Tokenomics() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
  return (
    <section className='tokenomics-area' id='tokenomics'>
        <figure className='Pattern'>
            <img src={Pattern} alt="" />
        </figure>
        <Container>
            <Row className="align-items-center">
                <Col lg={6} className='order-2 order-lg-1'>
                    <div className="tokenomics-content">
                        <h2  data-aos="fade-up" data-aos-duration="1200">Tokenomics</h2>
                        <p  data-aos="fade-up" data-aos-duration="1400">With sharkcat tokenomics, holders are rewarded and incentivised. All investors benefit from sharkcat's deflationary mechanism and token redistribution.</p>
                        <a href="https://google.com" className='base-btn'  data-aos="fade-up" data-aos-duration="1800">Buy Now</a>
                    </div>
                </Col>
                <Col lg={6} className='order-1 order-lg-2'>
                    <div className="tokenomics-info">
                        <figure className='TokenRImg'  data-aos="zoom-in-left" data-aos-duration="1800">
                            <img src={TokenRImg} alt="" />
                        </figure>
                    </div>
                </Col>
            </Row>
        </Container>
        <figure className='TokenBImg'  data-aos="fade-up" data-aos-duration="2200">
            <img src={TokenBImg} alt="" />
        </figure>
    </section>
  )
}