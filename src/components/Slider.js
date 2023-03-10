import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../App.css'

export default function Slider() {
  return (
    <Carousel pause="hover" className="bg-dark">
      <Carousel.Item>
        <img
          src="https://miro.medium.com/max/800/1*_6nfDMXt5Bvv0Qh8MrXDrg.jpeg"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Welcome Grootan Technologies Task</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
