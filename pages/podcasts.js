import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import HeadSEO from '/components/head';
import TopMenu from '/components/topMenu';
import Headline from '/components/headline';
import { Grid } from '@mui/material';

const inter = Inter({ subsets: ['latin'] })

export default function Podcasts() {
  return (
    <>
      <HeadSEO />
      <main className={styles.main}>
        <TopMenu />
        <Headline />
        <h1>preparing...</h1>
        <Grid container spacing={2} className={styles.newsLayout}>
          <Grid item xs={12} sm={8} md={9} lg={9} >
            whether container 9
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={3} >
            whether container 3
          </Grid>
        </Grid>
        {/* <img src={} alt="image" /> */}
      </main>
    </>
  )
}
