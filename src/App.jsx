import { React } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import MarqueeOne from './components/MarqueeOne'
import Tokenomics from './components/Tokenomics'
import Comunity from './components/Comunity'
import Gallery from './components/Gallerys'
import RoadMap from './components/RoadMap'
import CatGallery from './components/CatGallery'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Tokenomics />
      <MarqueeOne />
      <Gallery />
      <CatGallery />
      <RoadMap />
      <Comunity />
    </>
  )
}

export default App
