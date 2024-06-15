import { Title, Text } from '@/ui';
import { Button, Image } from '@nextui-org/react';
import { SocialNetworks } from './SocialNetworks';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="flex justify-center flex-wrap gap-8">
      <div className="flex justify-center w-full sm:w-auto">
        <Image width={200} alt="NextUI hero Image" src="/profile.jpeg" />
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col gap-3 max-w-[350px]">
          <Title className="text-[28px] font-bold">Hi, Im Jesus</Title>
          <Text className="text-[16px]">
            Software Engineering and SoloEntrepenuer
          </Text>
          <Text className="text-[14px]">
            Creating new products, working in a company, 2 startups and
            freelance.
          </Text>

          <Link href="mailto:jesusalvan2010@gmail.com?subject = Tech work&body = Hello!I want to have a meeting to talk">
            <Button className="max-w-[150px]" color="primary" fullWidth>
              Contactme
            </Button>
          </Link>
        </div>
        <SocialNetworks />
      </div>
    </section>
  );
};
