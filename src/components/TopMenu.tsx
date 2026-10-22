"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
  const { data: session } = useSession();

  return (
    <nav
      style={{
        height: '56px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '16px',
        paddingRight: '16px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%'
      }}
      className="h-14 bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 flex flex-row justify-between items-center px-4"
    >
      {/* เมนูฝั่งซ้าย */}
      <div
        className="flex flex-row shrink-0 items-center gap-4 whitespace-nowrap"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div className="flex shrink-0 items-center text-sm font-semibold text-cyan-600">
          {session ? (
            <Link
              href="/api/auth/signout"
              className="flex items-center h-full px-2 hover:text-cyan-800 whitespace-nowrap"
              style={{ whiteSpace: "nowrap", flexShrink: 0 }}
            >
              Sign-Out
            </Link>
          ) : (
            <Link
              href="/api/auth/signin"
              className="flex items-center h-full px-2 hover:text-cyan-800 whitespace-nowrap"
              style={{ whiteSpace: "nowrap", flexShrink: 0 }}
            >
              Sign-In
            </Link>
          )}
        </div>
        <div className="shrink-0">
          <TopMenuItem title="My Booking" pageRef="/mybooking" />
        </div>
      </div>

      {/* ฝั่งขวา: เมนู Booking และ โลโก้ */}
      <div className="flex flex-row items-center space-x-4">
        <TopMenuItem title="Booking" pageRef="/booking" />

        {/* โลโก้ชิดขวาสุด */}
        <div
          style={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4px'
          }}
          className="relative h-full w-28 p-1 flex items-center justify-center"
        >
          <Image
            src="/img/logo.png"
            alt="Logo"
            width={110}
            height={40}
            style={{ objectFit: 'contain', maxHeight: '40px', width: 'auto' }}
          />
        </div>
      </div>
    </nav>
  );
}
