import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

import MoviesItem from '../MoviesItem';

const link =
  'https://api.themoviedb.org/3/movie/popular?api_key=87533c310d3e816e461feca9a728b65f&language=pt-BR&page=1';

const Movies = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(link);
      const json = await response.json();
      setData(json);
    }
    getData();
  }, []);

  return (
    <main className={`${styles.main} container`}>
      {data &&
        data.results.map((movie) => (
          <MoviesItem key={movie.id} movie={movie} />
        ))}
    </main>
  );
};

export default Movies;
