import React, { useEffect } from 'react';
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap'
import heroRImg from '../assets/img/heroRightImg.png';
import sociallogo3 from '../assets/img/sociallogo3.svg';
import sociallogo4 from '../assets/img/sociallogo4.svg';
export default function Banner(){
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);

      const socialLinks = [
        { 
            icon: sociallogo3, 
            href: 'https://google.com' 
        },
        { 
            icon: sociallogo4, 
            href: 'https://google.com' 
        },
    ];
    return(
        <div className="banner" id='hero'>
            <div className="banner-wrapper">
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={7} md={6}>
                            <div className="banner-content">
                                <h1 data-aos="fade-up" data-aos-duration="1200">Welcome to the Sharkcat</h1>
                                <p data-aos="fade-up" data-aos-duration="1400">Sharkcat is a playful and innovative memecoin on the Solana network, featuring a cat-themed design and a vibrant community of meme enthusiasts.</p>
                                <div className="btn-with-social" data-aos="fade-up" data-aos-duration="1600" data-aos-offset="0">
                                    <a href="#" className="base-btn">Buy Now</a>
                                    <ul className="social-links mt-4 mt-sm-0">
                                        {socialLinks.map((link, index) => (
                                            <li key={index}><a href={link.href} target="_blank"><img src={link.icon} alt="" /></a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} md={6}>
                            <div className="heroRImg">
                               <img src={heroRImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
