import React, { useEffect } from 'react';
import AOS from 'aos';
import { Container, Row, Col } from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import roadmapDot from "../assets/img/roadmapDot.png"
export default function RoadMap() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
  return (
    <section className='howtobuy-area' id='roadmap'>
        <Container>
            <Row>
                <Col>
                    <div className="section-title text-center">
                        <h2  data-aos="fade-up" data-aos-duration="1600">Our Roadmap</h2>
                        <p   data-aos="fade-up" data-aos-duration="2000">This roadmap outlines our journey to exciting milestones, including listings on major exchanges. Let's pave the way for innovative developments.</p>
                    </div>
                </Col>
            </Row>
            <Row>
            <VerticalTimeline>
                <VerticalTimelineElement className="vertical-timeline-element--work">
                    <span className='line'></span>
                    <span className='roadmapDot'> <img src={roadmapDot} alt="" /></span>
                    <h3 className="vertical-timeline-element-title">PHASE 1</h3>
                    <ul className='roadmap-list'>
                        <li>Launch on Solana</li>
                        <li>Website Landing Page</li>
                        <li>Presale</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--work">
                    <span className='roadmapDot'> <img src={roadmapDot} alt="" /></span>
                    <span className='line'></span>
                    <h3 className="vertical-timeline-element-title">PHASE 2</h3>
                    <ul className='roadmap-list'>
                        <li>Public Presale</li>
                        <li>Dexscreener and Birdeye Update</li>
                        <li>Build our Community</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work">
                    <span className='roadmapDot'> <img src={roadmapDot} alt="" /></span>
                    
                    <span className='line'></span>
                    <h3 className="vertical-timeline-element-title">PHASE 3</h3>
                    <ul className='roadmap-list'>
                        <li>Trending on X</li>
                        <li>CG CMC Listing</li>
                        <li>NFT Airdrop</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work">
                    <span className='roadmapDot'> <img src={roadmapDot} alt="" /></span>
                    <span className='line'></span>
                    <h3 className="vertical-timeline-element-title">PHASE 4</h3>
                    <ul className='roadmap-list'>
                        <li>Establish Sharkcat presence</li>
                        <li>Promote real-world use cases</li>
                        <li>Ensure long-term sustainability</li>
                    </ul>
                </VerticalTimelineElement>
                </VerticalTimeline>
            </Row>
        </Container>
    </section>
  )
}
