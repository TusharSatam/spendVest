import { StaticImageData } from "next/image";
import {
  gcpLogoImage,
  vercelLogoImage,
  phonepeLogoImage,
  pexelsLogoImage,
  garenaLogoImage,
  forbesLogoImage,
} from "@/assets/brand-logos";

export type imageWithData = {
  img: StaticImageData;
  url?: string;
  title?: string;
  description?: string;
  user_name?:string;
  user_designation?:string;
};

export const samplePartnerBrands: imageWithData[] = [
  {img:gcpLogoImage},
  {img:vercelLogoImage},
  {img:phonepeLogoImage},
  {img:pexelsLogoImage},
  {img:garenaLogoImage},
  {img:forbesLogoImage},
];
