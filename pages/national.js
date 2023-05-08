import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import HeadSEO from '/components/head';
import TopMenu from '/components/topMenu';
import News from '/components/nationalNews';
import SideWeather from '/components/sideWeather';
import Headline from '/components/headline';
import { Grid } from '@mui/material';

const inter = Inter({ subsets: ['latin'] })

export default function NationalPage() {
  return (
    <>
      <HeadSEO />
      <main className={styles.main}>
        <TopMenu />
        <Headline />
        <Grid container spacing={2} className={styles.newsLayout}>
          <Grid item xs={12} sm={8} md={9} lg={9} >
            <News sliceNumber={100} keyword='national' column={4} />
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={3} >
            <SideWeather />
          </Grid>
        </Grid>
      </main>
    </>
  )
}
