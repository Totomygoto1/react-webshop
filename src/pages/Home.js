import './../App.css';
import flower from './../images/flower5.jpg';
import { useState, useEffect } from 'react';
import { SpanSmall } from './../styles/Styles.js';

const Home = () => {
  return (
    <div className="Box1">
      <span>
        <img alt="movie" className="ImageSmall" src={flower} />
      </span>
      <span>
        <img alt="movie" className="ImageSmall" src={flower} />
      </span>
      <span>
        <img alt="movie" className="ImageSmall" src={flower} />
      </span>
      <br />
      <SpanSmall>
        Welcome!
        <br />
        Please Check out Current Movies at ODEON, Book a Movie Ticket or Write a
        Movie Review ...
      </SpanSmall>
    </div>
  );
};

export default Home;
