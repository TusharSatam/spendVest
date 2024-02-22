import { TabsContent } from "@radix-ui/react-tabs";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
const Checks = () => {
  const [selectedTab, setSelectedTab] = useState<String>("overall");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTab(event.target.value);
  };
  return (
    <div>
      <TabsContent
        value="Checks"
        className="flex-col flex justify-center items-center gap-6"
      >
        <div className="w-full ">
          <div className="w-full flex-col flex justify-center items-center">
            <h1>Target Checks</h1>
            <progress value={56} max={100} className="w-[80%]"></progress>
          </div>
        </div>
        <div className="checks border p-2 flex flex-col gap-1">
          <h1 className="font-semibold text-md">My Checks</h1>
          <div className="buttons w-full grid grid-cols-3 gap-2">
            <Button>Today</Button>
            <Button>Overdue</Button>
            <Button>Upcoming</Button>
          </div>
          <h3 className="my-3">Monitor Expenses</h3>
          <h3 className="my-3">Investment Performance</h3>
        </div>
        <div className="reminders border p-2 flex flex-col gap-1">
          <h1 className="font-semibold text-md">Reminders</h1>
          <div className="buttons w-full grid grid-cols-3 gap-2">
            <Button>Today</Button>
            <Button>Overdue</Button>
            <Button>Upcoming</Button>
          </div>
          <h3 className="my-3">Monitor Expenses</h3>
        </div>
        <div className="tableWrapper w-full flex flex-col justify-center items-center border">
          <Select
            onValueChange={(v) => {
              setSelectedTab(v);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Q1(Jan-Mar)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Q1(Jan-Mar)">Q1(Jan-Mar)</SelectItem>
              <SelectItem value="Q2(Apr-Jun)">Q2(Apr-Jun)</SelectItem>
              <SelectItem value="Q3(Apr-Jun)">Q3(Jul-Sep)</SelectItem>
              <SelectItem value="Q4(Apr-Jun)">Q4(Oct-Dec)</SelectItem>
            </SelectContent>
          </Select>
          <Table>
            <TableHeader>
              <TableRow className="border-none">
                <TableHead className="w-[70%]">Sections</TableHead>
                <TableHead className="text-right">Due date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-none">
                <TableCell className="font-medium">
                  <h2 className="text-indigo-500">Jan</h2>
                  <div className="pl-2">
                    <h2>Monitor Expenses</h2>
                    <h2>Investment Performance</h2>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col text-right">
                    <h2>31/1/24</h2>
                    <h2>7/1/24</h2>
                    <h2>7/1/24</h2>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow className="border-none">
                <TableCell className="font-medium">
                  <h2 className="text-indigo-500">Feb</h2>
                </TableCell>
                <TableCell className="text-right">29/2/24</TableCell>
              </TableRow>
              <TableRow className="border-none">
                <TableCell className="font-medium">
                  <h2 className="text-indigo-500">Mar</h2>
                  <div className="pl-2">
                    <h2>Tax Planning</h2>
                  </div>
                </TableCell>
                <TableCell className="text-right">31/3/24</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </TabsContent>
    </div>
  );
};

export default Checks;
