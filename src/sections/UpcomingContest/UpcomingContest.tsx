import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //   CarouselNext,
  //   CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import bgImage from "@/assets/images/upcoming-contest.jpg";
import Image from "next/image";

export default function UpcomingContest() {
  const data = [
    {
      title: "December CookOff !!",
      value: 80,
      desc: "Hurry up last date is 7th December",
      btnText: "Participate Now!",
      route:"/journey",
    },
  ];
  return (
    <section className="w-full px-2 flex justify-centerm items-center relative py-3">
      <div className="h-8 w-[60%] absolute bg-gray-800 z-[1] top-4 left-1/2 -translate-x-1/2 rounded-b-2xl flex justify-center items-center text-center">
        <p>Upcoming Contest</p>
      </div>
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {data.map((obj, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-transparent relative">
                  <Image src={bgImage} placeholder="blur" blurDataURL={bgImage.blurDataURL} alt="" fill className="rounded-lg z-[1] opacity-20"/>
                  <CardContent className="flex aspect-square items-center justify-center gap-4 flex-col p-6 relative z-[2]">
                    <CardTitle>{obj.title}</CardTitle>
                    <Progress value={obj.value} />
                    <CardDescription className="text-gray-50">{obj.value}% full</CardDescription>
                    <CardDescription className="text-gray-50">{obj.desc}</CardDescription>
                    <Link href={obj.route}>
                    <Button>{obj.btnText}</Button></Link>
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
