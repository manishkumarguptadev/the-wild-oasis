export interface Booking {
  id: number;
  created_at: string;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  status: string;
  totalPrice: number;
  cabins: {
    name: string;
  } | null;
  guests: {
    fullName: string;
    email: string;
  } | null;
}
