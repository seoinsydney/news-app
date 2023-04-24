import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import HeadSEO from '/components/head';
import TopMenu from '/components/topMenu';
// import News from '/components/news';
import TechNews from '/components/techNews';
import Headline from '/components/headline';
import { Grid } from '@mui/material';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeadSEO />
      <main className={styles.main}>
        <TopMenu />
        <Headline />
        <Grid container spacing={3} className={styles.newsLayout}>
          <Grid item xs={3}>
            <h2>Weather</h2>
          </Grid>
          <Grid item xs={6}>
            {/* <News /> */}
            <TechNews />
          </Grid>
          <Grid item xs={3}>
            <h2>Latest news</h2>
          </Grid>
        </Grid>

        {/* <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
        </div> */}

      </main>
    </>
  )
}
