import styles from '@/styles/news.module.scss';
import { useState, useEffect } from "react";
import { Grid } from '@mui/material';

export default function SideWeather() {

    const [weather, setWeather] = useState([]);
    useEffect(() => {
      const apiKey = '33d4cb81f5a78858df7963c310333999';
      const lat =  -33.865143;
      const lon = 151.209900;
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      fetch(weatherUrl)
        .then((response) => response.json())
        .then((data) => setWeather(data.weather))
        .catch((error) => console.log(error));
    }, []);

    console.log(weather)

  return (
    <Grid container className={styles.container}>
        <Grid item xs={12} sm={12} md={12} lg={12} className={styles.weather}>
            {
                weather.length === 1 ?
                <>
                <h3>{weather[0].description}</h3>
                <h3>{weather[0].icon}</h3>
                <h3>{weather[0].main}</h3>
                <h3>{weather[0].id}</h3>
                </>
                :
                <>error</>
            }
            {/* <a href={weather.url}> */}
            {/* <img src={weather.icon} alt={tech.title} width="300" height="150" /> */}
            <h3>{weather.description}</h3>
            <h3>{weather.title}</h3>
            <h3>{weather.title}</h3>
            <h3>{weather.title}</h3>
            {/* </a> */}
        </Grid>
    </Grid>
  )
}
