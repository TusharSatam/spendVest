"use client";

import { selectionsCarouselType } from "@/data/imageWithData";
import SelectionsCarousel from "@/sections/SlectionsCarousel/SelectionsCarousel";
import { FC, useState } from "react";
import { Input } from "@/components/ui/input";
import { makemytripLogoImage,easemytripLogoImage } from "@/assets/brand-logos";
import { Separator } from "@/components/ui/separator";

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

const initialBrands = [
  {
    img:makemytripLogoImage,    
    value: 1,
    selected: false,
  },
  {
    img:easemytripLogoImage,
    value: 2,
    selected: false,
  },
]

const Page: FC<pageProps> = ({ params }) => {
  const [investmentFrequency, setInvestmentFrequency] = useState<
    selectionsCarouselType[]
  >(initialInvestmentFrequency);
  const [brands,setBrands] = useState<selectionsCarouselType[]>(initialBrands)
  const [totalAmount, setTotalAmount] = useState<number>(60000);
  return (
    <main>
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
          {" (Editable)"}
        </p>
      </section>
      <Separator className="mb-3"/>
        <SelectionsCarousel
          data={investmentFrequency}
          className="mb-2"
          text="Duration (Refer APP)"
          onClick={(obj) => {
            console.log({ obj });
          }}
        />
        <SelectionsCarousel
          data={brands}
          className="mb-2"
          text="Duration (Refer APP)"
          onClick={(obj) => {
            console.log({ obj });
          }}
        />
    </main>
  );
};

export default Page;
