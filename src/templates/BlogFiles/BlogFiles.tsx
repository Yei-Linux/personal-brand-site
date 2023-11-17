import { capitalize } from '@/helpers';
import { Title } from '@/ui';
import {
  Link,
  Image,
  Button,
  Card,
  CardBody,
  CardHeader,
} from '@nextui-org/react';

export type IBlogItem = {
  storyTitle: string;
  storyReadTime: string;
  storyPublishDate: string;
  storyImage: string;
  storyUrl: string;
};

export type IBlogItems = Array<IBlogItem>;

export interface IBlogFiles {
  blogFiles: IBlogItems;
}

export const BlogFiles = ({ blogFiles }: IBlogFiles) => {
  return (
    <main className="flex flex-col items-center gap-24">
      <div>
        <div className="flex justify-center mb-10">
          <Title className="font-bold text-[30px]">My Posts 😁</Title>
        </div>

        {blogFiles.map(
          ({
            storyTitle,
            storyReadTime,
            storyPublishDate,
            storyImage,
            storyUrl,
          }) => (
            <Card
              className="m-auto mb-10 w-[90%] max-w-[400px]"
              key={storyTitle}
            >
              <CardHeader className="flex flex-col gap-2 items-start">
                <div className="flex flex-col">
                  <Link href={`/blog/${storyUrl}`}>
                    <Title className="text-[18px] text-[#848aff] font-semibold">
                      {capitalize(storyTitle)}
                    </Title>
                  </Link>
                </div>
              </CardHeader>
              <CardBody className="flex flex-row w-[100%] justify-between">
                <div>
                  <p className="text-[14px]">
                    <strong>Duration: </strong> {storyReadTime}
                  </p>
                  <p className="text-[14px]">
                    <strong>Date: </strong> {storyPublishDate}
                  </p>

                  <Link href={`/blog/${storyUrl}`}>
                    <Button className="mt-3" color="primary" variant="bordered">
                      View
                    </Button>
                  </Link>
                </div>
                {storyImage && (
                  <div>
                    <Image
                      width={200}
                      alt="NextUI hero Image"
                      src={storyImage}
                    />
                  </div>
                )}
              </CardBody>
            </Card>
          )
        )}
      </div>
    </main>
  );
};
