import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { imageWithData } from "@/data/imageWithData";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialsInterface {
  text: string;
  data: imageWithData[];
}

const SingleTestimony = ({ data }: { data: imageWithData }) => {
  return (
    <Card className="w-full max-w-[94vw]">
      <CardHeader className="flex flex-row justify-between">
        <Image src={data.img} alt="" className="w-12 h-12 rounded-full object-cover object-center" />
        <div className="flex flex-col items-end text-end max-w-[calc(90%-48px)]">
          <CardTitle>{data?.user_name ?? "User Name"}</CardTitle>
          <CardDescription>
            {data?.user_designation ?? "User Designation"}
          </CardDescription>
        </div>
      </CardHeader>

      <CardFooter className="flex-col text-center gap-2">
        <CardTitle>{data?.title ?? "Some Title"}</CardTitle>
        <CardDescription>
          {data?.description ?? "Some description for the card of a testimony"}
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

export default function Testimonials({ text, data }: TestimonialsInterface) {
  return (
    <section className="w-full px-2 flex flex-col justify-centerm items-center gap-2 my-5">
      <p className="text-xl text-gray-100 my-3">{text}</p>
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {data.map((obj, index) => (
            <CarouselItem className="basis-auto" key={index}>
              <SingleTestimony data={obj} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
