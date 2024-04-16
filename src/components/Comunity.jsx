import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer'
export default function Comunity() {
    const telegram = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g clip-path="url(#clip0_254_427)">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7767 4.42997C20.0238 4.32596 20.2943 4.29008 20.5599 4.32608C20.8256 4.36208 21.0768 4.46863 21.2873 4.63465C21.4979 4.80067 21.6601 5.02008 21.757 5.27005C21.854 5.52002 21.8822 5.79141 21.8387 6.05597L19.5707 19.813C19.3507 21.14 17.8947 21.901 16.6777 21.24C15.6597 20.687 14.1477 19.835 12.7877 18.946C12.1077 18.501 10.0247 17.076 10.2807 16.062C10.5007 15.195 14.0007 11.937 16.0007 9.99997C16.7857 9.23897 16.4277 8.79997 15.5007 9.49997C13.1987 11.238 9.50265 13.881 8.28065 14.625C7.20265 15.281 6.64065 15.393 5.96865 15.281C4.74265 15.077 3.60565 14.761 2.67765 14.376C1.42365 13.856 1.48465 12.132 2.67665 11.63L19.7767 4.42997Z" fill="#0E0E0D"/>
</g>
<defs>
  <clipPath id="clip0_254_427">
    <rect width="24" height="24" fill="white"/>
  </clipPath>
</defs>
</svg>;
const  twitter = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5859 21.375L14.0885 10.4471L14.1013 10.4574L20.8613 2.625H18.6023L13.0954 9L8.72227 2.625H2.79766L9.79723 12.8276L9.79638 12.8267L2.41406 21.375H4.67309L10.7955 14.2824L15.6613 21.375H21.5859ZM7.82719 4.32954L18.3466 19.6705H16.5564L6.02852 4.32954H7.82719Z" fill="#0E0E0D"/>
</svg>;
  return (
    <div className='community-area'>
        <Container>
            <Row>
                <Col>
                    <div className="community-content text-center">
                        <div className="community-info">
                          <h2>Join our community</h2>
                          <p>Join our vibrant Sharkcat community today to embark on an exciting journey of crypto adventures and feline fun!</p>
                          <ul className="social-links d-none d-md-block">
                              <li><a href="https://google.com">{telegram}</a></li>
                              <li><a href="https://google.com">{twitter}</a></li>
                          </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
    </div>
  )
}
