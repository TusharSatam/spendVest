"use client";

import { FC } from "react";
import avatar from "@/assets/profile-avatar.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import { BellIcon, Component1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Drawer,
} from "@/components/ui/drawer";

const OpenProfile = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Image
          src={avatar}
          placeholder="blur"
          blurDataURL={avatar.blurDataURL}
          alt="avatar"
          className="rounded-full w-12 h-12 object-center object-cover"
        />
      </DrawerTrigger>
      <DrawerContent className="focus-visible:outline-none">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <div className="w-full grid place-items-center">
              <Image
                src={avatar}
                placeholder="blur"
                blurDataURL={avatar.blurDataURL}
                alt="avatar"
                className="rounded-full w-12 h-12 object-center object-cover"
              />
            </div>
            <DrawerTitle className="p-2 rounded-full border border-gray-800 cursor-pointer">
              Complete Profile
            </DrawerTitle>
            <ul className="flex flex-col justify-start items-start list-disc gap-1 pl-6 rounded-lg border border-gray-800 py-2">
              <li>Invite Friends</li>
              <li>Customer Support</li>
              <li>Cummunication Settings</li>
              <li>About Us</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
            <DrawerTitle className="p-2 rounded-full border border-gray-800 cursor-pointer">
              Logout
            </DrawerTitle>
          </DrawerHeader>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

interface ProfileHeaderProps {}

const ProfileHeader: FC<ProfileHeaderProps> = ({}) => {
  return (
    <header className="flex justify-center items-center w-full p-2 sticky top-0 z-50">
      <section className="flex justify-between items-center bg-slate-900 w-full rounded-full p-1">
        <div className="flex justify-start gap-4 items-center rounded-full bg-secondary p-1 text-xs">
          <OpenProfile />

          <div className="flex flex-col pr-4 justify-between">
            <p className="text-[10px]">Hi,</p>
            <p>Jeff Bezos</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Link href={"/faq"}>
            <Button
              variant={"secondary"}
              className="rounded-full h-[56px]"
            >
              <p className="leading-[18px]">FAQs</p>
            </Button>
          </Link>
          <Link href={"/notifications"}>
            <Button
              variant={"secondary"}
              className="rounded-full h-[56px] aspect-square"
            >
              <BellIcon width={18} height={18} />
            </Button>
          </Link>
        </div>
      </section>
    </header>
  );
};

export default ProfileHeader;
