'use client';
import React from 'react'
import Carousel from '@/components/ui/carousel';
import { useState, useEffect } from 'react';
import CustomComponent from './corouselComponent';

const buttonContent = [
  { text: 'Get Appointment', href: '#', type: 'primary' },
  { text: 'Learn More', href: '#', type: 'secondary' },
];
const title = (
  <div>
  <h1 className="text-5xl font-bold">
    Our Commitment to  
  </h1>
  <span className="text-primary text-5xl font-bold">Quality Care</span> 
  </div>
);


const description = (
  <div>
  <p className="text-lg">
  At ARC, your health and well-being are our top priority. <br></br>
  We aim to deliver the highest level of care through advanced technology, expert physicians, and compassionate service. 
  <br></br>
  Trust us to be your partner in your healthcare journey.
  </p>
  </div>
);


const Slide1 = () => {return (
  <CustomComponent
    image="./slider.jpg"
    buttonContent={buttonContent}
    title={title}
    description={description}
  />
);}

const Slide2 = () => {return (
  <CustomComponent
    image="./slider2.jpg"
    buttonContent={buttonContent}
    title={title}
    description={description}
  />
);}



const Hero = () => {
  return (
    <section className='hero'>
      <Carousel items={[Slide1,]} />
    </section>
  )
}

export default Hero