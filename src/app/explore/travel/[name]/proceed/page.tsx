"use client";

import Loader from "@/components/Loader/Loader";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useCreateGoalMutation } from "@/store/api/goalApi";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useSelector } from "react-redux";
interface pageProps {
  params: { name: string };
  searchParams: {
    brand?: string;
    duration?: string;
    investmentFrequency?: string;
    totalAmount?: string;
  };
}

const Page: FC<pageProps> = ({ params, searchParams }) => {
  const user = useSelector((state: RootState) => state.authSlice);
  const router = useRouter();
  const duration = Number(searchParams?.duration);
  const investmentFrequency = Number(searchParams?.investmentFrequency);
  const totalAmount = Number(searchParams?.totalAmount);
  const { toast } = useToast();

  const [createGoalFunc, createGoalData] = useCreateGoalMutation();

  const submitGoalCreation = async () => {
    if (!user.salary || user.salary === 0 || typeof user.salary !== "number") {
      toast({
        variant: "destructive",
        title: "Salary is not added in your profile",
        description: "Please add monthly salary in your profile",
        action: (
          <ToastAction
            onClick={() => {
              router.replace("/complete-profile");
            }}
            altText="Complete Profile"
          >
            Complete Profile
          </ToastAction>
        ),
      });
    } else {
      const monthlyInvestment = (totalAmount / duration) * 30;

      const ratio = monthlyInvestment / user.salary;
      const partToBeInvestedFrequently = Math.round((totalAmount / duration) * (investmentFrequency===0?1:investmentFrequency));
      // const partToBeInvestedFrequently = Math.round(
      //   totalAmount / investmentFrequency === Infinity
      //     ? totalAmount
      //     : totalAmount / investmentFrequency
      // );

      const brandName = searchParams.brand
        ? searchParams.brand.length === 0
          ? "None"
          : searchParams.brand
        : "None";

      createGoalFunc({
        goalName: `Travel to ${params.name}`,
        targetAmount: totalAmount,
        investmentFrequency: investmentFrequency,
        ratio: ratio.toLocaleString(),
        totalAmountInvested: partToBeInvestedFrequently, // first amount invested = partToBeInvestedFrequently
        brandName: brandName,
        userId: user._id as string,
        duration: duration
      })
        .then((res) => {
          if ("data" in res) {
            if ("success" in res.data) {
              toast({
                variant: res.data.success === true ? "default" : "destructive",
                title: `Goal creation ${
                  res.data.success === true ? "successfull" : "unsuccessfull"
                }`,
                action: <ToastAction altText="Goal Creation">X</ToastAction>,
              });
            } else {
              toast({
                variant: "destructive",
                title: `Goal creation "unsuccessfull`,
                action: <ToastAction altText="Goal Creation">X</ToastAction>,
              });
            }
          } else {
            toast({
              variant: "destructive",
              title: `Goal creation "unsuccessfull`,
              action: <ToastAction altText="Goal Creation">X</ToastAction>,
            });
          }
        })
        .catch((err) => {
          toast({
            variant: "destructive",
            title: `Goal creation "unsuccessfull`,
            action: <ToastAction altText="Goal Creation">X</ToastAction>,
          });
        });
    }
  };

  return (
    <main className="flex flex-col gap-2 justify-center items-center min-h-[calc(100vh-80px)]">
      {createGoalData.isLoading && <Loader />}
      {investmentFrequency > duration ? (
        <section className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-6 px-5">
          <p className="text-center">
            Investment Frequency should not be greater than total duration
          </p>
          <Button
            onClick={() => {
              router.back();
            }}
          >
            Go Back
          </Button>
        </section>
      ) : (
        <>
          <section className="flex flex-col p-3 w-full min-h-[140px] justify-around items-center text-center">
            <p className="text-sm font-medium text-gray-100">
              Congrats! You have unlocked an offer
            </p>
            <p className="font-semibold text-gray-100">
              Goal Amount = Rs. {totalAmount}
            </p>
          </section>
          <section className="flex justify-center items-center">
            <div className="aspect-square rounded-full w-[180px] border border-gray-800 flex justify-center items-center">
              <p className="text-gray-100 max-w-[150px] text-center">
                You spend Rs. {totalAmount}
              </p>
            </div>
          </section>
          <section className="p-3 grid grid-cols-3 mt-2 gap-2">
            <div className="col-span-2 text-left ">
              <p>Invest</p>
            </div>
            <div className="col-span-1 text-right ">
              <p>
                {Math.round((totalAmount / duration) * (investmentFrequency===0?duration:investmentFrequency))}
                /
                {investmentFrequency === 0
                  ? "Onetime"
                  : investmentFrequency === 1
                  ? "Day"
                  : "Week"}
              </p>
            </div>
            <div className="col-span-2 text-left ">
              <p>We contribute upto</p>
            </div>
            <div className="col-span-1 text-right ">
              <p>400/month</p>
            </div>
            <div className="col-span-2 text-left ">
              <p>Cashback From Brand upto (successfull) completion</p>
            </div>
            <div className="col-span-1 text-right ">
              <p>6000</p>
            </div>
          </section>
          <section className="flex flex-col justify-around items-center gap-3 p-3">
            <Button onClick={submitGoalCreation}>Start Now!</Button>
            <Link href={"/"}>
              <Button variant={"secondary"}>I will do this later</Button>
            </Link>
          </section>
        </>
      )}
    </main>
  );
};

export default Page;
