'use client'

import React, { useState } from 'react'

export default function InteractiveCard({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false)

  function onCardMouseAction(event: React.SyntheticEvent) {
    if (event.type === 'mouseover') {
      setIsHovered(true)
    } else {
      setIsHovered(false)
    }
  }

  return (
    <div
      /* เพิ่ม w-full h-[300px] และ overflow-hidden ตามสไลด์หน้า 21 */
      className={`w-full h-[300px] rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
        isHovered ? 'shadow-2xl bg-neutral-200' : 'shadow-lg bg-white'
      }`}
      onMouseOver={onCardMouseAction}
      onMouseOut={onCardMouseAction}
    >
      {children}
    </div>
  )
}