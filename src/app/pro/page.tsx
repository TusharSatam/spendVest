import React from "react";
import { LOGO } from "@/assets/images";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Pro = () => {
  return (
    <div className="px-[5%] py-[5%] flex flex-col items-center justify-center gap-[1.5rem]">
      <div className="currentPlanInfo flex flex-col gap-3 items-center justify-center">
        <Image src={LOGO} alt="LOGO" className="h-[100px] w-[100px] " />
        <h2>Current Plan : Free</h2>
        <Button>Get Premium</Button>
      </div>
      <div className="premiumBenefits p-3 flex flex-col justify-center items-center gap-5">
       <h1 className="text-xl font-semibold text-left w-full">Why Join Premium?</h1>
        <ul className="list-disc">
          <li>
            Imstant credit upto 10,000 at 0% interest rate (if returned before
            monthly renewal date)
          </li>
          <li>Joint account setup</li>
          <li>Connect multiple apps for each category</li>
          <li>Acess to community & tutorials</li>
        </ul>
        <Button variant={"secondary"}>Be Unstoppable</Button>
      </div>
    </div>
  );
};

export default Pro;
