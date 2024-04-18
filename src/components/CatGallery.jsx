import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
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
export default function CatGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const galleryImgs  = [
    { img: img_1 },
    { img: img_2 },
    { img: img_3 },
    { img: img_4 },
    { img: img_5 },
    { img: img_6 },
    { img: img_7 },
    { img: img_8 },
    { img: img_9 },
    { img: img_10 },
    { img: img_11 },
  ];
  return (
    <section className='cat-gallery-area'>
        <Container>
            <Row>
                <Col>
                    <Swiper
                        style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="catGalleryImgs"
                    >
                        { galleryImgs.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item.img} alt="" />
                        </SwiperSlide>
                        )) }
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="galleryPagination"
                    >
                        { galleryImgs.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item.img} alt="" />
                        </SwiperSlide>
                        )) }
                    </Swiper>
                </Col>
            </Row>
        </Container>
    </section>
  );
}
