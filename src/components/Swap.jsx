import { Container, Row, Col } from 'react-bootstrap'
import { useEffect } from 'react';
import AOS from 'aos';
export default function Swap() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className="swap about">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="about-content text-center section-title mb-4 pb-md-2 mb-lg-5">
                            <h2 data-aos="fade-up" className='mb-0' data-aos-duration="1000">Buy Now</h2>
                        </div>
                        <div className="swap-wrap position-relative" data-aos="fade-up">
                            <iframe className='w-100 h-100 position-absolute top-0 start-0' src="https://jup.ag/" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
