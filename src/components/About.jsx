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
  
  return (
    <div className="about" id='about'>
      <Container>
        <Row className='justify-content-center'>
          <Col lg={8}>
            <div className="about-content text-center">
              <h2  data-aos="fade-up" data-aos-duration="1000">About Sharkcat</h2>
              <p data-aos="fade-up" data-aos-duration="1300">Where the world of crypto meets the whimsical charm of our feline friends, embarking on a purr-fect adventure in decentralized finance.</p>
            </div>
          </Col>
          <Col xs={12}>
            <div className='player-wrapper'>
                    <ReactPlayer
                      light={videoPoster}
                      key={key}
                      url={'https://www.youtube.com/watch?v=GxiaFOHjYQQ'} 
                      playing={true}
                      loop={true}
                      width="100%"
                      height="717px"
                      style={{ maxWidth: '100%', height: 'auto' }}
                      muted={true}  // Set muted to true for autoplay
                      onEnded={handleVideoEnded}
                      controls={false} 
                    />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
