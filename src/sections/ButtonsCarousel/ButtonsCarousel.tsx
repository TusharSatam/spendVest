import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface ButtonsCarouselInterface {
  text: string;
  data: {text:string}[];
}

export function ButtonsCarousel({ text,data }: ButtonsCarouselInterface) {
  return (
    <section className="w-full px-2 flex flex-col justify-centerm items-center gap-2">
      <p>{text}</p>
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {data.map((obj, index) => (
            <CarouselItem key={index}>
              <div className="p-1">{obj.text}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
