import './../App.css';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieVideoData from './../components/MovieVideoData.js';
import {
  PreviewButton,
  BuyButton,
  VideoButton,
  MovieImage,
  MovieImageSmall,
  TopBox,
  MenuBox,
  MovieBox,
  SpanSmall,
} from './../styles/Styles.js';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { createContext, useContext } from 'react';
const TitleContext = createContext();

const MovieData2 = () => {
  const [overview, setOverview] = useState('');
  const [imageurl, setImageurl] = useState('');

  let [showTrailer, setshowTrailer] = useState(false);
  let movie = 'The Lord of the Rings: The Two Towers';
  let price = 14.95;
  let movieId = '121';
  let index = 0;
  let [title, setTitle] = useState('The Lord of the Rings: The Two Towers');

  useMemo(async () => {
    let apikey = 'e616baa2599897c3606e114b8e44d308';
    let movie = 'lord-of-the-rings';
    const baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${movie}&language=en-US&page=1&include_adult=false`;

    await axios
      .get(baseURL)

      .then((response) => {
        setOverview(response.data.results[0].overview);
        setImageurl(response.data.results[2].poster_path);

        console.log(JSON.stringify(response.data, null, 2));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleShowTrailer = (e) => {
    e.preventDefault();
    setshowTrailer(true);
  };

  return (
    <>
      <MovieBox>
        {!showTrailer ? '' : <MovieVideoData movieId={movieId} index={index} />}

        <TopSmallImages imageurl={imageurl} />

        <br />

        <Link to={`/book/${movie}/${price}`}>
          <BuyButton>Book a ticket</BuyButton>
        </Link>

        <VideoButton onClick={handleShowTrailer}>View Trailer</VideoButton>

        <Link to={`/review/${movie}`}>
          <PreviewButton>Write a Review</PreviewButton>
        </Link>

        <p>
          <strong>
            <TitleContext.Provider value={title}>{title}</TitleContext.Provider>
          </strong>
        </p>

        <p>
          <SpanSmall> {overview} </SpanSmall>
        </p>

        <MovieImage src={'https://image.tmdb.org/t/p/w500' + imageurl} />
      </MovieBox>
    </>
  );
};

const TopSmallImages = (props) => {
  return (
    <>
      <span>
        <MovieImageSmall
          src={'https://image.tmdb.org/t/p/w500' + props.imageurl}
        />
      </span>
      <span>
        <MovieImageSmall
          src={'https://image.tmdb.org/t/p/w500' + props.imageurl}
        />
      </span>
      <span>
        <MovieImageSmall
          src={'https://image.tmdb.org/t/p/w500' + props.imageurl}
        />
      </span>
    </>
  );
};

export default MovieData2;
