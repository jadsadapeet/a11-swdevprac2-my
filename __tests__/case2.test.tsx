import '@testing-library/jest-dom'
import { screen, render, waitFor } from '@testing-library/react'
import BookingList from '@/components/BookingList';
import { renderWithProviders } from './testutils/utils-for-tests'

describe('Booking Page', () => {
  it('Booking page get functionality', () => {
    renderWithProviders(<BookingList/>)
    expect(screen.getByText(/James/i)).toBeInTheDocument
    expect(screen.getByText(/Bloom/i)).toBeInTheDocument 
  })
})