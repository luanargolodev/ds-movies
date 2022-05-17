import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const MoviesItem = (data) => {
  const [img, setImg] = useState(null);
  const url = `https://image.tmdb.org/t/p/w500${data.movie.poster_path}`;

  useEffect(() => {
    async function getImg() {
      const response = await fetch(url);
      setImg(response.url);
    }
    getImg();
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={img} alt={data.movie.title} />
      </div>
      <div className={styles.cardContent}>
        <h1 className={styles.title}>{data.movie.title}</h1>
        <p className={styles.points}>{data.movie.vote_average}</p>
        <span className={styles.assessments}>
          {data.movie.vote_count} avaliações
        </span>
        <button className={styles.button}>Avaliar</button>
      </div>
    </div>
  );
};

export default MoviesItem;
