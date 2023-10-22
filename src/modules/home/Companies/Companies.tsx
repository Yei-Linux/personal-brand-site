import { Title, Text } from '@/ui';
import { Button, Image } from '@nextui-org/react';

export const Companies = () => {
  return (
    <section className="flex flex-col gap-5 w-full">
      <div>
        <Title className="text-[28px] font-bold text-center">
          Some Companies
        </Title>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        <Image
          width={100}
          alt="NextUI hero Image"
          src="https://media.licdn.com/dms/image/D560BAQHWB0kBTxn0kA/company-logo_100_100/0/1688411226020?e=1706140800&v=beta&t=Bh7HbsfqWpKUx8WpAA1oMuzpG_c1FRkyUcr9STgLEaI"
        />
        <Image
          width={100}
          alt="NextUI hero Image"
          src="https://media.licdn.com/dms/image/C4E0BAQG0sJX3XgktCg/company-logo_100_100/0/1553206182075?e=1706140800&v=beta&t=Lc3jK0hTINckYrFwET4feANgC1zNf3IwWrfBfL_LMmE"
        />
        <Image
          width={100}
          alt="NextUI hero Image"
          src="https://media.licdn.com/dms/image/C4D0BAQFyY2nG6c6AlQ/company-logo_100_100/0/1656684751898?e=1706140800&v=beta&t=0Z44KYGTE2MrqF8VQ4RYdbIT4aHqvqjcNaGiwFJ4saY"
        />
        <Image
          width={100}
          alt="NextUI hero Image"
          src="https://media.licdn.com/dms/image/C4E0BAQEI6x46yUiLPA/company-logo_100_100/0/1621030402582?e=1706140800&v=beta&t=ZfvvPwnAiwdrE0lfe-z6gYGo1aLMi1otQlOONnNd6Iw"
        />
        <Image
          width={100}
          alt="NextUI hero Image"
          src="https://media.licdn.com/dms/image/C4E0BAQFKocjaNkKk3Q/company-logo_100_100/0/1583178784039?e=1706140800&v=beta&t=zg_OMHuN0oT_sll5W4SdUZajPAKlYoRhviiHZCOjgzA"
        />
      </div>
    </section>
  );
};
