import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import BrandPartners from "@/sections/BrandPartners/BrandPartners";
import HomeHero from "@/sections/HomeHero/HomeHero";
import HomeSection2 from "@/sections/HomeSection2/HomeSection2";
import HomeTop from "@/sections/HomeTop/HomeTop";

import { samplePartnerBrands, sampleTestimonyData } from "@/data/imageWithData";
import Testimonials from "@/sections/Testimonials/Testimonials";
import UpcomingContest from "@/sections/UpcomingContest/UpcomingContest";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ProfileHeader />
      <HomeTop />
      <HomeHero />
      <HomeSection2 />
      <BrandPartners text="Partner Brands" data={samplePartnerBrands} />
      <UpcomingContest />
      <section className="flex p-3 flex-col justify-start items-center gap-2 my-2">
        <p className="text-xl text-gray-100 my-3">Make your squad</p>
        <Link href={"/brands"}>
          <Button>Partner Apps</Button>
        </Link>
      </section>
      <Testimonials text="Testimonials" data={sampleTestimonyData} />
    </main>
  );
}
