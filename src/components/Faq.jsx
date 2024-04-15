import React, { useEffect } from 'react';
import AOS from 'aos';
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import faqTopShap from "../assets/img/faqTopShap.png"
import faqCatImg from "../assets/img/faqImg.png"
import star1 from "../assets/img/star1.png"
import star from "../assets/img/star.png"
export default function Faq() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const title = "FREQUENTLY ASKED <span>QUESTIONS</span>";
  const accordionData = [
    {
      id: 1,
      title: "WHO IS MIXI ?",
      desc: "MIXI IS JUST A MIXI. NOT DOGE, NOT PEPE, IT IS MAYBE A CAT.",
    },
    {
      id: 2,
      title: "What chain….?",
      desc: "MIXI IS JUST A MIXI. NOT DOGE, NOT PEPE, IT IS MAYBE A CAT.",
    },
    {
      id: 3,
      title: "How can i buy mixi ?",
      desc: "MIXI IS JUST A MIXI. NOT DOGE, NOT PEPE, IT IS MAYBE A CAT.",
    },
    {
      id: 4,
      title: "What is the price prediction?",
      desc: "MIXI IS JUST A MIXI. NOT DOGE, NOT PEPE, IT IS MAYBE A CAT.",
    },
    {
      id: 5,
      title: "Why is mixi looks like a cat and a doge, but degenerative like pepe? ",
      desc: "MIXI IS JUST A MIXI. NOT DOGE, NOT PEPE, IT IS MAYBE A CAT.",
    },
  ];
  return (
    <section className="faqArea">
      <figure className="faqTopShap">
        <img src={faqTopShap} alt="" />
      </figure>
      <figure className="faqCatImg">
        <img src={faqCatImg} alt="" />
      </figure>
      <figure className="star1">
        <img src={star1} alt="" />
      </figure>
      <figure className="star2">
        <img src={star} alt="" />
      </figure>
      <Container>
        <Row>
          <Col>
            <div className="faqWrapper">
              <div className="section-title mb-5"  data-aos="fade-up" data-aos-duration="1000">
                <h2  dangerouslySetInnerHTML={{ __html: title }}  />
              </div>
              <Accordion>
                {accordionData.map(item => (
                  <Accordion.Item key={item.id} eventKey={item.id.toString()}  data-aos="fade-up" data-aos-duration="1300">
                    <Accordion.Header className="text-wrap">{item.title}</Accordion.Header>
                    <Accordion.Body>{item.desc}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
      <figure className="star3">
        <img src={star} alt="" />
      </figure>
    </section>
  );
}