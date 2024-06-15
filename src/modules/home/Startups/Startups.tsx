import { Title } from '@/ui';
import { Image } from '@nextui-org/react';

export const Startups = () => {
  return (
    <section className="flex flex-col gap-5 w-full">
      <div>
        <Title className="text-[28px] font-bold text-center">
          Startups where I belonged
        </Title>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        <Image width={100} alt="NextUI hero Image" src="/anna.jpeg" />
        <Image width={100} alt="NextUI hero Image" src="/qeto.jpeg" />
      </div>
    </section>
  );
};
