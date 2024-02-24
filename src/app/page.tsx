import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import BrandPartners from "@/sections/BrandPartners/BrandPartners";
import HomeHero from "@/sections/HomeHero/HomeHero";
import HomeSection2 from "@/sections/HomeSection2/HomeSection2";
import HomeTop from "@/sections/HomeTop/HomeTop";

import { imageWithData, samplePartnerBrands, sampleTestimonyData } from "@/data/imageWithData";
import Testimonials from "@/sections/Testimonials/Testimonials";
import UpcomingContest from "@/sections/UpcomingContest/UpcomingContest";

import { Dhan,ETMarket,ETMoneyBrand,Fi,Finshot,Gpay } from "@/assets/brand-logos";

const lessSamplePartnerApps:imageWithData[] = [{img:Dhan},{img:ETMarket},{img:ETMoneyBrand},{img:Fi},{img:Finshot},{img:Gpay}]

export default function Home() {
  return (
    <main>
      <ProfileHeader />
      <HomeTop />
      <HomeHero />
      <HomeSection2 />
      <BrandPartners text="Partner Brands" data={samplePartnerBrands} />
      <UpcomingContest />
      <section className="flex p-3 pb-0 flex-col justify-start items-center gap-2 my-2">
        <p className="text-xl text-gray-100 my-3">Make your squad</p>
        <BrandPartners loadMore data={lessSamplePartnerApps}/>
      </section>
      <Testimonials text="Testimonials" data={sampleTestimonyData} />
    </main>
  );
}
