import React, { useEffect } from 'react';
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap';
import aboutLeftImg from '../assets/img/aboutLeftImg.png';
import star from '../assets/img/star.png';
import aboutTxt from '../assets/img/aboutmixiTxt.png';
import TORNADO from '../assets/img/MIXI-TORNADO.webm';
import twice from '../assets/img/Twice.png';
import aboutBRImg from '../assets/img/MIXI-MEDITATION.webm';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="about" id='about'>
      <figure className="twice">
        <img src={twice} alt="" />
      </figure>
      <figure className="star">
        <img src={star} alt="" />
      </figure>
      <figure className="aboutTxt">
        <img src={aboutTxt} alt="" />
      </figure>
      <Container>
        <Row className='align-items-center'>
          <Col lg={6}>
            <div className="about-img">
              <figure className="about-left-img">
                <img src={aboutLeftImg} alt="" />
                <video className='tornado' autoPlay loop muted>
                  <source src={TORNADO} type="video/webm" />
                </video>
              </figure>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-content">
              <h2  data-aos="fade-up" data-aos-duration="1000">Mixi fun <br /> facts</h2>
              <p data-aos="fade-up" data-aos-duration="1300">Pepe is afraid Mixi will suck him into the tornado, just like Mixi is afraid we'll step on her tail at home. Both can happen. </p>
              <a href="#" className="base-btn" data-aos="fade-up" data-aos-duration="1500">Buy $mixi</a>
            </div>
          </Col>
        </Row>
      </Container>
      <figure className="aboutBRImg">
        <video className='aboutBRImg' autoPlay loop muted>
            <source src={aboutBRImg} type="video/webm" />
        </video>
      </figure>
    </div>
  );
}
