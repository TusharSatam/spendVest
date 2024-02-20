import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import BrandPartners from "@/sections/BrandPartners/BrandPartners";
import HomeHero from "@/sections/HomeHero/HomeHero";
import HomeSection2 from "@/sections/HomeSection2/HomeSection2";
import HomeTop from "@/sections/HomeTop/HomeTop";

import { samplePartnerBrands, sampleTestimonyData } from "@/data/imageWithData";
import Testimonials from "@/sections/Testimonials/Testimonials";
import UpcomingContest from "@/sections/UpcomingContest/UpcomingContest";

export default function Home() {
  return (
    <main>
     <ProfileHeader/>
     <HomeTop/>
     <HomeHero/>
     <HomeSection2/>
     <UpcomingContest/>
     <BrandPartners text="Make Your App Squad" data={samplePartnerBrands}/>
     <Testimonials text="Testimonials" data={sampleTestimonyData}/>
    </main>
  );
}
