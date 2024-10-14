import './../App.css';
import AddReview from './../components/AddReview.js';
import { useParams } from 'react-router-dom';

const Review = () => {
  let { movie } = useParams();

  return (
    <>
      <AddReview movie={movie} />
    </>
  );
};

export default Review;
