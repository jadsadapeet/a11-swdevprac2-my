import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function VenuePage() {
  const venues = getVenues();

  return (
    <main 
      style={{ 
        width: "100%", 
        minHeight: "100vh",
        backgroundColor: "#b8b8be", // สีพื้นหลังเทาขาวนวลตามสไลด์
        textAlign: "center", 
        padding: "30px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div style={{ textAlign: "center", width: "100%", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", margin: "0 auto", color: "#111827" }}>
          Select your venue
        </h1>
        <p style={{ fontSize: "1rem", color: "#6b7280", textAlign: "center", marginTop: "8px" }}>
          Explore 3 fabulous venues in our venue catalog
        </p>
      </div>
      
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...<LinearProgress /></p>}>
        <VenueCatalog venuesJson={venues} />
      </Suspense>
    </main>
  );
}