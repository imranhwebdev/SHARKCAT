import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer-area'>
      <Container>
        <Row>
          <Col sm={12} className='text-center'>
            <p>Copyright © {currentYear} Sharkcat. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
