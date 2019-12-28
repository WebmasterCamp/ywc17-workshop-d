import React from 'react';
import { Carousel } from './components/Carousel';
import { Hero } from './components/Hero';

export const Home: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl p-3 text-red-400 sm:text-blue-500">Home</h1>
      <Carousel />
      <Hero />
    </>
  );
};
