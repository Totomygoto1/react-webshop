import './../App.css';
import { memo } from 'react';
import flower from './../images/flower5.jpg';
import { MovieBox, SpanSmall, ReviewButton } from './../styles/Styles.js';

const AddBookingForm = (props) => {
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
        <form>
          <p>
            <strong> {props.movie} </strong> <br />
            <SpanSmall>
              Price: £ {(props.price * props.state.amount).toFixed(2)}
            </SpanSmall>
            <br />
            <br />
            <SpanSmall>Tickets: {props.state.amount} </SpanSmall>
            <ReviewButton onClick={props.plusTicket}> + </ReviewButton>
            <ReviewButton onClick={props.minusTicket}> - </ReviewButton> <br />
          </p>

          <input
            placeholder="First name"
            value={props.firstname}
            onChange={props.handleFirstNameChange}
          />

          <br />

          <input
            placeholder="Last name"
            value={props.lastname}
            onChange={props.handleLastNameChange}
          />

          <br />

          <input
            placeholder="Email"
            value={props.email}
            onChange={props.handleEmailChange}
          />

          <br />
          <br />

          <ReviewButton onClick={props.handleSaveBooking}>
            Add your Booking
          </ReviewButton>
          <br />
          <br />

          <SpanSmall>
            <i>
              <span id="error"></span>
            </i>
          </SpanSmall>
        </form>
      </MovieBox>
    </>
  );
};

export default memo(AddBookingForm);
