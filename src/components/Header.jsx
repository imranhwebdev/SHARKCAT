import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link, animateScroll as scroll} from 'react-scroll';
import logo from '../assets/img/Logo.svg'
export default function Header() {
  const [isMenu, setIsMenu] = useState(false);
  const handleTouchStart  = (event) => {
    navigate(event);
    setIsMenu(!isMenu);
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
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
    <>
      <header className='heading'>
        <Container className='d-flex align-items-center justify-content-between'>
          <Link className="logo" href="/"  onClick={scrollToTop}>
           <img src={logo} alt='logo' />
          </Link>
          <nav className={`heading-menu ${isMenu ?'show-menu':''}`}>
            <div className="title d-flex align-items-center justify-content-between d-lg-none">
              <Link className="logo" href="/"  onClick={scrollToTop}>
               <img src={logo} alt='logo' />
              </Link>
              <button className="heading-toggler" onClick={() => setIsMenu(!isMenu)}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.3849 9.32205C16.481 9.23249 16.5585 9.12488 16.6129 9.00538C16.6674 8.88587 16.6978 8.75681 16.7024 8.62555C16.707 8.4943 16.6857 8.36342 16.6397 8.2404C16.5938 8.11737 16.524 8.00461 16.4344 7.90855C16.3449 7.81249 16.2373 7.73501 16.1178 7.68053C15.9982 7.62605 15.8692 7.59565 15.7379 7.59105C15.6067 7.58646 15.4758 7.60776 15.3528 7.65374C15.2297 7.69972 15.117 7.76949 15.0209 7.85905L12.0949 10.587L9.36692 7.66005C9.18439 7.47309 8.93593 7.36501 8.67472 7.35891C8.4135 7.35282 8.16028 7.44921 7.96923 7.62745C7.77818 7.8057 7.66448 8.05164 7.65246 8.31265C7.64044 8.57366 7.73106 8.829 7.90492 9.02405L10.6329 11.95L7.70592 14.6781C7.60647 14.7667 7.52573 14.8743 7.46846 14.9946C7.41118 15.1149 7.37852 15.2454 7.37239 15.3785C7.36626 15.5116 7.38679 15.6446 7.43277 15.7696C7.47875 15.8947 7.54925 16.0093 7.64014 16.1067C7.73103 16.2041 7.84047 16.2824 7.96203 16.3369C8.08359 16.3915 8.21482 16.4212 8.34802 16.4243C8.48121 16.4274 8.61369 16.4038 8.73766 16.355C8.86163 16.3062 8.97459 16.2331 9.06992 16.14L11.9959 13.413L14.7239 16.3391C14.812 16.4403 14.9196 16.5229 15.0402 16.5817C15.1609 16.6405 15.2922 16.6745 15.4262 16.6815C15.5603 16.6885 15.6943 16.6685 15.8205 16.6226C15.9466 16.5767 16.0622 16.5058 16.1604 16.4143C16.2586 16.3228 16.3374 16.2124 16.392 16.0898C16.4466 15.9672 16.476 15.8348 16.4784 15.7006C16.4807 15.5664 16.4561 15.4331 16.4058 15.3086C16.3556 15.1841 16.2808 15.071 16.1859 14.976L13.4589 12.05L16.3849 9.32205Z" fill="currentColor" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.04492 12C1.04492 5.925 5.96992 1 12.0449 1C18.1199 1 23.0449 5.925 23.0449 12C23.0449 18.075 18.1199 23 12.0449 23C5.96992 23 1.04492 18.075 1.04492 12ZM12.0449 21C10.863 21 9.6927 20.7672 8.60077 20.3149C7.50884 19.8626 6.51669 19.1997 5.68096 18.364C4.84523 17.5282 4.1823 16.5361 3.73001 15.4442C3.27771 14.3522 3.04492 13.1819 3.04492 12C3.04492 10.8181 3.27771 9.64778 3.73001 8.55585C4.1823 7.46392 4.84523 6.47177 5.68096 5.63604C6.51669 4.80031 7.50884 4.13738 8.60077 3.68508C9.6927 3.23279 10.863 3 12.0449 3C14.4319 3 16.7211 3.94821 18.4089 5.63604C20.0967 7.32387 21.0449 9.61305 21.0449 12C21.0449 14.3869 20.0967 16.6761 18.4089 18.364C16.7211 20.0518 14.4319 21 12.0449 21Z" fill="currentColor" />
                </svg>
              </button>
            </div>
            <ul className="main_menu d-lg-flex align-items-center">
              <Link to="about" className='heading-link' spy={true} smooth={true} offset={-150} duration={170} >About</Link>
              <Link to="howtobuy" className='heading-link' spy={true} smooth={true} offset={-150} duration={170} >How to buy</Link>
              <Link to="tokenomics" className='heading-link' spy={true} smooth={true} offset={-150} duration={50} >MEOWNOMICS</Link>
            </ul>
            
            <ul className="social-links d-md-none">
              <li><a href="https://google.com">{telegram}</a></li>
              <li><a href="https://google.com">{twitter}</a></li>
            </ul>
          </nav>
          <div className="heading-actions d-flex align-items-center flex-wrap">
            <ul className="social-links d-none d-md-block">
              <li><a href="https://google.com">{telegram}</a></li>
              <li><a href="https://google.com">{twitter}</a></li>
            </ul>
            <button className="heading-toggler d-lg-none" onClick={() => setIsMenu(!isMenu)}>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.08984 6H21.0898" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.08984 12H21.0898" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.08984 18H21.0898" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Container>
      </header>
    </>
  )
}