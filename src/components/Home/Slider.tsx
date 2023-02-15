import React from 'react';
import banner from './banner.png';
import banner2 from './banner2.png';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <Carousel style={{ 'height': '100%' }}>
      <Carousel.Item style={{ 'height': '450px' }}>
        <img
          className="d-block w-100"
          src={banner}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>AIR Beyond Compare</h3>
          <p>Explore the best Air Max for fall & beyond</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ 'height': '450px' }}>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider