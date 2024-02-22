import Image from "next/image";
import React from "react";
import avatar from "../../assets/avatar.jpg";
import { Progress } from "@/components/ui/progress";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  amazonLogoImage,
  makemytripLogoImage,
  myntraLogoImage,
  pepperfryLogoImage,
} from "@/assets/brand-logos";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const page = () => {
  const cardData = [
    {
      title: "Investor profile",
      description: "View and manage your investor profile details.",
      link: "/brands",
    },
    {
      title: "Keep it Up & check",
      description: "Stay on top of your progress and reminders.",
      link: "/brands",
    },
    {
      title: "Auto payments",
      description: "Set up and manage your automatic payments.",
      link: "/brands",
    },
    {
      title: "Bank Details",
      description: "Safely manage and update your bank information.",
      link: "/brands",
    },
  ];

  const Rewards = [
    { src: amazonLogoImage, alt: "Amazon Logo" },
    { src: myntraLogoImage, alt: "Myntra Logo" },
    { src: makemytripLogoImage, alt: "MakeMyTrip Logo" },
    { src: pepperfryLogoImage, alt: "Pepperfry Logo" },
  ];

  return (
    <div className="px-[5%] py-[5%] flex flex-col gap-[1.5rem] justify-center items-center">
      <div className="flex flex-col my-6 justify-center items-center">
        <Image
          src={avatar}
          placeholder="blur"
          alt="avatar"
          className="h-[54px] w-[54px] rounded-full mb-2"
        />
        <h3>FirstName</h3>
        <h4>LastName</h4>
      </div>
      <div className="youRewards">
        <Carousel>
          <h2 className="mb-3 text-xl font-semibold">Your Rewards</h2>
          <CarouselContent>
            {Rewards.map((Reward, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <Image
                  src={Reward.src}
                  alt={Reward.alt}
                  className="h-[80px] w-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="ProfileDInfo flex flex-col  text-center">
        <Button className="mb-4"><Link href={"/complete-profile"}></Link>Complete Profile!</Button>
        <Progress value={56} />
        <p>56% completed</p>
      </div>
      <div className="nextSteps ">
        <h2 className="mb-3 text-xl font-semibold">Next Steps</h2>
        <div className="grid grid-cols-2 gap-3">
          {cardData.map((card, index) => (
            <Link href={card.link} key={index}>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription className="text-[12px]">
                    {card.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <h2 className="mb-3 text-xl font-semibold">Your Current Ratio: 0.4</h2>
      <div className="GoalsStatus text-left w-full">
        <h2 className="mb-3 text-xl font-semibold">Goals Status</h2>
        <div className="goalsPercentages grid grid-cols-3 gap-2 my-3">
          <Popover>
            <PopoverTrigger className="border h-[100px] w-[100px] rounded-full">
              20%
            </PopoverTrigger>
            <PopoverContent>Just started!</PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="border h-[100px] w-[100px] rounded-full">
              50%
            </PopoverTrigger>
            <PopoverContent>Halfway through!</PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="border h-[100px] w-[100px] rounded-full">
              60%
            </PopoverTrigger>
            <PopoverContent>Almost ther!</PopoverContent>
          </Popover>
        </div>
        <h4>Your savings increased by 5%</h4>
        <h4>You have been consstent for 38days. Keep it up</h4>
      </div>
      <div className="w-full flex items-center justify-center">
        <Button variant={"secondary"} className="">
          View detailed stats of your progress
        </Button>
      </div>
    </div>
  );
};

export default page;
