import { Title } from '@/ui';
import { Button, Image, Link } from '@nextui-org/react';

export interface IHero {
  productTitle?: string;
  title: string;
  description: string;
  githubLink?: string;
  productSiteExternalLink?: string;
  imageProduct: string;
}

export const Hero = ({
  title,
  description,
  githubLink,
  productSiteExternalLink,
  imageProduct,
  productTitle,
}: IHero) => {
  return (
    <div className="w-[100%] p-10 my-15">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col justify-center items-center mb-5">
          <Image width={200} alt="NextUI hero Image" src={imageProduct} />
          <Title className="text-[22px] font-semibold text-primary">
            {productTitle}
          </Title>
        </div>
        <Title className="text-[25px] font-semibold">{title}</Title>
        <p>{description}</p>
        <div className="flex gap-5">
          <Link href={productSiteExternalLink}>
            <Button color="primary">Site</Button>
          </Link>
          {githubLink && (
            <Link href={githubLink}>
              <Button color="primary" variant="bordered">
                Github
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
