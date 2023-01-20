import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import BuyButton from '@/components/BuyButton';

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
          <div>
            <div className={styles.card}>
              <Image
                src="/images/duck.jpg"
                width={250}
                height={250}
                alt="A rubber duck on my desk"
              />

              <h2 className={inter.className}>Duck</h2>
              <p className={inter.className}>
                A beautiful rubber duck to help you with all your debugging
                needs.
              </p>
              <BuyButton priceId="price_1MRieNBbNj5M8qMg2j1Neavt" />
            </div>
          </div>
          <div className={styles.card}>
            <Image
              src="/images/mug.jpg"
              width={250}
              height={250}
              alt="A rubber duck on my desk"
            />
            <h2 className={inter.className}>Mug</h2>
            <p className={inter.className}>
              A pretty boring mug to have your morning coffee with.
            </p>
            <BuyButton priceId="price_1MRieuBbNj5M8qMghbiaXD5q" />
          </div>
        </div>
      </main>
    </>
  );
}
