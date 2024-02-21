import { sampleDataForTravelTreasures, sampleTrendingTravelsData, travelBrands } from "@/data/imageWithData";
import ButtonsCarousel from "@/sections/ButtonsCarousel/ButtonsCarousel";
import ExploreHero from "@/sections/ExploreHero/ExploreHero";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main>
      <ExploreHero currentTopic="Wander Often, Wonder Always"/>
      <ButtonsCarousel className="mb-2" text="Top Travel Treasures" data={sampleDataForTravelTreasures} />
      <ButtonsCarousel bigBtn className="mb-2" text="Trending &uarr;" data={sampleTrendingTravelsData} />
      <ButtonsCarousel bigBtn className="mb-2" text="Brands waiting for you" data={travelBrands} />
    </main>
  );
};

export default page;
