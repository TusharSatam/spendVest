import { Separator } from "@/components/ui/separator";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import travelImage from "@/assets/images/travel.jpg"

interface ExploreHeroProps {
  currentTopic: string;
  img?: StaticImageData
}

const ExploreHero: FC<ExploreHeroProps> = ({ currentTopic,img }) => {
  return (<>
    <section className="w-full p-8 flex flex-col justify-center items-center gap-4">
      <Image src={img??travelImage} placeholder="blur" blurDataURL={img?.blurDataURL??travelImage?.blurDataURL} alt="" className="w-full aspect-square rounded-lg object-cover object-center"/>
      <p className="font-bold text-2xl text-slate-100 text-center">
        {currentTopic}
      </p>
    </section>
  <Separator className="mb-2"/>
  </>);
};

export default ExploreHero;
