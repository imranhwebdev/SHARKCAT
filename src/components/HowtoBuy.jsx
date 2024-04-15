import React, { useEffect } from 'react';
import AOS from 'aos';
import { Container, Row, Col } from 'react-bootstrap';
import howtoSingleImg from "../assets/img/howtobuysingleitemImg.png";
import howtoImg1 from "../assets/img/howtobuyLogo1.png";
import howtoImg2 from "../assets/img/howtobuyLogo2.png";
import howtoImg3 from "../assets/img/howtobuyLogo3.png";
import howtoImg4 from "../assets/img/howtobuyLogo4.png";
import howToBuyItemImgEven from "../assets/img/howToBuyItemImgEven.png";
import howToBuyItemImgOdd from "../assets/img/howToBuyItemImgOdd.png";
import howtobuyTopshap from "../assets/img/howtobuytopShap.png";
export default function HowtoBuy() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    const howtobuyContent = [
        {
            img: howtoImg1,
            logoBG: howtoSingleImg,
            evenOddBg: howToBuyItemImgOdd,
            title: "Download and Install Phantom",
            desc: "Download and install phantom on the AppStore, or, alternatively if you're on desktop download and install the browser extension.",
        },
        {
            img: howtoImg2,
            logoBG: howtoSingleImg,
            evenOddBg: howToBuyItemImgEven,
            title: "Secure your Solana",
            desc: "Now all you've got to do is buy your SOL in the Phantom App, or, alternatively you can use an exchange and deposit using your wallet address.",
        },
        {
            img: howtoImg3,
            logoBG: howtoSingleImg,
            evenOddBg: howToBuyItemImgOdd,
            title: "Buy some $MIXI",
            desc: "Now go to Raydium and paste the $MIXI Contract Address to swap your SOL.",
        },
        {
            img: howtoImg4,
            logoBG: howtoSingleImg,
            evenOddBg: howToBuyItemImgEven,
            title: "add to your wallet",
            desc: "Now you're all set! Welcome aboard the next rocket to the moon, just import the contract address to view your holdings and track your earnings. Vibe, Shill & Hodl.",
        },
    ]
  return (
    <div className='howtobuy-area'>
        <figure className='howtobuyTopshap'>
            <img src={howtobuyTopshap} alt="" />
        </figure>
      <Container>
        <Row>
            <Col>
                <div className="section-title text-center">
                    <h2 data-aos="fade-up" data-aos-duration="1000">How to Buy with $SOL</h2>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                {howtobuyContent.map((item, index)=>(
                    <div className="howtobuy-content-singleItem d-flex align-items-center" key={index}  data-aos="fade-up" data-aos-duration="1300">
                        <figure className='evenOddBg'>
                            <img src={item.evenOddBg} alt="" />
                        </figure>
                        <figure className='howtobuyLogo'>
                            <img className='howtoSLogo' src={item.img} alt="" />
                            <img src={item.logoBG} alt="" />
                        </figure>
                        <div className="content-info">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </Col>
        </Row>
      </Container>
    </div>
  )
}
