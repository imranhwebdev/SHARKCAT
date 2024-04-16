import React, { useEffect } from 'react';
import AOS from 'aos';
import PhotoAlbum from "react-photo-album";
import { Col, Container, Row } from "react-bootstrap";
const photos = [
  { src: "/src/assets/img/album/1.png", width: 320, height: 318 },
  { src: "/src/assets/img/album/2.png", width: 320, height: 518 },
  { src: "/src/assets/img/album/3.png", width: 320, height: 183 },
  { src: "/src/assets/img/album/4.png", width: 320, height: 142 },
  { src: "/src/assets/img/album/5.png", width: 320, height: 318 },
  { src: "/src/assets/img/album/6.png", width: 320, height: 318 },
  { src: "/src/assets/img/album/7.png", width: 320, height: 318 },
  { src: "/src/assets/img/album/8.png", width: 320, height: 318 },
  { src: "/src/assets/img/album/9.png", width: 320, height: 363 },
  { src: "/src/assets/img/album/10.png", width: 320, height: 378 },
  { src: "/src/assets/img/album/11.png", width: 320, height: 241 },
];
export default function Gallerys() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="gallery-area">
      <Container>
        <Row>
          <Col>
            <div className="section-title text-center" data-aos="fade-up">
              <h2>Sharkcat Gallery</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <PhotoAlbum layout="masonry" photos={photos}  columns={4}  />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
