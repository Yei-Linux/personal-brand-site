import { Title, Text } from '@/ui';
import { ServiceCard } from './ServiceCard';

export const Services = () => {
  return (
    <section className="flex flex-col gap-5">
      <div>
        <Title className="text-[28px] font-bold text-center">Services</Title>
        <Text className="text-[12px] text-center">My services</Text>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <ServiceCard
          title="Development"
          description="Complete development process, scalable and performant"
        />
        <ServiceCard
          title="Deployment"
          description="Complete development process, scalable and performant"
        />
        <ServiceCard
          title="Support"
          description="Complete development process, scalable and performant"
        />
      </div>
    </section>
  );
};
