'use client';

import Preloader from './Preloader';

export default function ClientWrapper({ children }) {
  return (
    <>
      <Preloader />
      {children}
    </>
  );
}
