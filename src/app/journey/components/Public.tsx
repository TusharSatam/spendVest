import React, { useEffect, useState } from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import {  TabsContent } from "@/components/ui/tabs";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { GoalI, useLazyGetMyGoalsQuery } from '@/store/api/goalApi';
const Public = () => {
    const [selectedTab, setSelectedTab] = useState<String>("overall");
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedTab(event.target.value);
    };

    const [myGoalsAPI, myGoalsData] = useLazyGetMyGoalsQuery();

    useEffect(() => {
      myGoalsAPI();
    }, []);

    function formatNumber(num: number) {
      const roundedNumber = num.toFixed(2);
      return roundedNumber.endsWith(".00")
        ? roundedNumber.slice(0, -3)
        : roundedNumber;
    }
  
    const RatioNum = () => {
      // Calculate the sum of all ratios
      if (myGoalsData.data?.data) {
        const sumOfRatios = myGoalsData.data?.data.reduce(
          (sum:number, item:GoalI) => sum + Number(item.ratio),
          0
        );
  
        // Calculate the average
        const averageRatio = sumOfRatios / myGoalsData.data?.data?.length;
        const avgNum = isNaN(averageRatio)===true?0:averageRatio
        return formatNumber(avgNum*100);
      } else {
        return "Loading...";
      }
    };
  return (
    <TabsContent
    value="Public"
    className="h-full flex flex-col gap-[2rem] mt-4"
  >
    <h1 className="w-full font-extrabold text-xl text-center">
      Room no-{<RatioNum/>}
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
    <div className="activityFeed border p-2">
        <h2>Activity Feed</h2>
        <h3>Raj recently earned 50 points</h3>
        <h3>Weekly Ranking are out</h3>
      </div>
  </TabsContent>
  )
}

export default Public