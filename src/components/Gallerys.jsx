import React, { useEffect } from 'react';
import AOS from 'aos';
import { Col, Container, Row } from "react-bootstrap";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import CatGallery from './CatGallery';
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
            <div className="section-title text-center">
              <h2  data-aos="fade-up"  data-aos-duration="1800">Sharkcat Gallery</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col  data-aos="fade-up"  data-aos-duration="2200">
            <CatGallery />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
