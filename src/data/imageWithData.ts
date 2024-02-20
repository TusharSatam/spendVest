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
    description:"Saving my funds now becomes more easier and enjoyable",
    user_name:"Peyush Bansal",
    user_designation:"CEO, Lenskart"
  },
  {
    img:testimonyAvatar,
    title:"Amazing Product",
    description:"Saving my funds now becomes more easier and enjoyable",
    user_name:"Peyush Bansal",
    user_designation:"CEO, Lenskart"
  },
  {
    img:avatarLogo,
    title:"Amazing Product",
    description:"Saving my funds now becomes more easier and enjoyable",
    user_name:"Peyush Bansal",
    user_designation:"CEO, Lenskart"
  },
  {
    img:testimonyAvatar,
    title:"Amazing Product",
    description:"Saving my funds now becomes more easier and enjoyable",
    user_name:"Peyush Bansal",
    user_designation:"CEO, Lenskart"
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