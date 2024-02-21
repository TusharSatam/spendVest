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
import Link from "next/link";

interface ButtonsCarouselProps {
  text: string;
  data: carouselImageOrBtn[];
  className?: string;
  bigBtn?: boolean;
}

const ButtonsCarousel: React.FC<ButtonsCarouselProps> = ({
  text,
  data,
  className,
  bigBtn,
}) => {
  return (
    <section
      className={cn(
        "w-full px-3 flex flex-col justify-center items-start text-start gap-2",
        className
      )}
    >
      <p className="font-semibold mt-2">{text}</p>
      <Carousel opts={{ loop: false }} className="w-full">
        <CarouselContent>
          {data.map((obj, index) => (
            <CarouselItem className="basis-auto" key={index}>
              {obj?.text && obj?.img ? (
                <Link href={`/explore/${obj?.route ?? "#"}`}>
                <div className="relative w-[70vw] h-40 rounded-lg overflow-hidden">
                  <div
                    style={{
                      background:
                        "radial-gradient(rgba(0,0,0,0.3),transparent)",
                    }}
                    className="absolute inset-0 flex justify-center items-center z-[2]"
                  >
                    <p className="text-xl text-gray-100 font-medium">
                      {obj.text}
                    </p>
                  </div>
                  <Image
                    src={obj.img}
                    alt=""
                    placeholder="blur"
                    blurDataURL={obj.img.blurDataURL}
                    fill
                    className="bg-white object-cover z-[1]"
                  />
                </div></Link>
              ) : obj.text ? (
                <Link href={`/explore/${obj?.route ?? "#"}`}>
                  <Button className={`px-10 ${bigBtn === true && "h-14"}`}>
                    <p className="text-center max-w-[40vw] whitespace-normal">
                      {obj.text}
                    </p>
                  </Button>
                </Link>
              ) : obj.img ? (
                <div className="relative w-[70vw] h-40 bg-white rounded-lg overflow-hidden">
                  <Image
                    src={obj.img}
                    alt=""
                    placeholder="blur"
                    blurDataURL={obj.img.blurDataURL}
                    fill
                    className="bg-white object-contain"
                  />
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
