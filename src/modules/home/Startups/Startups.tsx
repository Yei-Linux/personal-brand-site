import { Title } from '@/ui';
import { Image } from '@nextui-org/react';

export const Startups = () => {
  return (
    <section className="flex flex-col gap-5 w-full">
      <div>
        <Title className="text-[28px] font-bold text-center">
          Startups that I belong
        </Title>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        <Image
          width={100}
          alt="NextUI hero Image"
          src="https://media.licdn.com/dms/image/D4E0BAQGrmI2eBf251g/company-logo_200_200/0/1691002269457/annasalud_logo?e=1709769600&v=beta&t=nRYDoRvlROYxRUo9CdrF2E66v_4sOGYczV04uQVidZU"
        />
        <Image
          width={100}
          alt="NextUI hero Image"
          src="https://media.licdn.com/dms/image/D4E0BAQFqb3X7FabFRw/company-logo_200_200/0/1696122815422?e=1709769600&v=beta&t=PAlOUvtznbfzVKe0c0PwK3vVJ5AqZDbGgYIZgyTSfuc"
        />
      </div>
    </section>
  );
};
