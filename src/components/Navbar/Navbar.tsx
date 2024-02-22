import Link from "next/link";
import { FC } from "react";
import {
  HomeIcon,
  SketchLogoIcon,
  MagicWandIcon,
  PaperPlaneIcon,
  AvatarIcon,
} from "@radix-ui/react-icons";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <>
      <nav
        style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }}
        className="fixed bottom-0 h-20 left-0 right-0 z-50 flex justify-around items-center backdrop-blur-lg bg-[rgba(156,163,175,0.2)] text-xs"
      >
        <Link
          style={{ transformOrigin: "center bottom", rotate: "-10deg" }}
          href={"/"}
          className="flex flex-col gap-1 justify-center items-center self-end mb-[9px]"
        >
          <HomeIcon height={20} width={20} />
          <p>Home</p>
        </Link>
        <Link
          style={{ transformOrigin: "center bottom", rotate: "-5deg" }}
          href={"/explore"}
          className="flex flex-col gap-1 justify-center items-center mb-1.5"
        >
          <MagicWandIcon height={20} width={20} />
          <p>Explore</p>
        </Link>
        <Link
          href={"/for-you"}
          className="flex flex-col gap-1 justify-center items-center self-start mt-2"
        >
          <AvatarIcon height={20} width={20} />
          <p>For You</p>
        </Link>
        <Link
          style={{ transformOrigin: "center bottom", rotate: "5deg" }}
          href={"/journey"}
          className="flex flex-col gap-1 justify-center items-center mb-1.5"
        >
          <PaperPlaneIcon height={20} width={20} />
          <p>Journey</p>
        </Link>
        <Link
          style={{ transformOrigin: "center bottom", rotate: "10deg" }}
          href={"/pro"}
          className="flex flex-col gap-1 justify-center items-center self-end mb-[9px]"
        >
          <SketchLogoIcon height={20} width={20} />
          <p>Pro</p>
        </Link>
      </nav>
      <div className="w-full h-20 block"></div>
    </>
  );
};

export default Navbar;
