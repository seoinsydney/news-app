import styles from '@/styles/news.module.scss';
import { useState, useEffect } from "react";
import { Grid } from '@mui/material';

export default function NewsList({sliceNumber, keyword}) {

    const [news, setNews] = useState([]);
    useEffect(() => {
      const apiKey = '7d13f82d7d75478fb8312dccb2473904';
      const apiKeyword = keyword;
      const techUrl = `https://newsapi.org/v2/everything?q=${apiKeyword}&apiKey=${apiKey}`;
      fetch(techUrl)
        .then((response) => response.json())
        .then((data) => setNews(data.articles))
        .catch((error) => console.log(error));
    }, []);
    const newsList = news.slice(0,sliceNumber)

  return (
    <div className={styles.container}>
    <Grid container>
        {
          newsList.map((tech) => (
            <Grid item xs={12} sm={6} md={6} lg={4} 
            key={tech.title} 
            className={styles.newsList}>
              <a href={tech.url}>
                <img src={tech.urlToImage} alt={tech.title} width="400" height="250" />
                <h3>{tech.title}</h3>
              </a>
            </Grid>
            ))
        }
    </Grid>
    </div>
  )
}
