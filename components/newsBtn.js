import styles from '@/styles/news.module.scss';
import axios from 'axios';
import { useState } from "react";


export default function News({news}) {
    // console.log(news)
    var apiKey = '7d13f82d7d75478fb8312dccb2473904';
    var type = 'Apple';
    var sortBy = 'popularity';

    // const headlineUrl = `https://newsapi.org/v2/top-headlines?country=au&apiKey=${apiKey}`;
    const newsUrl = `https://newsapi.org/v2/everything?q=${type}&sortBy=${sortBy}&apiKey=${apiKey}`;
    // const allUrl = 'https://newsapi.org/v2/everything?q=keyword&apiKey=7d13f82d7d75478fb8312dccb2473904';

    const [data, setData] = useState();
    const GrabNews = () => {
        axios.get(newsUrl)
            .then((response) => {
                    console.clear()
                    setData(response.data);
                    console.log(response.data)
                }).catch(err => {
                    console.log(err)
                })
    }

  return (
    <div className={styles.container}>
        
        <button
        onClick={() => GrabNews()}>
            News
        </button>
        {
            data && data.articles.map((article) => (
                <div key={article.title}>
                <h3>{article.title}</h3>
                <p>{article.author}</p>
                <p>{article.description}</p>
                <p>{article.content}</p>
                <p>{article.publishedAt}</p>
                {/* <p>{article.urlToImage}</p> */}
                <p><a href={article.url}>website</a></p>
                <img src={article.urlToImage} alt={article.title} width="300" height="200" />
                </div>
                ))
        }
    </div>
  )
}
