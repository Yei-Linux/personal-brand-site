import { Title, Text } from '@/ui';
import { Button, Image } from '@nextui-org/react';
import { Achievements } from './Achievements';
import Link from 'next/link';

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
            I like creating new tech products, helping to solve problems and
            work in group. Currently Im working for a company located in USA ,
            also Im working in two startups that are in early stage and in my
            free time I improve my tech products.
          </Text>
          <Achievements>
            <Achievements.Item title="+5" description="companies" />
            <Achievements.Item title="2" description="entreprenuers" />
            <Achievements.Item title="1" description="libraries" />
          </Achievements>

          <Link href="/CV-JesusAlvan.pdf" download>
            <Button
              className="max-w-[150px]"
              color="primary"
              fullWidth
              variant="bordered"
            >
              Download CV
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
