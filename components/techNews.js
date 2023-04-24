import styles from '@/styles/news.module.scss';
import { useState, useEffect } from "react";
import { Grid } from '@mui/material';

export default function TechNews() {

    const [news, setNews] = useState([]);
    useEffect(() => {
      const apiKey = '7d13f82d7d75478fb8312dccb2473904';
      const techUrl = `https://newsapi.org/v2/everything?q=tech&apiKey=${apiKey}`;
      fetch(techUrl)
        .then((response) => response.json())
        .then((data) => setNews(data.articles))
        .catch((error) => console.log(error));
    }, []);

    const techNews = news.slice(0,6)
    console.log(techNews)
    // console.log(news)

  return (
    <div className={styles.container}>
    <h2>Tech</h2>
    <Grid container>
        
        {
            techNews.map((tech) => (
                <Grid item xs={12} sm={12} md={6} lg={4} key={tech.title}>
                    <a href={tech.url}>
                    <h3>{tech.title}</h3>
                    <img src={tech.urlToImage} alt={tech.title} width="200" height="160" />
                    <p>{tech.description}</p>
                    {/* <p>{tech.url}</p> */}
                    </a>
                </Grid>
                ))
        }
    </Grid>
    </div>
  )
}
