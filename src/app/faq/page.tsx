import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { blankVideo } from "@/assets/images";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
const FAQ = () => {
  const getRandomColor = () => {
    const letters = "89ABCDEF"; // Use lighter color letters
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };

  return (
    <div className="flex flex-col px-[5%] py-[5%] gap-5">
      <h2>know more</h2>
      <div className="videos grid grid-cols-3 gap-2">
        <Image src={blankVideo} alt="BlankVideo" />
        <Image src={blankVideo} alt="BlankVideo" />
        <Image src={blankVideo} alt="BlankVideo" />
      </div>
      <h2 className="text-center ">How can we help you?</h2>
      <div className="flex text-center overflow-x-auto gap-3">
        <Card style={{ backgroundColor: getRandomColor() }}>
          <CardHeader>
            <CardTitle>Goal Creation</CardTitle>
          </CardHeader>
        </Card>
        <Card style={{ backgroundColor: getRandomColor() }}>
          <CardHeader>
            <CardTitle>Rooms & Contest</CardTitle>
          </CardHeader>
        </Card>
        <Card style={{ backgroundColor: getRandomColor() }}>
          <CardHeader>
            <CardTitle>Brand Contribution</CardTitle>
          </CardHeader>
        </Card>
        <Card style={{ backgroundColor: getRandomColor() }}>
          <CardHeader>
            <CardTitle>How to redeem?</CardTitle>
          </CardHeader>
        </Card>
      </div>
      <h2 className="text-center ">Top Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        {/* Add Goal Creation related content */}
        <AccordionItem value="goal-creation">
          <AccordionTrigger>Goal Creation</AccordionTrigger>
          <AccordionContent>
            Here is the content related to Goal Creation. You can provide any details or information about goal creation in this section.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <a href="https://drive.google.com/file/d/15saKaCdUc6J4FBKelv7TkqJkaSc_cZ2m/view" target="_blank" className="underline">Know more</a>
      <div className="videos grid grid-cols-3 gap-2">
        <Image src={blankVideo} alt="BlankVideo" className="h-[100px]"/>
        <Image src={blankVideo} alt="BlankVideo" className="h-[100px]"/>
        <Image src={blankVideo} alt="BlankVideo" className="h-[100px]"/>
      </div>
      <h2 className="text-2xl font-semibold ">More Questions?</h2>
      <h3>Contact me over <a href="https://www.linkedin.com/in/jalaj-gupta-583721186/" target="_blank" className="underline text-blue-400">LinkedIn</a></h3>
    </div>
  );
};

export default FAQ;
