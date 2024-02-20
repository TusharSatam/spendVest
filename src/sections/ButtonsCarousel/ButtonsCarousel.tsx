import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { carouselImageOrBtn } from "@/data/imageWithData";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonsCarouselProps {
  text: string;
  data: carouselImageOrBtn[];
  className?: string
  bigBtn?:boolean
}

const ButtonsCarousel: React.FC<ButtonsCarouselProps> = ({ text, data, className,bigBtn }) => {
  return (
    <section className={cn("w-full px-3 flex flex-col justify-center items-start text-start gap-2",className)}>
      <p>{text}</p>
      <Carousel opts={{ loop: false, }} className="w-full">
        <CarouselContent>
          {data.map((obj, index) => (
            <CarouselItem className="basis-auto" key={index}>
              {obj.text ? (
                <Button className={`px-10 ${bigBtn===true&&"h-14"}`}><p className="text-center max-w-[40vw] whitespace-normal">{obj.text}</p></Button>
              ) : obj.img ? (
                <div className="relative w-[70vw] h-40 bg-white rounded-lg overflow-hidden">
                <Image src={obj.img} alt="" fill className="bg-white object-contain" />
                </div>
              ) : (
                <div className="w-full grid p-6 place-items-center">
                  <p className="text-red-600 font-bold text-xl">
                    Obj.text or Obj.img is not available
                  </p>
                </div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
export default ButtonsCarousel;
