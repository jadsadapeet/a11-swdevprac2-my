"use client";

import { useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import type { Dayjs } from "dayjs";
import { Button } from "@mui/material";
import DateReserve from "@/components/DateReserve";
import { addBooking } from "@/redux/features/bookSlice";
import type { AppDispatch } from "@/redux/store";

export default function BookingForm() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [nameLastname, setNameLastname] = useState("");
  const [tel, setTel] = useState("");
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
  const [venue, setVenue] = useState("Bloom");
  const [dateError, setDateError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!reserveDate?.isValid()) {
      setDateError("Please choose a valid booking date.");
      return;
    }

    dispatch(
      addBooking({
        nameLastname: nameLastname.trim(),
        tel: tel.trim(),
        venue,
        bookDate: reserveDate.format("YYYY/MM/DD"),
      }),
    );
    router.push("/mybooking");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col items-center space-y-6"
    >
      <DateReserve
        nameLastname={nameLastname}
        tel={tel}
        reserveDate={reserveDate}
        venue={venue}
        onNameLastnameChange={setNameLastname}
        onTelChange={setTel}
        onReserveDateChange={(date) => {
          setReserveDate(date);
          setDateError("");
        }}
        onVenueChange={setVenue}
      />
      {dateError && (
        <p role="alert" className="text-sm text-red-600">
          {dateError}
        </p>
      )}
      <Button
        variant="contained"
        name="Book Venue"
        type="submit"
      >
        Book Venue
      </Button>
    </form>
  );
}
