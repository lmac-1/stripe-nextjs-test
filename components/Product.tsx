import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import BuyButton from './BuyButton';
import { NextFont } from '@next/font';

type ProductProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
  priceId: string;
  /* todo: check how to properly use custom fonts */
  inter: NextFont;
};

export default function Product({
  image,
  alt,
  title,
  description,
  priceId,
  inter,
}: ProductProps) {
  return (
    <div className={styles.card}>
      <Image src={`/images/${image}`} width={250} height={250} alt={alt} />
      <div className={styles.product}>
        <h2 className={inter.className}>{title}</h2>
        <p className={inter.className}>{description}</p>
      </div>
      <BuyButton priceId={priceId} />
    </div>
  );
}
