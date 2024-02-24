"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";

interface pageProps {
  params: { name: string };
  searchParams: {
    brand: string;
    duration: string;
    investmentFrequency: string;
  };
}

const page: FC<pageProps> = ({params,searchParams}) => {
  return (
    <main className="flex flex-col gap-2 justify-center items-center min-h-[calc(100vh-80px)]">
      <section className="flex flex-col p-3 w-full min-h-[140px] justify-around items-center text-center">
        <p className="text-sm font-medium text-gray-100">
          Congrats! You have unlocked an offer
        </p>
        <p className="font-semibold text-gray-100">Goal Amount = Rs. 60000</p>
      </section>
      <section className="flex justify-center items-center">
        <div className="aspect-square rounded-full w-[180px] border border-gray-800 flex justify-center items-center">
          <p className="text-gray-100 max-w-[150px] text-center">
            You spend Rs. 56000
          </p>
        </div>
      </section>
      <section className="p-3 grid grid-cols-3 mt-2 gap-2">
        <div className="col-span-2 text-left ">
          <p>Invest</p>
        </div>
        <div className="col-span-1 text-right ">
          <p>5600/month</p>
        </div>
        <div className="col-span-2 text-left ">
          <p>We contribute upto</p>
        </div>
        <div className="col-span-1 text-right ">
          <p>400/month</p>
        </div>
        <div className="col-span-2 text-left ">
          <p>Cashback From Brand upto (successfull) completion</p>
        </div>
        <div className="col-span-1 text-right ">
          <p>6000</p>
        </div>
      </section>
      <section className="flex flex-col justify-around items-center gap-3 p-3">
        <Button>Start Now!</Button>
        <Button variant={"secondary"}>I will do this later</Button>
      </section>
    </main>
  );
};

export default page;
