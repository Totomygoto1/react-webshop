import './../App.css';
import { memo } from 'react';
import flower from './../images/flower5.jpg';
import { MovieBox, SpanSmall, ReviewButton } from './../styles/Styles.js';

const AddReviewForm = (props) => {
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
        <form onSubmit={props.handleSaveReview}>
          <textarea
            placeholder="Write a Review ..."
            name="review"
            value={props.review}
            onChange={props.handleReviewChange}
            rows={4}
            cols={40}
          />
          <br />
          <SpanSmall>
            <i>{props.name}</i>
          </SpanSmall>
          <br />
          <br />
          <ReviewButton type="submit">Add your Review</ReviewButton>
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

export default memo(AddReviewForm);
