import './../App.css';
import flower from './../images/flower5.jpg';
import { useState, useEffect } from 'react';
import { MovieBox, SpanSmall, ReviewButton } from './../styles/Styles.js';

const ListReview = () => {
  let [reviews, setReviews] = useState([]);

  useEffect(() => {
    const reviews = JSON.parse(localStorage.getItem('reviews'));
    if (reviews) {
      setReviews(reviews);
    }
  }, []);

  const deleteReview = (id) => {
    let newReviews = reviews.filter((review) => review.id !== id);
    setReviews([...newReviews]);
  };

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
    console.log(reviews);
  }, [reviews]);

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

        {reviews.map((reviewitem, index) => {
          let { id, name, review } = reviewitem;
          return (
            <div key={index}>
              <p>
                <span>{review}</span> <br />
                <SpanSmall>
                  <i>{name}</i>
                </SpanSmall>
                <br />
              </p>
              <ReviewButton onClick={() => deleteReview(id)}>
                Delete your Review
              </ReviewButton>
            </div>
          );
        })}
      </MovieBox>
    </>
  );
};

export default ListReview;
