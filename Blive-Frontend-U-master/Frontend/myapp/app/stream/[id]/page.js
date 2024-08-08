"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import "../../../style/watch.css";

const StreamPage = () => {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const [stream, setStream] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchStream = async () => {
        const response = await fetch(`/api/streams/${id}`);
        const data = await response.json();
        setStream(data);
      };

      fetchStream();
    }
  }, [id]);

  if (!stream) {
    return 
    // <p className="text-center mt-10">Loading...</p>;
    <div class="loader"></div>
  }

  return (
    <div className="flex flex-col  mt-10 px-4">
      <div>
      </div>
      <div className='iframeContainer'>
        <iframe
          src={`https://lvpr.tv?v=${stream.playbackId}`}
          className="w-full md:w-3/4 lg:w-1/2 aspect-video mb-4 watch"
          allow="autoplay; fullscreen"
          allowFullScreen
          frameBorder="0"
        />
       <h1 className="text-2xl font-bold watchtitle">{stream.streamTitle}</h1>
      </div>
    </div>
  );
};

export default StreamPage;
