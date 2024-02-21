import { StaticImageData } from "next/image";
import {
  pepperfryLogoImage,
  amazonLogoImage,
  myntraLogoImage,
  easemytripLogoImage,
  makemytripLogoImage,
} from "@/assets/brand-logos";
import testimony1 from "@/assets/testimony-1.jpg"
import testimony2 from "@/assets/testimony-2.jpg"
import testimony3 from "@/assets/testimony-3.jpg"

import travelImage from "@/assets/images/travel.jpg"
import gadgetsImage from "@/assets/explore/gadgets.jpg"
import jwelleryImage from "@/assets/explore/jwellery.jpg"

import buyFurniture from "@/assets/explore/furniture.jpg";
import ownJordan from "@/assets/explore/jordan.jpg";
import travelBali from "@/assets/explore/bali.jpg";

import laddakh from "@/assets/travel/laddakh.jpg";
import maldives from "@/assets/travel/maldives.jpg";
import goa from "@/assets/travel/goa.jpg";

import ayodhya from "@/assets/travel/ayodhya.jpg";
import lakshadweep from "@/assets/travel/laskshadweep.jpg";
import switzerland from "@/assets/travel/switzerland.jpg";

export type imageWithData = {
  img: StaticImageData;
  url?: string;
  title?: string;
  description?: string;
  user_name?: string;
  user_designation?: string;
};

export type carouselImageOrBtn = {
  text?: string;
  img?: StaticImageData;
  route?: string;
};

export type selectionsCarouselType = {
  text?:string
  img?:StaticImageData
  value:number
  selected:boolean
}

export const samplePartnerBrands: imageWithData[] = [
  { img: myntraLogoImage },
  { img: amazonLogoImage },
  { img: pepperfryLogoImage },
  { img: makemytripLogoImage },
  { img: easemytripLogoImage },
];

export const sampleTestimonyData: imageWithData[] = [
  {
    img: testimony1,
    title: "Amazing Product",
    description:
      "Since incorporating this app into my daily routine, I've witnessed a remarkable transformation in how I approach and achieve my goals. The personalized rooms, actionable checks, and user-friendly interface have seamlessly guided me, empowering me to surpass my objectives. I can't imagine my journey without it, and I wholeheartedly recommend it to anyone aspiring to reach their goals effortlessly",
    user_name: "Ryan Dahl",
    user_designation: "Founder, NodeJS",
  },
  {
    img: testimony2,
    title: "Outstanding Application for Savings",
    description:
      "Discovering this app has not only revolutionized the way I pursue my goals but has also brought an unexpected thrill with exciting offers from top brands. Receiving rewards for my achievements feels like a well-deserved bonus, making my experience with this app both fulfilling and enjoyable.",
    user_name: "Marissa Mayer",
    user_designation: "Former CEO, Yahoo",
  },
  {
    img: testimony3,
    title: "Best for Personal Finance",
    description:
      "This app has become the cornerstone of my personal finance journey, seamlessly capturing and organizing all my goals, from essential long-term plans to short-term lifestyle aspirations.  Now, I can confidently say that my complete personal finance ecosystem is in sync, thanks to the effortless integration and comprehensive goal recording capabilities of this exceptional app.",
    user_name: "Michał Borkowski",
    user_designation: "CEO, Brainly",
  },
];

export const sampleTextArrForCarousel: carouselImageOrBtn[] = [
  { text: "Travel",route:"travel",img:travelImage },
  { text: "Jewellery", img: jwelleryImage },
  { text: "Gadgets", img: gadgetsImage },
];

export const sampleTrendingLifestyleData: carouselImageOrBtn[] = [
  { text: "Travel to Bali", img:travelBali, route:"travel/bali" },
  { text: "Own Your Jordan",img:ownJordan },
  { text: "Pick Furniture",img:buyFurniture },
];

export const sampleLifestyleBrandsData: carouselImageOrBtn[] = [
  { img: myntraLogoImage },
  { img: amazonLogoImage },
  { img: pepperfryLogoImage },
  { img: makemytripLogoImage },
  { img: easemytripLogoImage },
];

export const sampleDataForTravelTreasures:carouselImageOrBtn[] = [
  {
    text:"Ladakh",
    route:"travel/ladakh",
    img: laddakh,
  },
  {
    text:"Maldives",
    route:"travel/maldives",
    img: maldives,
  },
  {
    text:"Goa",
    route:"travel/goa",
    img: goa
  },
]

export const sampleTrendingTravelsData:carouselImageOrBtn[] = [
  {
    text:"Ayodhya",
    route:"travel/ayodhya",
    img:ayodhya
  },
  {
    text:"Lakshadweep",
    route:"travel/lakshadweep",
    img: lakshadweep
  },
  {
    text:"Switzerland",
    route:"travel/switzerland",
    img: switzerland
  },
]

export const travelBrands:carouselImageOrBtn[] = [
  {
    img:makemytripLogoImage
  },
  {
    img:easemytripLogoImage
  },
]