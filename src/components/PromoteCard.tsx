'use client';
import { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { useWindowListener } from '@/hooks/useWindowListener';

export default function PromoteCard() {
  // สถานะเริ่มต้นของการเล่นวิดีโอเป็น true
  const [isPlaying, setIsPlaying] = useState(true);

  // ดักฟัง event contextmenu แล้วสั่ง preventDefault() เพื่อไม่ให้แสดง context menu เมื่อคลิกขวา
  useWindowListener('contextmenu', (e) => {
    e.preventDefault();
  });

  return (
    <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row">
      <VideoPlayer vdoSrc="/vdo/venue.mp4" isPlaying={isPlaying} />
      <div className="m-5">
        <div className="text-xl font-bold">Book your venue today.</div>
        <button
          className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm mt-5"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}