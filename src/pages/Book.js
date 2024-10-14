import './../App.css';
import AddBookingForm from './../components/AddBookingForm.js';
import AddBooking from './../components/AddBooking.js';
import { useParams } from 'react-router-dom';

const Book = () => {
  let { movie, price } = useParams();

  return (
    <>
      <AddBooking movie={movie} price={price} />
    </>
  );
};

export default Book;
