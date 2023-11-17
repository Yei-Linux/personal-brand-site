import { Product } from '@/templates/Product/Product';

type PageProps = {
  params: {
    slug: string;
  };
};
export default async function BlogFile({ params: { slug } }: PageProps) {
  return <Product slug={slug} />;
}
