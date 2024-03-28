import { Badge } from "@/components/ui/badge";
import { formatCurrency, formatDistanceFromNow } from "@/utils/helpers";
import { format, isToday } from "date-fns";

import { TableCell, TableRow } from "@/components/ui/table";
import { Booking } from "@/types/Booking";

function BookingRow({ booking }: { booking: Booking }) {
  return (
    <>
      <TableRow key={booking.id}>
        <TableCell className="font-medium">{booking.cabins?.name}</TableCell>
        <TableCell>
          <p className="font-semibold">{booking.guests?.fullName}</p>
          <p>{booking.guests?.email}</p>
        </TableCell>
        <TableCell>
          {" "}
          <p className="font-semibold">
            {isToday(new Date(booking.startDate))
              ? "Today"
              : formatDistanceFromNow(booking.startDate)}{" "}
            &rarr; {booking.numNights} night stay
          </p>
          <p>
            {format(new Date(booking.startDate), "MMM dd yyyy")} &mdash;{" "}
            {format(new Date(booking.endDate), "MMM dd yyyy")}
          </p>
        </TableCell>
        <TableCell>
          <Badge
            className={
              booking.status === "checked-in"
                ? "bg-green-200 text-green-600"
                : booking.status === "checked-out"
                  ? "bg-gray-200 text-gray-600"
                  : "bg-blue-200 text-blue-600"
            }
          >
            {booking.status.replace("-", " ").toUpperCase()}
          </Badge>
        </TableCell>
        <TableCell className="font-semibold">
          {formatCurrency(booking.totalPrice)}
        </TableCell>
      </TableRow>
    </>
  );
}

export default BookingRow;
