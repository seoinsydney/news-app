import styles from '@/styles/news.module.scss';
import { useState, useEffect } from "react";

export default function LatestNews() {

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
    <div className={styles.slidingHeadline}>
        {
            news.map((article) => (
                <section key={article.title}>
                  <h3>
                  <a href={article.url}>{article.title}</a>
                  </h3>
                </section>
                )
            )
        }
    </div>
  )
}
