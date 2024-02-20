import { sampleLifestyleBrandsData, sampleTextArrForCarousel, sampleTrendingLifestyleData } from "@/data/imageWithData";
import ButtonsCarousel from "@/sections/ButtonsCarousel/ButtonsCarousel";
import ExploreHero from "@/sections/ExploreHero/ExploreHero";
import ExploreTopBar from "@/sections/ExploreTopBar/ExploreTopBar";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main>
      <ExploreTopBar currentLink="Lifestyle" />
      <ExploreHero currentTopic="Empower Your Dreams, Fund Your Lifestyle" />
      <ButtonsCarousel className="mb-2" text="Bucket List Goals" data={sampleTextArrForCarousel} />
      <ButtonsCarousel bigBtn className="mb-2" text="Trending" data={sampleTrendingLifestyleData} />
      <ButtonsCarousel bigBtn className="mb-2" text="Brands you can buy from" data={sampleLifestyleBrandsData} />
    </main>
  );
};

export default page;
