import '@testing-library/jest-dom'
import { screen, render, waitFor } from '@testing-library/react'
import bookSlice, { addBooking, removeBooking } from '@/redux/features/bookSlice'

const initialState = { bookItems: [] }
const testBookingData1 = {
  nameLastname: "David Smith",
  tel: "0845526325",
  venue: "Bloom",
  bookDate: "2025/03/21"
};

const testBookingData2 = {
  nameLastname: "Jane Adison",
  tel: "0925447885",
  venue: "GrandTable",
  bookDate: "2025/05/18"
};

const testBookingData3 = {
  nameLastname: "James Weston",
  tel: "0827789544",
  venue: "Bloom",
  bookDate: "2025/03/21"
};

describe('bookSlice', () => {
  
  it('bookSlice reducer works correctly', () => {
    const afterAddReducer1 = bookSlice(initialState, addBooking(testBookingData1))
    expect(afterAddReducer1.bookItems.length).toBe(1)
    const afterAddReducer2 = bookSlice(afterAddReducer1, addBooking(testBookingData2))
    expect(afterAddReducer2.bookItems.length).toBe(2)
    const afterAddReducer3 = bookSlice(afterAddReducer2, addBooking(testBookingData3))
    expect(afterAddReducer3.bookItems.length).toBe(2)

    const afterRemoveReducer = bookSlice(afterAddReducer3, removeBooking(testBookingData2))
    expect(afterRemoveReducer.bookItems.length).toBe(1)
    expect(afterRemoveReducer.bookItems[0].tel).toBe("0827789544")
    expect(afterRemoveReducer.bookItems[0].venue).toBe("Bloom")
  })

  
})
