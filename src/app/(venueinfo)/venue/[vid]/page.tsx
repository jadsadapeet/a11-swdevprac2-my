import Image from 'next/image';
import getVenue from '@/libs/getVenue';

export default async function VenueDetailPage({ params }: { params: Promise<{ vid: string }> }) {
  const { vid } = await params;
  const venueDetail = await getVenue(vid);
  const venue = venueDetail.data;

  return (
    <main 
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#f9fafb',
        padding: '30px 40px', // เพิ่มระยะห่างจากขอบซ้ายของจอ
        textAlign: 'center'
      }}
    >
      {/* ชื่อสถานที่จัดงานอยู่ตรงกลางด้านบน */}
      <h1 
        style={{
          fontSize: '1.875rem',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#111827',
          marginBottom: '30px'
        }}
      >
        {venue.name}
      </h1>

      {/* คอนเทนเนอร์จัดชิดซ้าย (justifyContent: 'flex-start') ตามตัวอย่างในสไลด์หน้า 17 */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start', // บังคับให้เนื้อหาทั้งหมดวิ่งมาชิดซ้าย
          width: '100%',
          gap: '30px'
        }}
      >
        {/* กล่องรูปภาพ ชิดซ้ายและมีขอบมนพร้อมเงา */}
        <div 
          style={{ 
            position: 'relative', 
            width: '400px', 
            height: '260px',
            borderRadius: '12px',
            overflow: 'hidden',
            flexShrink: 0, // ไม่ให้รูปถูกบีบขนาด
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Image 
            src={venue.picture}
            alt={venue.name}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* ข้อมูลรายละเอียดด้านขวา จัดชิดซ้าย */}
        <div 
          style={{ 
            fontSize: '1rem', 
            color: '#374151',
            lineHeight: '1.8',
            textAlign: 'left'
          }}
        >
          <div style={{ fontWeight: 600, fontSize: '1.25rem', color: '#111827', marginBottom: '6px' }}>
            {venue.name}
          </div>
          <div>Name: {venue.name}</div>
          <div>Address: {venue.address}</div>
          <div>District: {venue.district}</div>
          <div>Postal Code: {venue.postalcode}</div>
          <div>Tel: {venue.tel}</div>
          <div>Daily Rate: {venue.dailyrate}</div>
        </div>
      </div>
    </main>
  );
}