import { Title, Text } from '@/ui';
import { Chip } from '@nextui-org/react';

export const Skills = () => {
  return (
    <section className="flex flex-col gap-3 items-center">
      <div>
        <Title className="text-[28px] font-bold text-center">Skills</Title>
        <Text className="text-[12px] text-center">My skills</Text>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex justify-center gap-3 flex-wrap max-w-[300px]">
          <Chip variant="faded" color="primary">
            React
          </Chip>
          <Chip variant="faded" color="primary">
            NextJS
          </Chip>
          <Chip variant="faded" color="primary">
            Angular
          </Chip>
          <Chip variant="faded" color="primary">
            Typescript
          </Chip>
          <Chip variant="faded" color="primary">
            Javascript
          </Chip>
          <Chip variant="faded" color="primary">
            React Native
          </Chip>
        </div>

        <div className="flex justify-center gap-3 flex-wrap max-w-[300px]">
          <Chip variant="faded" color="warning">
            Nodejs
          </Chip>
          <Chip variant="faded" color="warning">
            NestJS
          </Chip>
          <Chip variant="faded" color="warning">
            Express
          </Chip>
          <Chip variant="faded" color="warning">
            Java
          </Chip>
          <Chip variant="faded" color="warning">
            Spring Boot
          </Chip>
          <Chip variant="faded" color="warning">
            Python
          </Chip>
          <Chip variant="faded" color="warning">
            Flask
          </Chip>
          <Chip variant="faded" color="warning">
            FastAPI
          </Chip>
        </div>

        <div className="flex justify-center gap-3 flex-wrap max-w-[300px]">
          <Chip variant="faded" color="danger">
            Postgresql
          </Chip>
          <Chip variant="faded" color="danger">
            Mysql
          </Chip>
          <Chip variant="faded" color="danger">
            SQL
          </Chip>
          <Chip variant="faded" color="danger">
            MongoDB
          </Chip>
        </div>

        <div className="flex justify-center gap-3 flex-wrap max-w-[300px]">
          <Chip variant="faded" color="success">
            AWS 53 Router
          </Chip>
          <Chip variant="faded" color="success">
            AWS S3
          </Chip>
          <Chip variant="faded" color="success">
            AWS EC2
          </Chip>
          <Chip variant="faded" color="success">
            Docker
          </Chip>
          <Chip variant="faded" color="success">
            Docker Compose
          </Chip>
        </div>
      </div>
    </section>
  );
};
