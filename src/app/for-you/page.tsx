import Image from "next/image";
import React from "react";
import avatar from "../../assets/avatar.jpg";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
const page = () => {
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
            <CarouselItem className="basis-1/3">
              <Image
                src={amazonLogoImage}
                alt="offerImage"
                className="h-[80px] w-full"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Image
                src={myntraLogoImage}
                alt="offerImage"
                className="h-[80px] w-full"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Image
                src={makemytripLogoImage}
                alt="offerImage"
                className="h-[80px] w-full"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Image
                src={pepperfryLogoImage}
                alt="offerImage"
                className="h-[80px] w-full"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="ProfileDInfo flex flex-col  text-center">
        <Button className="mb-4">Complete Profile!</Button>
        <Progress value={56} />
        <p>56% completed</p>
      </div>
      <div className="nextSteps ">
        <h2 className="mb-3 text-xl font-semibold">Next Steps</h2>
        <div className="grid grid-cols-2 gap-3">
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Investor profile</CardTitle>
              <CardDescription className="text-[12px]">
                View and manage your investor profile details.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Keep it Up & check</CardTitle>
              <CardDescription className="text-[12px]">
                Stay on top of your progress and reminders.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Auto payments</CardTitle>
              <CardDescription className="text-[12px]">
                Set up and manage your automatic payments.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      <h2 className="mb-3 text-xl font-semibold">Your Current Ratio: 0.4</h2>
      <div className="GoalsStatus text-left w-full">
        <h2 className="mb-3 text-xl font-semibold">Goals Status</h2>
        <div className="goalsPercentages grid grid-cols-3 gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="h-[100px] border border-white rounded-full  hover:bg-gray-500">20%</TooltipTrigger>
              <TooltipContent>
                <p>Just started!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="h-[100px] border border-white rounded-full  hover:bg-gray-500">50%</TooltipTrigger>
              <TooltipContent>
                <p>Halfway through!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="h-[100px] border border-white rounded-full  hover:bg-gray-500">66%</TooltipTrigger>
              <TooltipContent>
                <p>Almost there!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default page;
