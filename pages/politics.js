import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import HeadSEO from '/components/head';
import TopMenu from '/components/topMenu';
import News from '/components/nationalNews';
import Headline from '/components/headline';
import { Grid } from '@mui/material';

const inter = Inter({ subsets: ['latin'] })

export default function PoliticsPage() {
  return (
    <>
      <HeadSEO />
      <main className={styles.main}>
        <TopMenu />
        <Headline />
        <Grid container spacing={2} className={styles.newsLayout}>
          <Grid item xs={12} >
            <News sliceNumber={24} keyword='national' column={4} />
          </Grid>
        </Grid>
      </main>
    </>
  )
}
