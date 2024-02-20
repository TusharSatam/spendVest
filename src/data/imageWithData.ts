import { StaticImageData } from "next/image";
import {
  pepperfryLogoImage,
  amazonLogoImage,
  myntraLogoImage,
  easemytripLogoImage,
  makemytripLogoImage
} from "@/assets/brand-logos";
import avatarLogo from "@/assets/avatar.jpg"
import testimonyAvatar from "@/assets/testimony-avatar.jpg"
import vineetaSingh from "@/assets/vineeta-singh.jpg"

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
};

export const samplePartnerBrands: imageWithData[] = [
  {img: myntraLogoImage},
  {img: amazonLogoImage},
  {img: pepperfryLogoImage},
  {img: makemytripLogoImage},
  {img: easemytripLogoImage},
];

export const sampleTestimonyData: imageWithData[] = [
  {
    img:avatarLogo,
    title:"Amazing Product",
    description:"Since incorporating this app into my daily routine, I've witnessed a remarkable transformation in how I approach and achieve my goals. The personalized rooms, actionable checks, and user-friendly interface have seamlessly guided me, empowering me to surpass my objectives. I can't imagine my journey without it, and I wholeheartedly recommend it to anyone aspiring to reach their goals effortlessly",
    user_name:"Peyush Bansal",
    user_designation:"CEO, Lenskart"
  },
  {
    img:testimonyAvatar,
    title:"Outstanding Application for Savings",
    description:"Discovering this app has not only revolutionized the way I pursue my goals but has also brought an unexpected thrill with exciting offers from top brands. Receiving rewards for my achievements feels like a well-deserved bonus, making my experience with this app both fulfilling and enjoyable.",
    user_name:"Aman Gupta",
    user_designation:"CMO, boAt"
  },
  {
    img:vineetaSingh,
    title:"Best for Personal Finance",
    description:"This app has become the cornerstone of my personal finance journey, seamlessly capturing and organizing all my goals, from essential long-term plans to short-term lifestyle aspirations.  Now, I can confidently say that my complete personal finance ecosystem is in sync, thanks to the effortless integration and comprehensive goal recording capabilities of this exceptional app.",
    user_name:"Vineeta Singh",
    user_designation:"CEO, Sugar Cosmetics"
  },
];

export const sampleTextArrForCarousel: carouselImageOrBtn[] = [
  { text: "Travel" },
  { text: "Jwellery" },
  { text: "Gadgets" },
  { text: "Shopping" },
];

export const sampleTrendingLifestyleData: carouselImageOrBtn[] = [
  {text:"Travel to Bali"},
  {text:"Own Your Jordan"},
  {text:"Pick Furniture"},
  {text:"Buy an EV"},
  {text:"Book a Candle Light Dinner"},
]

export const sampleLifestyleBrandsData : carouselImageOrBtn[] = [
  {img: myntraLogoImage},
  {img: amazonLogoImage},
  {img: pepperfryLogoImage},
  {img: makemytripLogoImage},
  {img: easemytripLogoImage},
]

export const homePageFiveImagesData: imageWithData[] = [
  
];