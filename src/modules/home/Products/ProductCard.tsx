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
}
export const ProductCard = ({ title, description }: IProductCard) => {
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
        <Button color="primary">Product</Button>
        <Button color="primary" variant="bordered">
          Github
        </Button>
      </CardFooter>
    </Card>
  );
};
