import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface ExploreTopBarProps {
  currentLink: "Lifestyle" | "Essential" | "Other";
}

const ExploreTopBar: FC<ExploreTopBarProps> = ({currentLink}) => {
  return (
    <section className="flex flex-col w-full p-3 pb-0 sticky top-0 bg-background z-10">
      <div className="flex justify-around items-center py-1 text-center">
        <Link className={cn("text-gray-200",currentLink==="Lifestyle"?"text-gray-50 opacity-100":"opacity-80 hover:opacity-100 hover:brightness-125")} href={"/explore"}>Lifestyle</Link>
        <Link className={cn("text-gray-200",currentLink==="Essential"?"text-gray-50 opacity-100":"opacity-80 hover:opacity-100 hover:brightness-125")} href={"/explore"}>Essential</Link>
        <Link className={cn("text-gray-200",currentLink==="Other"?"text-gray-50 opacity-100":"opacity-80 hover:opacity-100 hover:brightness-125")} href={"/explore"}>Other</Link>
      </div>
      <Separator />
    </section>
  );
};

export default ExploreTopBar;
