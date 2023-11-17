import { Title } from '@/ui';
import { Card, CardBody, Button } from '@nextui-org/react';
import Link from 'next/link';

export type TFeature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const Feature = ({ description, title, icon }: TFeature) => {
  return (
    <Card className="max-w-[250px]">
      <CardBody className="flex flex-row w-[100%] justify-between">
        <div className="flex flex-col gap-5">
          <div>
            {icon && icon}
            <Title className="text-[20px] font-semibold text-primary">
              {title}
            </Title>
          </div>
          <p className="text-[14px]">{description}</p>
        </div>
      </CardBody>
    </Card>
  );
};
