import styles from '@/styles/news.module.scss';
import { Grid } from '@mui/material';
import { useState, useEffect } from "react";

export default function News() {

    const [news, setNews] = useState([]);
    useEffect(() => {
      const apiKey = '7d13f82d7d75478fb8312dccb2473904';
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=au&apiKey=${apiKey}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setNews(data.articles))
        .catch((error) => console.log(error));
    }, []);

  return (
    <Grid className={styles.headlineContainer}>
      <Grid item xs={3} className={styles.newsHead}>
        <p>Trending Today</p>
      </Grid>
      <Grid item xs={9}>
        <ul className={styles.slidingHeadline}>
          {
              news.map((article) => (
                  <li key={article.title}>
                    <a href={article.url}>{article.title}</a> <span>|</span>
                  </li>
                  )
              )
          }
        </ul>
      </Grid>
    </Grid>
  )
}
