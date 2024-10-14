import './../App.css';
import flower from './../images/flower5.jpg';
import { useState, useEffect } from 'react';
import { MovieBox, SpanSmall, ReviewButton } from './../styles/Styles.js';

const ListBooking = () => {
  let [bookings, setBookings] = useState([]);

  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem('bookings'));
    if (bookings) {
      setBookings(bookings);
    }
  }, []);

  const deleteBooking = (id) => {
    let newBookings = bookings.filter((booking) => booking.id !== id);
    setBookings([...newBookings]);
  };

  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
    console.log(bookings);
  }, [bookings]);

  return (
    <>
      <MovieBox>
        <span>
          <img alt="movie" className="ImageSmall" src={flower} />
        </span>
        <span>
          <img alt="movie" className="ImageSmall" src={flower} />
        </span>
        <span>
          <img alt="movie" className="ImageSmall" src={flower} />
        </span>
        {bookings.map((bookingitem) => {
          let { id, firstname, lastname, email, movie, price, num_of_tickets } =
            bookingitem;
          return (
            <div key={id}>
              <p>
                <SpanSmall>
                  <i>
                    {firstname} {lastname} <br />
                    {email} <br />
                    {movie} <br />
                  </i>
                  <strong>
                    Tickets: {num_of_tickets} <br />
                    Price: £ {price} <br />
                  </strong>
                </SpanSmall>
              </p>
              <ReviewButton onClick={() => deleteBooking(id)}>
                Delete your Booking
              </ReviewButton>
            </div>
          );
        })}
      </MovieBox>
    </>
  );
};

export default ListBooking;
