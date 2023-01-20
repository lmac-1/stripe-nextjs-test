import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Product from '@/components/Product';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Lucy's shop</title>
        <meta
          name="description"
          content="A simple shop to buy things from my desk"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className={inter.className}>Buy something from my desk</h1>
        </div>

        <div className={styles.grid}>
          <Product
            image="duck.jpg"
            alt="A rubber duck on my desk"
            title="Duck"
            description="A beautiful rubber duck to help you with all your debugging needs."
            priceId="price_1MRieNBbNj5M8qMg2j1Neavt"
            inter={inter}
          />
          <Product
            image="mug.jpg"
            alt="A mug on my desk"
            title="Mug"
            description="A pretty boring mug to have your morning coffee with."
            priceId="price_1MRieuBbNj5M8qMghbiaXD5q"
            inter={inter}
          />
        </div>
      </main>
    </>
  );
}
