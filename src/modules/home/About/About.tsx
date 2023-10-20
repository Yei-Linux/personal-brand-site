import { Title, Text } from '@/ui';
import { Button, Image } from '@nextui-org/react';
import { Achievements } from './Achievements';

export const About = () => {
  return (
    <section className="flex flex-col gap-3 items-center">
      <div>
        <Title className="text-[28px] font-bold text-center">About Me</Title>
        <Text className="text-[12px] text-center">My introduction</Text>
      </div>
      <div className="flex justify-between gap-8">
        <div className="flex flex-col items-center gap-5 max-w-[350px]">
          <Text className="text-[14px] text-center">
            Creating new projects, innovating with new ideas and more things
          </Text>
          <Achievements>
            <Achievements.Item title="5+" description="companies" />
            <Achievements.Item title="5+" description="entreprenuers" />
            <Achievements.Item title="5+" description="libraries" />
          </Achievements>
          <Button
            className="max-w-[150px]"
            color="primary"
            fullWidth
            variant="bordered"
          >
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};
