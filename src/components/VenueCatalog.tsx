import Link from "next/link";
import Card from "./Card";
import { VenueJson, VenueItem } from "../../interface";

export default async function VenueCatalog({ venuesJson }: { venuesJson: Promise<VenueJson> }) {
  const venuesReady = await venuesJson;

  return (
    <div 
      style={{
        margin: "30px auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center", // รวมศูนย์กลางไว้ตรงกลาง
        flexWrap: "wrap",
        gap: "160px",              // เพิ่มระยะห่างระหว่างการ์ดแต่ละใบตรงนี้
        padding: "20px",
        maxWidth: "1200px"
      }}
    >
      {venuesReady.data.map((venueItem: VenueItem) => (
        <Link 
          href={`/venue/${venueItem.id}`} 
          key={venueItem.id} 
          style={{ width: "280px", textDecoration: "none" }}
        >
          <Card 
            venueName={venueItem.name} 
            imgSrc={venueItem.picture} 
          />
        </Link>
      ))}
    </div>
  );
}