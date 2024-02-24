import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BrandPartnersInterface {
  text?: string;
  data: { img: StaticImageData; url?: string }[];
  loadMore?: boolean;
}

export default function BrandPartners({
  text,
  data,
  loadMore,
}: BrandPartnersInterface) {
  return (
    <section className="w-full px-2 flex flex-col items-center gap-2 my-5">
      {text && <p className="text-xl text-gray-100 my-3">{text}</p>}
      <Carousel className="w-full">
        <CarouselContent>
          {data.map((obj, index) => (
            <CarouselItem className="basis-auto" key={index}>
              <Image
                placeholder="blur"
                blurDataURL={obj.img.blurDataURL}
                src={obj.img}
                alt="carousel image"
                className="h-[80px] w-auto mx-1 rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {loadMore && (
        <div className="flex justify-center items-center w-full mt-5">
          <Link href={"/brands"}>
            <Button>View More</Button>
          </Link>
        </div>
      )}
    </section>
  );
}
