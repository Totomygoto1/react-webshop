import './../App.css';
import { useState, useEffect, useCallback } from 'react';
import AddReviewForm from './../components/AddReviewForm.js';
import { useParams } from 'react-router-dom';

const AddReview = (props) => {
  let [reviews, setReviews] = useState([]);
  let [name, setName] = useState('');
  let [review, setReview] = useState('');
  let { movie } = useParams();

  const handleReviewChange = (e) => {
    review = setReview(e.target.value);
  };

  const handleSaveReview = useCallback((e) => {
    e.preventDefault();

    if (review) {
      setName(movie);
      let uniqueId =
        new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
      let newReview = {
        id: uniqueId,
        name: movie,
        review: review,
      };
      setReviews([newReview, ...reviews]);
      document.getElementById('error').innerHTML =
        ' Thank you for writing a Movie Review :-) ';
    } else {
      document.getElementById('error').innerHTML =
        '  You must fill in a review ... ';
    }
  });

  useEffect(() => {
    const reviews = JSON.parse(localStorage.getItem('reviews'));
    if (reviews) {
      setReviews(reviews);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
    console.log(reviews);
  }, [reviews]);

  return (
    <>
      <AddReviewForm
        handleReviewChange={handleReviewChange}
        handleSaveReview={handleSaveReview}
        name={movie}
        review={review}
      />
    </>
  );
};

export default AddReview;
