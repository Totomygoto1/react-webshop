import './../App.css';
import AddBookingForm from './../components/AddBookingForm.js';
import { useState, useEffect } from 'react';
import { useMemo, useCallback, memo } from 'react';
import { useReducer } from 'react';
import { initialState, reducer } from './../hooks/TicketReducer.js';

const AddBooking = (props) => {
  let [bookings, setBookings] = useState([]);
  let [firstname, setFirstName] = useState('');
  let [lastname, setLastName] = useState('');
  let [email, setEmail] = useState('');

  const [state, dispatch] = useReducer(reducer, initialState);

  const plusTicket = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD' });
  };

  const minusTicket = (e) => {
    e.preventDefault();
    dispatch({ type: 'RETRACT' });
  };

  const handleFirstNameChange = (e) => {
    firstname = setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    lastname = setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    email = setEmail(e.target.value);
  };

  const handleSaveBooking = useCallback((e) => {
    e.preventDefault();

    if (firstname && lastname && email) {
      let uniqueId =
        new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
      let newBooking = {
        id: uniqueId,
        firstname: firstname,
        lastname: lastname,
        email: email,
        movie: props.movie,
        price: (props.price * state.amount).toFixed(2),
        num_of_tickets: state.amount,
      };
      setBookings([newBooking, ...bookings]);
      document.getElementById('error').innerHTML =
        ' Thank you, your Booking have been successfully placed. ';
    } else {
      document.getElementById('error').innerHTML =
        ' You must fill in your family name and your email address ... ';
    }
  });

  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem('bookings'));
    if (bookings) {
      setBookings(bookings);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
    console.log(bookings);
  }, [bookings]);

  return (
    <>
      <AddBookingForm
        plusTicket={plusTicket}
        minusTicket={minusTicket}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        handleEmailChange={handleEmailChange}
        handleSaveBooking={handleSaveBooking}
        firstname={firstname}
        lastname={lastname}
        email={email}
        state={state}
        movie={props.movie}
        price={props.price}
      />
    </>
  );
};

export default AddBooking;
