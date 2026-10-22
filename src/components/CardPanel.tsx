'use client'
import { useReducer } from 'react';
import Link from 'next/link';
import Card from './Card';

export default function CardPanel() {
  const ratingReducer = (state: Map<string, number>, action: { type: string, venueName: string, rating?: number }) => {
    switch (action.type) {
      case 'SET_RATING': {
        const newState = new Map(state);
        if (action.rating !== undefined) {
          newState.set(action.venueName, action.rating);
        }
        return newState;
      }
      case 'REMOVE_VENUE': {
        const newState = new Map(state);
        newState.delete(action.venueName);
        return newState;
      }
      default:
        return state;
    }
  };

  const initialRatings = new Map<string, number>([
    ['The Bloom Pavilion', 0],
    ['Spark Space', 0],
    ['The Grand Table', 0],
  ]);

  const [ratingMap, dispatch] = useReducer(ratingReducer, initialRatings);

  // Mock รายการสถานที่พร้อม vid ตามโจทย์ A07
  const mockVenueList = [
    { vid: '001', name: 'The Bloom Pavilion', image: '/img/bloom.jpg' },
    { vid: '002', name: 'Spark Space', image: '/img/sparkspace.jpg' },
    { vid: '003', name: 'The Grand Table', image: '/img/grandtable.jpg' },
  ];

  return (
    <div>
      {/* ส่วนแสดง Card ทั้ง 3 ใบ จัดเรียงแบบ Flexbox */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          padding: '40px 20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
        className="flex flex-row flex-wrap justify-center items-center gap-8 p-10 max-w-6xl mx-auto"
      >
        {
          mockVenueList.map((venueItem) => (
            /* กำหนดความกว้างของ Link ให้กว้าง 320px เพื่อให้ตัว Card ขยายใหญ่เต็มตา */
            <Link 
              href={`/venue/${venueItem.vid}`} 
              key={venueItem.vid}
              className="w-[320px] block"
              style={{ width: '320px' }}
            >
              <Card 
                venueName={venueItem.name} 
                imgSrc={venueItem.image} 
                onRatingChange={(venue: string, rating: number) => {
                  dispatch({ type: 'SET_RATING', venueName: venue, rating: rating });
                }}
              />
            </Link>
          ))
        }
      </div>

      {/* ส่วนแสดงรายการ Venue List ด้านล่าง */}
      <div style={{ margin: "20px 40px", fontSize: "20px", fontWeight: "bold" }}>
        Venue List with Ratings: {ratingMap.size}
      </div>
      
      <div style={{ margin: "20px 40px" }}>
        {Array.from(ratingMap.entries()).map(([venueName, rating]) => (
          <div 
            key={venueName} 
            data-testid={venueName} 
            onClick={() => dispatch({ type: 'REMOVE_VENUE', venueName: venueName })}
            style={{ cursor: "pointer", margin: "5px 0", fontSize: "18px" }}
          >
            {venueName}: {rating}
          </div>
        ))}
      </div>
    </div>
  );
}