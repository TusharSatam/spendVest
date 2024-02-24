"use client";

import { selectionsCarouselType } from "@/data/imageWithData";
import SelectionsCarousel from "@/sections/SlectionsCarousel/SelectionsCarousel";
import { FC, useState } from "react";
import { Input } from "@/components/ui/input";
import { makemytripLogoImage, easemytripLogoImage } from "@/assets/brand-logos";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Slider } from "@/components/ui/slider";

interface pageProps {
  params: {
    name: string;
  };
}

const initialInvestmentFrequency: selectionsCarouselType[] = [
  {
    text: "Daily",
    value: 1,
    selected: false,
  },
  {
    text: "Weekly",
    value: 7,
    selected: false,
  },
  {
    text: "Onetime",
    value: 0,
    selected: false,
  },
];

const initialBrands: selectionsCarouselType[] = [
  {
    img: makemytripLogoImage,
    value: 1,
    selected: false,
  },
  {
    img: easemytripLogoImage,
    value: 2,
    selected: false,
  },
];

const Page: FC<pageProps> = ({ params }) => {
  const [investmentFrequency, setInvestmentFrequency] = useState<
    selectionsCarouselType[]
  >(initialInvestmentFrequency);
  const [brands, setBrands] = useState<selectionsCarouselType[]>(initialBrands);
  const [totalAmount, setTotalAmount] = useState<number>(60000);
  const [duration,setDuration] = useState<number[]>([30])
  return (
    <main className="flex flex-col justify-center items-center min-h-[calc(100vh-80px)] gap-2">
      <section className="flex flex-col p-3 w-full min-h-[140px] justify-around items-center text-center">
        <p className="text-xl font-medium text-gray-100">
          Please Choose a Goal Amount
        </p>
        <p className="text-xl font-semibold text-gray-50">
          {"Rs. "}
          <span>
            <Input
              min={0}
              style={{
                width: `calc(${totalAmount.toLocaleString().length}ch + 26px)`,
              }}
              className="inline border-none outline-none tabular-nums min-w-[60px]"
              type="number"
              value={totalAmount}
              onChange={(e) => setTotalAmount(Number(e.target.value))}
              placeholder="Enter Amount"
            />
          </span>{" "}
          <span>
            <Button>Update</Button>
          </span>
        </p>
      </section>
      <Separator className="mb-3" />
      <section className="w-full px-3 flex flex-col justify-center items-start text-start gap-2 mb-2">
            <p>Duration</p>
            <p className="text-sm">{duration[0]} days</p>
            <div className="w-full flex justify-center items-center">
            <Slider onValueChange={(e)=>{setDuration(e)}} value={duration} max={365} step={1} className="w-[98%]" />
            </div>
      </section>
      <SelectionsCarousel
        data={investmentFrequency}
        className="mb-2"
        text="Duration"
        onClick={(obj) => {
          setInvestmentFrequency((prev) => {
            const newArr = [...initialInvestmentFrequency];
            const index = newArr.findIndex((item) => item.value === obj.value);
            newArr[index] = { ...obj, selected: true };
            return newArr;
          });
        }}
      />
      <SelectionsCarousel
        data={brands}
        className="mb-2"
        text="Brands waiting for you"
        onClick={(obj) => {
          setBrands((prev) => {
            const newArr = [...initialBrands];
            const index = newArr.findIndex((item) => item.value === obj.value);
            newArr[index] = { ...obj, selected: true };
            return newArr;
          });
        }}
      />
      <section className="p-3 my-3 flex flex-col justify-around items-center gap-5">
        <p className="text-gray-100 text-center text-sm max-w-[240px]">
          Choose any of the brands and get up to 20% off!!
        </p>
        <Link href={`/explore/travel/${params.name}/proceed`}>
          <Button>Proceed</Button>
        </Link>
      </section>
    </main>
  );
};

export default Page;
