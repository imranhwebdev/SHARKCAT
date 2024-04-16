import React, { useEffect, useState } from "react";
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap';
import videoPoster from "../assets/img/aboutImg.png";
import ReactPlayer from 'react-player/youtube'
export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  
  const [key, setKey] = useState(0);

  const handleVideoEnded = () => {
    setKey((prevKey) => prevKey + 1);
  };
  const playBtn = <svg xmlns="http://www.w3.org/2000/svg" width="610" height="611" viewBox="0 0 610 611" fill="none">
  <g filter="url(#filter0_d_254_464)">
    <path d="M305 351.695C332.615 351.695 355 329.31 355 301.695C355 274.08 332.615 251.695 305 251.695C277.385 251.695 255 274.08 255 301.695C255 329.31 277.385 351.695 305 351.695Z" fill="#00F6FF" stroke="#00F6FF" stroke-width="10" stroke-linejoin="round"/>
    <path d="M295 301.695V284.375L310 293.035L325 301.695L310 310.355L295 319.015V301.695Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round"/>
  </g>
  <defs>
    <filter id="filter0_d_254_464" x="-5" y="-4.30505" width="620" height="620" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="125"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_254_464"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_254_464" result="shape"/>
    </filter>
  </defs>
</svg>;
  return (
    <div className="about" id='about'>
      <Container>
        <Row className='justify-content-center'>
          <Col lg={8}>
            <div className="about-content text-center section-title">
              <h2  data-aos="fade-up" data-aos-duration="1000">About Sharkcat</h2>
              <p data-aos="fade-up" data-aos-duration="1300">Where the world of crypto meets the whimsical charm of our feline friends, embarking on a purr-fect adventure in decentralized finance.</p>
            </div>
          </Col>
          <Col xs={12}>
            <div className='player-wrapper' data-aos="fade-up" data-aos-duration="1600">
                    <ReactPlayer
                      className="video_player"
                      light={videoPoster}
                      key={key}
                      url={'https://www.youtube.com/watch?si=Fh9sNKEKzNujM3v9&v=2v2jNiLN5mk&feature=youtu.be'} 
                      playing={true}
                      loop={true}
                      width="100%"
                      height="auto"
                      style={{ maxWidth: '100%', height: 'auto' }}
                      muted={true}  // Set muted to true for autoplay
                      onEnded={handleVideoEnded}
                      controls={true} 
                      playIcon={playBtn}
                    />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
