"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

import "../style/page.css"

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  
  const handleLoginRedirect = () => {
    router.push('/metaMaskLogin');
  };


  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="p-8 max-w-4xl mx-auto">
        <h1 className=" font-bold title1">Get Started to</h1>
        <p className=" text-left font-bold title2 ">Virtual World.</p>
        
        {/* Add more content as needed */}
       
        <button
          onClick={handleLoginRedirect}
          className=" px-4 py-2   metabutton1"
        >Login with MetaMask
        </button>
        <div className='seemore'>
        
        </div>
        
        
      </main>
    </div>
  );
}

