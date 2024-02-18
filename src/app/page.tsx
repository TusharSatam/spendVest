import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import BrandPartners from "@/sections/BrandPartners/BrandPartners";
import HomeHero from "@/sections/HomeHero/HomeHero";
import HomeSection2 from "@/sections/HomeSection2/HomeSection2";
import HomeTop from "@/sections/HomeTop/HomeTop";

import { samplePartnerBrands } from "@/data/imageWithData";
import Testimonials from "@/sections/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
     <ProfileHeader/>
     <HomeTop/>
     <HomeHero/>
     <HomeSection2/>
     <BrandPartners text="Partner Brands" data={samplePartnerBrands}/>
     <Testimonials text="Testimonials" data={samplePartnerBrands}/>
    </main>
  );
}
