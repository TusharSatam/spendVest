"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@radix-ui/react-progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Journey = () => {
  const [selectedTab, setSelectedTab] = useState<String>("overall");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTab(event.target.value);
  };

  return (
    <div className="flex flex-col gap-[2rem] px-[5%] py-[5%]">
      <Tabs defaultValue="Public" className="w-full">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="Public">Public</TabsTrigger>
          <TabsTrigger value="Private">Private</TabsTrigger>
          <TabsTrigger value="Checks">Checks</TabsTrigger>
        </TabsList>
        <TabsContent
          value="Public"
          className="h-full flex flex-col gap-[2rem] mt-4"
        >
          <h1 className="w-full font-extrabold text-xl text-center">
            Room no-40
          </h1>
          <div className="border p-2 rounded-md">
            <h2>Aim high, Save Higher!</h2>
            <p className="text-sm mt-2">
              not just save money. Turn Dreams into Reality
            </p>
          </div>
          <div className="w-full flex justify-center items-center flex-col">
            <h3>Target Savings</h3>
            <progress value={56} max={100} className="rounded-md w-[80%]" />
          </div>
          <h2 className="w-full text-center">February CookOff !!</h2>
          <h2>LeaderBoards</h2>
          <div className="TableWrapper flex justify-center items-center flex-col gap-2 border">
            <Select onValueChange={(v)=>{
                
                setSelectedTab(v)}}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="overall" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="overall">overall</SelectItem>
                <SelectItem value="weekly">weekly</SelectItem>
              </SelectContent>
            </Select>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ranking</TableHead>
                  <TableHead>Ratings</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedTab === "overall" ? (
                  <>
                    <TableRow>
                      <TableCell className="font-medium">Raj</TableCell>
                      <TableCell>100</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Dan</TableCell>
                      <TableCell>130</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">test1</TableCell>
                      <TableCell>150</TableCell>
                    </TableRow>
                  </>
                ) : (
                  <>
                    <TableRow>
                      <TableCell className="font-medium">Raj</TableCell>
                      <TableCell>300</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Dan</TableCell>
                      <TableCell>260</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">test1</TableCell>
                      <TableCell>20</TableCell>
                    </TableRow>
                  </>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="Private">Private</TabsContent>
        <TabsContent value="Checks"> Checks </TabsContent>
      </Tabs>
      <div className="activityFeed border p-2">
        <h2>Activity Feed</h2>
        <h3>Raj recently earned 50 points</h3>
        <h3>Weekly Ranking are out</h3>
      </div>
    </div>
  );
};

export default Journey;
