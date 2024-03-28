import BookingTable from "@/features/bookings/BookingTable";

const Bookings = () => {
  return (
    <>
      <div>
        <h1 className="mb-4 text-2xl font-semibold">All bookings</h1>
      </div>

      <BookingTable />
    </>
  );
};

export default Bookings;
