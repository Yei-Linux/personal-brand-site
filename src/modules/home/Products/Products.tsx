import { Title, Text } from '@/ui';
import { ProductCard } from './ProductCard';
import { productConfig } from '@/constants';

export const Products = () => {
  return (
    <section className="flex flex-col gap-5 w-full max-w-[800px]">
      <div>
        <Title className="text-[28px] font-bold text-center">
          Some Products
        </Title>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {Object.entries(productConfig).map(
          ([
            slug,
            {
              img,
              siteLink,
              metadata,
              hero: { githubLink },
            },
          ]) => (
            <ProductCard
              img={img}
              key={slug}
              slug={slug}
              githubLink={githubLink ?? ''}
              siteLink={siteLink}
              {...metadata}
            />
          )
        )}
      </div>
    </section>
  );
};
