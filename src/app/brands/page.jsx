'use client'
import React, { useState } from "react";
import Image from "next/image";
import {
  Beshak,
  Dhan,
  ETMarket,
  ETMoneyBrand,
  Fi,
  Finshot,
  Gpay,
  Jupiter,
  PhonePe,
  PolicyBazaar,
  Tax2Win,
  Upstox,
  VakilSearch,
  ZeroDha,
  cleartax,
  ditto,
  moneycontrol,
  paytm,
} from "@/assets/brand-logos";
import { Button } from "@/components/ui/button";

const imagesArray = [
  {
    ImageTitle: "Expense Tracking/Savings",
    ImageName: [Jupiter, Fi, ETMoneyBrand],
  },
  { ImageTitle: "News", ImageName: [ETMarket, moneycontrol, Finshot] },
  { ImageTitle: "Investments", ImageName: [ZeroDha, Dhan, Upstox] },
  { ImageTitle: "Bill Payments", ImageName: [PhonePe, paytm, Gpay] },
  { ImageTitle: "Bill Payments", ImageName: [cleartax, VakilSearch, Tax2Win] },
  { ImageTitle: "Bill Payments", ImageName: [PolicyBazaar, ditto, Beshak] },
];

const Page = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
      setSelectedImage(image);
    };
  return (
    <div className="flex flex-col justify-center items-center gap-5 px-[5%] py-[5%]">
      <h1 className="font-semibold text-xl">Make your own Squad</h1>

      {imagesArray.map((category, index) => (
        <div key={index} className="flex flex-col gap-2">
          <h1>{category.ImageTitle}</h1>
          <div className="grid grid-cols-3 gap-2">
            {category.ImageName.map((src, i) => (
                <div
                className={`h-[80px] ${selectedImage === src ?"rounded-md":""}`}
                  style={{
                    border: selectedImage === src ? '4px solid #f7d547' : 'none',
                  }}
                  key={i}
                >
                    <Image
                  
                      className={`h-full`}
                      src={src}
                      alt={`Image ${i + 1}`}
                      onClick={() => handleImageClick(src)}
                      placeholder="blur"
                      loading="lazy"
                    />
                </div>
            ))}
          </div>
        </div>
      ))}

      <Button>Save</Button>
    </div>
  );
};

export default Page;
