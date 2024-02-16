
import ReactDOM  from "react-dom";
import React, { Component, useRef } from 'react';
import logo from './profile-img.jpg';
import coppersanibw from './portfolio/portfolio-bw/Coppersani-Portfolio-img.jpg';
import coppersani from './portfolio/Coppersani-Portfolio-img.jpeg';
import metrobw from './portfolio/portfolio-bw/MetroNZ-Portfolio-img.jpg';
import metro from './portfolio/MetroNZ-Portfolio-img.jpeg';
import signalroombw from './portfolio/portfolio-bw/Signalroom-Portfolio-img.jpg';
import signalroom from './portfolio/Signalroom-Portfolio-img.jpg';
import totobw from './portfolio/portfolio-bw/Toto-Portfolio-img.jpg';
import toto from './portfolio/Toto-Portfolio-img.jpeg';

const ImageToggleOnMouseOverCoppersani = ({primaryImg, secondaryImg}) => {
  const imageRef = useRef(null);

  return (
    <img className="portfolio-image" height={299} width={491}
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src= primaryImg;
      }}
      src={primaryImg} 
      alt=""
      ref={imageRef}
    />
  )
}

const ImageChangeOnMouseOverCoppersani = () => {
  return (
    <div>
      <ImageToggleOnMouseOverCoppersani
        primaryImg={coppersanibw}
        secondaryImg={coppersani}
        alt=""
          />
      
    </div>
  )
}

const ImageToggleOnMouseOverMetro = ({primaryImg, secondaryImg}) => {
  const imageRef = useRef(null);

  return (
    <img className="portfolio-image" height={299} width={491}
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src= primaryImg;
      }}
      src={primaryImg} 
      alt=""
      ref={imageRef}
    />
  )
}

const ImageChangeOnMouseOverMetro = () => {
  return (
    <div>
      <ImageToggleOnMouseOverMetro
        primaryImg={metrobw}
        secondaryImg={metro}
        alt=""
          />
      
    </div>
  )
}

const ImageToggleOnMouseOverSignalroom = ({primaryImg, secondaryImg}) => {
  const imageRef = useRef(null);

  return (
    <img className="portfolio-image" height={299} width={491}
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src= primaryImg;
      }}
      src={primaryImg} 
      alt=""
      ref={imageRef}
    />
  )
}

const ImageChangeOnMouseOverSignalroom = () => {
  return (
    <div>
      <ImageToggleOnMouseOverSignalroom
        primaryImg={signalroombw}
        secondaryImg={signalroom}
        alt=""
          />
      
    </div>
  )
}

const ImageToggleOnMouseOverToto= ({primaryImg, secondaryImg}) => {
  const imageRef = useRef(null);

  return (
    <img className="portfolio-image" height={299} width={491}
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src= primaryImg;
      }}
      src={primaryImg} 
      alt=""
      ref={imageRef}
    />
  )
}

const ImageChangeOnMouseOverToto = () => {
  return (
    <div>
      <ImageToggleOnMouseOverToto
        primaryImg={totobw}
        secondaryImg={toto}
        alt=""
          />
      
    </div>
  )
}




function Portfolio() {
    return (
      <div className="container-fluid">
    <div className="row portfolio-back">
    <h2 className="tech-profile" id="portfolio">Portfolio</h2>
    <div class="float-container-portfolio">

<div class="float-child-portfolio">
  <div class="green-portfolio"> 
  <a className="portfolio-image"  href="https://www.dragonflydigital.co.nz/Coppersani/" target="_blank">
  <ImageChangeOnMouseOverCoppersani/>
  </a>
  </div>
  <p class="title-green">Coppersani</p>
  
</div>

<div class="float-child-portfolio">
  <div class="blue-portfolio">
    <a className="portfolio-image"  href="https://www.dragonflydigital.co.nz/Mission_Ready/Mission5/" target="_blank">
    <ImageChangeOnMouseOverMetro/>
    </a>
  </div>
  <a href="https://www.dragonflydigital.co.nz/Mission_Ready/Mission5/" target="_blank">
    <p class="title-blue">Metro NZ</p>
    </a>
 
</div> 

<div class="float-child-portfolio">
  <div class="green-portfolio">
  <a className="portfolio-image" href="https://www.dragonflydigital.co.nz/Signalroom/" target="_blank">
  <ImageChangeOnMouseOverSignalroom/>
  </a> 
  </div>
  <a href="https://www.dragonflydigital.co.nz/Signalroom/" target="_blank">
  <p class="title-green">Signalroom</p>
  </a>
 
</div>

<div class="float-child-portfolio">
  <div class="blue-portfolio">
  <a className="portfolio-image" href="https://www.dragonflydigital.co.nz/Toto/" target="_blank">
  <ImageChangeOnMouseOverToto/>
  </a>
  </div>
  <a className="portfolio-image"  href="https://www.dragonflydigital.co.nz/Toto/" target="_blank">
  <p class="title-blue">Toto Pizzaria</p>
  </a>
</div>



</div>
</div>
</div>
    
)}
export default Portfolio;