'use client'
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Banner() {
  const covers = [
    '/img/cover.jpg',
    '/img/cover2.jpg',
    '/img/cover3.jpg',
    '/img/cover4.jpg'
  ];

  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div 
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '350px', 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        cursor: 'pointer'
      }}
      className="relative w-full h-[350px] flex items-center justify-center text-center overflow-hidden cursor-pointer"
      onClick={() => setIndex((index + 1) % covers.length)}
    >
      <Image
        src={covers[index]}
        alt="Banner"
        fill
        priority
        style={{ objectFit: 'cover', zIndex: 0 }}
      />

      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          backgroundColor: 'rgba(0,0,0,0.4)', 
          zIndex: 1 
        }} 
      />

      {session ? (
        <div 
          style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 30 }}
          className="absolute top-4 right-4 z-30 font-semibold text-cyan-200 text-xl"
        >
          Welcome {session.user?.name}
        </div>
      ) : null}

      <div 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          color: 'white', 
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }}
        className="relative z-10 text-white flex flex-col items-center justify-center px-4"
      >
        <h1 
          style={{ fontSize: '2.5rem', fontWeight: 'bold', textTransform: 'capitalize' }}
          className="text-4xl font-bold"
        >
          where every event finds its venue
        </h1>
        <p 
          style={{ fontSize: '1.2rem', marginTop: '10px' }}
          className="text-lg mt-2"
        >
          บริการสถานที่จัดเลี้ยงครบวงจร สำหรับทุกโอกาสพิเศษของคุณ
        </p>
      </div>

      <button 
        className="bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-3 m-6 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent transition"
        onClick={(e) => {
          e.stopPropagation();
          router.push('/venue');
        }}
      >
        Select Venue
      </button>
    </div>
  );
}
