import { Title } from '@/ui';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from '@nextui-org/react';

export interface IProductCard {
  title: string;
  description: string;
  slug: string;
  githubLink: string;
}
export const ProductCard = ({
  title,
  description,
  slug,
  githubLink,
}: IProductCard) => {
  return (
    <Card className="max-w-[200px]">
      <CardHeader className="flex flex-col gap-2">
        <div className="flex flex-col">
          <Title className="text-[18px] text-[#848aff] font-semibold">
            {title}
          </Title>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-center text-[14px]">{description}</p>
      </CardBody>
      <CardFooter className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link href={`/products/${slug}`}>
          <Button color="primary">Product</Button>
        </Link>
        <Link href={githubLink}>
          <Button color="primary" variant="bordered">
            Github
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
