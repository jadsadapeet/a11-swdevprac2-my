'use client'

import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TextField, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import type { Dayjs } from 'dayjs'

interface DateReserveProps {
  nameLastname: string
  tel: string
  reserveDate: Dayjs | null
  venue: string
  onNameLastnameChange: (value: string) => void
  onTelChange: (value: string) => void
  onReserveDateChange: (value: Dayjs | null) => void
  onVenueChange: (value: string) => void
}

export default function DateReserve({
  nameLastname,
  tel,
  reserveDate,
  venue,
  onNameLastnameChange,
  onTelChange,
  onReserveDateChange,
  onVenueChange,
}: DateReserveProps) {
  return (
    <div className="flex flex-col space-y-5 w-full max-w-md">
      <TextField
        variant="standard"
        name="Name-Lastname"
        label="Name-Lastname"
        fullWidth
        required
        value={nameLastname}
        onChange={(event) => onNameLastnameChange(event.target.value)}
      />

      <TextField
        variant="standard"
        name="Contact-Number"
        label="Contact-Number"
        fullWidth
        required
        value={tel}
        onChange={(event) => onTelChange(event.target.value)}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="bg-white"
          value={reserveDate}
          onChange={onReserveDateChange}
          slotProps={{ textField: { required: true } }}
        />
      </LocalizationProvider>

      <Select
        variant="standard"
        id="venue"
        value={venue}
        onChange={(event: SelectChangeEvent) => onVenueChange(event.target.value)}
        fullWidth
      >
        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
        <MenuItem value="Spark">Spark Space</MenuItem>
        <MenuItem value="GrandTable">The Grand Table</MenuItem>
      </Select>
    </div>
  )
}