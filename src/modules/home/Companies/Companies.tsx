import { Title, Text } from "@/ui";
import { Button, Image } from "@nextui-org/react";

export const Companies = () => {
  return (
    <section className="flex flex-col gap-5 w-full">
      <div>
        <Title className="text-[28px] font-bold text-center">
          Some Companies
        </Title>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        <Image width={100} alt="NextUI hero Image" src="/infosys.png" />
        <Image width={100} alt="NextUI hero Image" src="/globant.jpeg" />
        <Image width={100} alt="NextUI hero Image" src="/rp.jpeg" />
        <Image width={100} alt="NextUI hero Image" src="/lexmax.jpeg" />
        <Image width={100} alt="NextUI hero Image" src="/tawa.jpeg" />
      </div>
    </section>
  );
};
