import { productConfig } from '@/constants';
import { Feature, Hero } from '@/modules/product';

export interface IProduct {
  slug: string;
}

export const Product = ({ slug }: IProduct) => {
  const product = productConfig[slug];

  if (!product)
    return (
      <>
        <p>Product not found</p>
      </>
    );

  return (
    <main className="flex flex-col items-center p-4">
      <div>
        <Hero {...product.hero} productTitle={product.metadata.title} />
        <div className="mt-5 flex flex-row flex-wrap gap-5 justify-center">
          {product.features.map((feature, index) => (
            <Feature {...feature} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};
