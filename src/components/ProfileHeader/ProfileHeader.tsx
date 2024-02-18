"use client";

import { FC } from "react";
import avatar from "@/assets/avatar.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import { BellIcon, Component1Icon } from "@radix-ui/react-icons";
import Link from "next/link";

interface ProfileHeaderProps {}

const ProfileHeader: FC<ProfileHeaderProps> = ({}) => {
  return (
    <header className="flex justify-center items-center w-full p-2 sticky top-0 z-50">
      <section className="flex justify-between items-center bg-slate-900 w-full rounded-full p-1">
        <div className="flex justify-start gap-4 items-center rounded-full bg-secondary p-1 text-xs">
          <Image
            src={avatar}
            alt="avatar"
            className="rounded-full w-12 h-12 max-w-[40vw]"
          />
          <div className="flex flex-col pr-4 justify-between">
            <p className="text-[10px]">Hi,</p>
            <p>Jeff Bezos</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Link href={"/settings"}>
            <Button
              variant={"secondary"}
              className="rounded-full h-full aspect-square"
            >
              <Component1Icon width={18} height={18} />
            </Button>
          </Link>
          <Link href={"/notifications"}>
            <Button
              variant={"secondary"}
              className="rounded-full h-full aspect-square"
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
