import * as React from "react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //   CarouselNext,
  //   CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import bgImage from "@/assets/images/invest-daily.jpg"
import Image from "next/image";

export default function HomeSection2() {
  const data = [
    {
      text: "Know more about us",
      route: "/faq",
      btnText: "Click Here",
    },
    {
      text: "Start in 3 Steps",
      route: "/explore",
      btnText: "Start Now",
    },
    {
      text: "Start as low as 50/day !!",
      route: "/explore",
      btnText: "Start Now",
    },
  ];
  return (
    <section className="w-full px-2 flex justify-centerm items-center relative py-3">
      <div className="h-8 w-[60%] absolute bg-gray-800 z-[1] top-4 left-1/2 -translate-x-1/2 rounded-b-2xl flex justify-center items-center text-center">
        <p>Invest Daily</p>
      </div>
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {data.map((obj, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
              <Card className="bg-transparent relative">
                  <Image src={bgImage} placeholder="blur" blurDataURL={bgImage.blurDataURL} alt="" fill className="rounded-lg z-[1] opacity-20"/>
                  <CardContent className="flex flex-col aspect-video items-center justify-evenly p-6">
                    <CardTitle>{obj.text}</CardTitle>
                    <Link href={obj.route}>
                      <Button>{obj.btnText}</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
      <CarouselNext /> */}
      </Carousel>
    </section>
  );
}
