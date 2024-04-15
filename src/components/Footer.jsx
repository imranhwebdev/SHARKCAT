import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {FaTwitter, FaPaperPlane} from "react-icons/fa";
import social3 from '../assets/img/socialIcon3black.svg'
export default function Footer() {
    const socialLinks = [
        { icon: <FaTwitter />, href: '#' },
        { icon: <FaPaperPlane />, href: '#' },
        { icon: <img src={social3} alt="" />, href: '#' }
    ];
  return (
    <footer className='footer-area'>
        <Container>
            <Row className='align-items-center'>
                <Col sm={6} className='text-center text-sm-start'>
                    <p>(@) 2024 MIXI IT ALL</p>
                </Col>
                <Col sm={6} className='text-sm-end text-center mt-4 mt-sm-0'>
                    <ul className="social-links">
                        {socialLinks.map((link, index) => (
                            <li key={index}><a href={link.href}>{link.icon}</a></li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
