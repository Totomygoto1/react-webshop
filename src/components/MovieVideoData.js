import axios from 'axios';
import { useState, useMemo } from 'react';

const MovieVideoData = (props) => {
  let [url, setVideoURL] = useState('');
  let [name, setName] = useState('');

  useMemo(async () => {
    let baseUrl =
      (axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/${props.movieId}/videos`);
    axios.defaults.headers.common['Authorization'] =
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjE2YmFhMjU5OTg5N2MzNjA2ZTExNGI4ZTQ0ZDMwOCIsInN1YiI6IjY1MjBmNDczYzFmZmJkMDExYjQzMDZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mXrWedbZN2YxvEfrhaXsBZf7l6OYV0S-piD9efb1aBw';
    axios.defaults.headers.get['Content-Type'] = 'application/json';
    axios.defaults.method = 'get';

    await axios
      .get(baseUrl)

      .then((res) => {
        console.log(res);

        setVideoURL(
          'https://www.youtube.com/embed/' + res.data.results[props.index].key,
        );
        window.open(
          'https://www.youtube.com/embed/' + res.data.results[props.index].key,
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <></>;
};

export default MovieVideoData;
