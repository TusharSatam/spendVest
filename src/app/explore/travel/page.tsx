import ExploreHero from "@/sections/ExploreHero/ExploreHero";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main>
      <ExploreHero currentTopic="Wander Often, Wonder Always"/>
    </main>
  );
};

export default page;
