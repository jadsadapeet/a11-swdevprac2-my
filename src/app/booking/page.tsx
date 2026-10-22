import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";
import BookingForm from "@/components/BookingForm";

export default async function Booking() {
  const session = await getServerSession(authOptions);
  let profile = null;

  if (session && session.user?.token) {
    profile = await getUserProfile(session.user.token);
  }

  return (
    <main className="p-8 text-center flex flex-col items-center">
      {/* ส่วนแสดงข้อมูล User Profile ด้านบนตามสไลด์ */}
      {profile && (
        <div className="bg-slate-100 p-6 rounded-lg mb-6 w-full max-w-md text-left shadow-sm">
          <div className="text-xl font-bold mb-4 text-slate-800">User Profile</div>
          <div className="space-y-2 text-slate-700">
            <div><span className="font-semibold">Name:</span> {profile.data.name}</div>
            <div><span className="font-semibold">Email:</span> {profile.data.email}</div>
            <div><span className="font-semibold">Tel.:</span> {profile.data.tel}</div>
            <div><span className="font-semibold">Member Since:</span> {profile.data.createdAt}</div>
          </div>
        </div>
      )}

      {/* ฟอร์มการจอง Venue */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Venue Booking</h1>
      
      <BookingForm />
    </main>
  );
}
