import Head from 'next/head';
import Product from '@/components/Product';

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
      <main className="p-20">
        <h1 className="text-4xl font-bold flex justify-center mb-16">
          Buy something from my desk
        </h1>
        <div className="flex flex-wrap justify-center">
          <Product
            image="duck.jpg"
            alt="A rubber duck on my desk"
            title="Duck"
            description="A beautiful rubber duck to help you with all your debugging needs."
            priceId="price_1MRieNBbNj5M8qMg2j1Neavt"
          />
          <Product
            image="mug.jpg"
            alt="A mug on my desk"
            title="Mug"
            description="A pretty boring mug to have your morning coffee with."
            priceId="price_1MRieuBbNj5M8qMghbiaXD5q"
          />
        </div>
      </main>
    </>
  );
}
