import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Empty from "../../ui/Empty";

import Spinner from "../../ui/Spinner";
import { useBookings } from "./useBookings";
import BookingRow from "./BookingRow";

function BookingTable() {
  const { bookings, isLoading } = useBookings();

  if (isLoading)
    return (
      <div className="flex h-[70%] items-center justify-center">
        <Spinner className="w-8 animate-spin" />
      </div>
    );

  if (!bookings?.length) return <Empty resourceName="bookings" />;

  return (
    <Table className="bg-white">
      <TableHeader className="bg-slate-50">
        <TableRow>
          <TableHead>CABIN</TableHead>
          <TableHead>GUEST</TableHead>
          <TableHead>DATES</TableHead>
          <TableHead>STATUS</TableHead>
          <TableHead>AMOUNT</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.map((booking) => (
          <BookingRow key={booking.id} booking={booking} />
        ))}
      </TableBody>
    </Table>
  );
}

export default BookingTable;
