"use client";

import Image from "next/image";
import React, { useEffect } from "react";
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
import { GoalI, useLazyGetMyGoalsQuery } from "@/store/api/goalApi";
import Loader from "@/components/Loader/Loader";

const Page = () => {
  const cardData = [
    {
      title: "Investor profile",
      description: "View and manage your investor profile details.",
      link: "/brands",
    },
    {
      title: "Integrate Apps",
      description: "Effortlessly integrate and streamline your workflow.",
      link: "/brands",
    },
    {
      title: "Auto payments",
      description: "Set up and manage your automatic payments.",
      link: "/brands",
    },
    {
      title: "Your Details",
      description: "Safely manage and update your  information.",
      link: "/brands",
    },
  ];

  const Rewards = [
    { title: "Jan Knight", Link: "/" },
    { title: "Learned Pupil", Link: "/" },
    { title: "Persistent Tortoise", Link: "/" },
  ];

  const [myGoalsAPI, myGoalsData] = useLazyGetMyGoalsQuery();

  useEffect(() => {
    myGoalsAPI();
  }, []);

  console.log({ myGoalsData });

  function formatNumber(num: number) {
    const roundedNumber = num.toFixed(2);
    return roundedNumber.endsWith(".00")
      ? roundedNumber.slice(0, -3)
      : roundedNumber;
  }

  const RatioNum = () => {
    // Calculate the sum of all ratios
    if (myGoalsData.data?.data) {
      const sumOfRatios = myGoalsData.data?.data.reduce(
        (sum:number, item:GoalI) => sum + Number(item.ratio),
        0
      );

      // Calculate the average
      const averageRatio = sumOfRatios / myGoalsData.data?.data?.length;
      const avgNum = isNaN(averageRatio)===true?0:averageRatio
      return formatNumber(avgNum*100);
    } else {
      return "Loading...";
    }
  };

  return (
    <div className="px-3 py-3 flex flex-col gap-[1.5rem] justify-center items-center">
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
          <div className="grid grid-cols-3 gap-1">
            {Rewards.map((Reward, index) => (
              <div
                key={index}
                className="basis-1/3 border p-2 text-center rounded-lg"
              >
                <h2 className="text-lg">{Reward.title}</h2>
                <Link href={Reward?.Link} className="underline">
                  Unlock
                </Link>
              </div>
            ))}
          </div>
        </Carousel>
      </div>
      <div className="ProfileDInfo flex flex-col  text-center">
        <Link href={"/complete-profile"}>
          <Button className="mb-4">Complete Profile!</Button>
        </Link>
        <Progress value={56} />
        <p>56% completed</p>
      </div>
      <div className="nextSteps ">
        <h2 className="mb-3 text-xl font-semibold">Next Steps</h2>
        <div className="grid grid-cols-2 gap-3">
          {cardData.map((card, index) => (
            <Link href={card.link} key={index}>
              <div className="text-center border rounded-lg p-3 h-full flex flex-col justify-center items-center">
                <h2 className="text-lg">{card.title}</h2>
                <p className="text-[12px] text-gray-500 text-md">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <h2 className="mb-3 text-xl font-semibold">Your Current Ratio: {<RatioNum/>}</h2>
      <div className="GoalsStatus text-left w-full overflow-hidden">
        <h2 className="mb-3 text-xl font-semibold">Goals Status</h2>
        <div className="goalsPercentages grid gap-2 my-3 grid-cols-3">
          {Array.isArray(myGoalsData?.data?.data) ? (
            myGoalsData.data.data.map((item: GoalI, i) => (
              <Popover key={i}>
                <PopoverTrigger className="border w-full aspect-square rounded-full">
                  {formatNumber(
                    (item?.totalAmountInvested / item?.targetAmount) * 100
                  )}
                  %
                </PopoverTrigger>
                <PopoverContent>
                  {item?.totalAmountInvested / item?.targetAmount < 0.3
                    ? "Just started!"
                    : item?.totalAmountInvested / item?.targetAmount < 0.7
                    ? "Halfway through!"
                    : item?.totalAmountInvested / item?.targetAmount < 1
                    ? "Almost their!"
                    : "Completed"}
                </PopoverContent>
              </Popover>
            ))
          ) : (
            <div className="w-90vw aspect-square relative">
              <Loader small />
            </div>
          )}
        </div>
      </div>
      <div className=" border p-3 rounded-lg">
        <h2 className="mb-3 text-lg font-semibold"> Insights</h2>
        <p>Your savings increased by 5%</p>
        <p>You have been consistent for 38 days. Keep it up</p>
      </div>
      <div className="w-full flex items-center justify-center">
        <Button variant={"secondary"} className="">
          View detailed stats of your progress
        </Button>
      </div>
    </div>
  );
};

export default Page;
