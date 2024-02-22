"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Public from "./components/Public";
import Checks from "./components/Checks";

const Journey = () => {
  return (
    <div className="flex flex-col gap-[2rem] px-[5%] py-[5%]">
      <Tabs defaultValue="Public" className="w-full">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="Public">Public</TabsTrigger>
          <TabsTrigger value="Private">Private</TabsTrigger>
          <TabsTrigger value="Checks">Checks</TabsTrigger>
        </TabsList>
        <Public />
        <TabsContent value="Private">Private</TabsContent>
        {/* <TabsContent value="Checks">Checks</TabsContent> */}

        <Checks/>
      </Tabs>
    </div>
  );
};

export default Journey;
