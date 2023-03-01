import React from 'react';
import banner from './banner.jpg';
import banner2 from './banner2.jpg';
import banner3 from './banner3.jpg';
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
          <h3>Nike Blazer Mid '77</h3>
          <p>In the ‘70s, Nike was the new shoe on the block</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ 'height': '450px' }}>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Nike Crater Impact</h3>
          <p>Efficient overlays and of course its Crater foam midsole</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}

export default Slider