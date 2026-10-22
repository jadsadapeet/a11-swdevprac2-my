import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

interface CardProps {
  venueName: string;
  imgSrc: string;
  onRatingChange?: (venue: string, rating: number) => void;
}

export default function Card({ venueName, imgSrc, onRatingChange }: CardProps) {
  return (
    <InteractiveCard>
      {/* กรอบการ์ดสีขาว ขอบมน (rounded-xl) มีเงาฟุ้ง (shadow-md) และตัดส่วนเกิน (overflow-hidden) */}
      <div 
        style={{
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* รูปภาพแนบขอบบน สัดส่วนความสูงประมาณ 200px */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            height: '200px'
          }}
        >
          <Image
            src={imgSrc}
            alt={venueName}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            style={{
              objectFit: 'cover'
            }}
          />
        </div>

        {/* ส่วนข้อความด้านล่าง มีช่องว่าง (padding) สวยงาม และข้อความชิดซ้าย */}
        <div 
          style={{
            padding: '20px 16px',
            textAlign: 'left',
            minHeight: '90px'
          }}
        >
          <div 
            style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#1f2937'
            }}
          >
            {venueName}
          </div>

          {/* เงื่อนไขแสดง Rating เฉพาะเมื่อส่งฟังก์ชันมา ตามข้อกำหนดของโจทย์ */}
          {onRatingChange && (
            <div 
              onClick={(e) => {
                e.stopPropagation();
              }}
              style={{ marginTop: '8px', display: 'inline-block' }}
            >
              <Rating
                id={`${venueName} Rating`}
                name={`${venueName} Rating`}
                data-testid={`${venueName} Rating`}
                defaultValue={0}
                onChange={(event, newValue) => {
                  if (onRatingChange && newValue !== null) {
                    onRatingChange(venueName, newValue);
                  }
                }}
              />
            </div>
          )}
        </div>
      </div>
    </InteractiveCard>
  );
}