import Image from 'next/image';
import BuyButton from './BuyButton';

type ProductProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
  priceId: string;
};

export default function Product({
  image,
  alt,
  title,
  description,
  priceId,
}: ProductProps) {
  return (
    <div className="text-center w-96 md:w-72 flex flex-col mb-10 p-0 md:p-4">
      <Image
        src={`/images/${image}`}
        alt={alt}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
      />
      <div className="my-4">
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <p className="text-slate-500 text-sm">{description}</p>
      </div>
      <BuyButton priceId={priceId} />
    </div>
  );
}
