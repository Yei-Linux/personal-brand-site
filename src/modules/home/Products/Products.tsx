import { Title, Text } from '@/ui';
import { ProductCard } from './ProductCard';

export const Products = () => {
  return (
    <section className="flex flex-col gap-5 w-full max-w-[800px]">
      <div>
        <Title className="text-[28px] font-bold text-center">
          Some Products
        </Title>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        <ProductCard
          title="GamiUI"
          description="Library UI to implement gamification components"
        />
        <ProductCard
          title="Content Creator IA"
          description="Generates reels and removing parts uploading a video with IA"
        />
        <ProductCard
          title="Workbook Lover IA"
          description="Generates podcast audio uploading a PDF"
        />
        <ProductCard
          title="Dating APP"
          description="App where you can find competitive people"
        />
        <ProductCard
          title="Anna"
          description="Platform where we can take care people"
        />
        <ProductCard
          title="EasyMenu"
          description="Platform where people can share their foods"
        />
        <ProductCard
          title="NoteSpace"
          description="Application where people can creating their notes"
        />
        <ProductCard
          title="useScreenRecording"
          description="Hook Library to control screen recording"
        />
        <ProductCard
          title="Qeto"
          description="Platform where markets and stores can be exposed"
        />
      </div>
    </section>
  );
};
