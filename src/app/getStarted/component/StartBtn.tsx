"use client";
import { Button } from "@/components/ui/button";
import {  useRouter } from "next/navigation";
import React from "react";

const StartBtn = () => {
  const router = useRouter();

  return (
    <Button
      className="absolute bottom-[10%] z-10"
      size={"lg"}
      onClick={() => router.push("/signup")}
    >
      Get Started
    </Button>
  );
};

export default StartBtn;
