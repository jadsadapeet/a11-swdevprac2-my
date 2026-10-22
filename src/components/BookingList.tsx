"use client";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";

export default function BookingList() {
  const dispatch = useDispatch();
  const bookings = useSelector(
    (state: RootState) => state.bookSlice.bookItems,
  );

  if (bookings.length === 0) {
    return <p className="text-gray-700">No Venue Booking</p>;
  }

  return (
    <ul className="grid w-full max-w-3xl gap-4">
      {bookings.map((booking) => (
        <li
          key={`${booking.venue}-${booking.bookDate}`}
          className="rounded-lg border border-gray-200 bg-white p-5 text-left text-gray-800 shadow-sm"
        >
          <dl className="grid gap-2">
            <div>
              <dt className="inline font-semibold">Name: </dt>
              <dd className="inline">{booking.nameLastname}</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Telephone: </dt>
              <dd className="inline">{booking.tel}</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Venue: </dt>
              <dd className="inline">{booking.venue}</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Booking date: </dt>
              <dd className="inline">{booking.bookDate}</dd>
            </div>
          </dl>
          <button
            type="button"
            onClick={() => dispatch(removeBooking(booking))}
            className="mt-4 rounded bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
          >
            Cancel Booking
          </button>
        </li>
      ))}
    </ul>
  );
}
