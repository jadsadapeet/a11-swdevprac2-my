import BookingList from "@/components/BookingList";

export default function MyBookingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900">My Booking</h1>
      <BookingList />
    </main>
  );
}
