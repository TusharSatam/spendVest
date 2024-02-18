import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import { HomeHero } from "@/sections/HomeHero/HomeHero";
import { HomeSection2 } from "@/sections/HomeSection2/HomeSection2";
import HomeTop from "@/sections/HomeTop/HomeTop";

export default function Home() {
  return (
    <main>
     <ProfileHeader/>
     <HomeTop/>
     <HomeHero/>
     <HomeSection2/>
    </main>
  );
}
