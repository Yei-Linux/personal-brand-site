import { Title } from '@/ui';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { AiOutlineGithub } from 'react-icons/ai';

export interface IServiceCard {
  icon?: React.ReactNode;
  title: string;
  description: string;
}
export const ServiceCard = ({ icon, title, description }: IServiceCard) => {
  return (
    <Card className="max-w-[200px]">
      <CardHeader className="flex flex-col gap-2">
        {icon ?? <AiOutlineGithub size="30px" />}
        <div className="flex flex-col">
          <Title className="text-[18px] text-[#848aff] font-semibold">
            {title}
          </Title>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-center text-[14px]">{description}</p>
      </CardBody>
    </Card>
  );
};
