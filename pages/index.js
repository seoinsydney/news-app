import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import HeadSEO from '/components/head';
import TopMenu from '/components/topMenu';
import News from '/components/News';
import NationalNews from '/components/nationalNews';
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
        <Grid container spacing={2} className={styles.newsLayout}>
          <Grid item xs={12}>
            <h6>National</h6>
            <NationalNews sliceNumber={3} keyword='national' column={4} />
            <h6>World</h6>
            <News sliceNumber={4} keyword='world' />
            <h6>Politics</h6>
            <News sliceNumber={4} keyword='politics' />
            <h6>Tech</h6>
            <News sliceNumber={4} keyword='tech' />
            <h6>Sports</h6>
            <News sliceNumber={4} keyword='sports'/>
            <h6>Travel</h6>
            <News sliceNumber={4} keyword='travel'/>
            <h6>Covid</h6>
            <News sliceNumber={4} keyword='covid'/>
          </Grid>
        </Grid>
      </main>
    </>
  )
}
