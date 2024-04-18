import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import PhotoAlbum from "react-photo-album";
import { Col, Container, Row } from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import img_1 from '../assets/img/album/1.png';
import img_2 from '../assets/img/album/2.png';
import img_3 from '../assets/img/album/3.png';
import img_4 from '../assets/img/album/4.png';
import img_5 from '../assets/img/album/5.png';
import img_6 from '../assets/img/album/6.png';
import img_7 from '../assets/img/album/7.png';
import img_8 from '../assets/img/album/8.png';
import img_9 from '../assets/img/album/9.png';
import img_10 from '../assets/img/album/10.png';
import img_11 from '../assets/img/album/11.png';

const photos = [
  { src: img_1, width: 320, height: 318 },
  { src: img_2, width: 320, height: 518 },
  { src: img_3, width: 320, height: 183 },
  { src: img_4, width: 320, height: 142 },
  { src: img_5, width: 320, height: 318 },
  { src: img_6, width: 320, height: 363 },
  { src: img_7, width: 320, height: 318 },
  { src: img_11, width: 320, height: 416 },
  { src: img_10, width: 320, height: 378 },
  { src: img_8, width: 320, height: 330 },
  { src: img_9, width: 320, height: 241 },
];
export default function Gallerys() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [index, setIndex] = useState(-1);
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
            <PhotoAlbum layout="masonry" photos={photos}   columns={(containerWidth) => {
                  if (containerWidth < 479) return 2;
                  if (containerWidth < 767) return 3;
                  return 4;
                }} targetRowHeight={150} onClick={({ index }) => setIndex(index)}/>


              <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
              />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
