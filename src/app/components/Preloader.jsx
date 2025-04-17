'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Preloader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="preloader">
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <Image src="/images/loader.svg" alt="Loading..." width={50} height={50} />
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Preloader), {
  ssr: false
});