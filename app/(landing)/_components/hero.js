'use client'
import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Link from 'next/link';

const Hero = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const turquoiseColors = [
    'bg-orange-600',
    'bg-purple-600',
    'bg-green-600',
    'bg-blue-600',
    'bg-red-600',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) =>
        prevIndex === turquoiseColors.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={` w-full bg-transparent ${turquoiseColors[currentColorIndex]} h-screen flex flex-col items-center`}>
     <Navbar />
      <div className='text-center text-white mt-36'>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mb-4'>Share your thoughts, your way</h1>
        <p className='text-lg mb-8'>Create a page and post easily</p>
        <Link href={'/sign-in'}
        className='bg-orange-300 py-4 px-2 rounded-md mt-12 text-medium'>
            Create Your Blog
        </Link>
      </div>
    </section>
  );
};

export default Hero;
