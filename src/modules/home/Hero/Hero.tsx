import { Title, Text } from '@/ui';
import { Button, Image } from '@nextui-org/react';
import { SocialNetworks } from './SocialNetworks';

export const Hero = () => {
  return (
    <section className="flex justify-center flex-wrap gap-8">
      <div className="flex justify-center w-full sm:w-auto">
        <Image
          width={200}
          alt="NextUI hero Image"
          src="https://media.licdn.com/dms/image/C4D03AQHfDToGxIpppw/profile-displayphoto-shrink_200_200/0/1648072581843?e=1703116800&v=beta&t=cNEXVi84RJ7nv644eLoZjBBQO5OjG1-fX5ICrcpkRDc"
        />
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col gap-3 max-w-[350px]">
          <Title className="text-[28px] font-bold">Hi, Im Jesus</Title>
          <Text className="text-[16px]">
            Software Engineering and SoloEntrepenuer
          </Text>
          <Text className="text-[14px]">
            Creating new projects, innovating with new ideas and more things
          </Text>
          <Button className="max-w-[150px]" color="primary" fullWidth>
            Contactme
          </Button>
        </div>
        <SocialNetworks />
      </div>
    </section>
  );
};
