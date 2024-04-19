import {Container, Row, Col} from 'react-bootstrap'
export default function Swap() {
  return (
    <div className="swap">
        <Container>
            <Row>
                <Col xs={12}>
                    <div className="swap-wrap position-relative">
                        <iframe className='w-100 h-100 position-absolute top-0 start-0' src="https://jup.ag/" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
