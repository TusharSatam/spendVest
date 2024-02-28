"use client";
import { RootState } from "@/store/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const JourneyValidation: React.FC = () => {
  const screenValidation = useSelector(
    (state: RootState) => state.screenValidation
  );

  const router = useRouter();

  useEffect(() => {
    if (screenValidation?.isGoalSet && screenValidation?.isProfileCompleted) {
      router.push("/journey");
    }
  }, [screenValidation]);

  return (
    <div className="text-center flex flex-col justify-center items-center  h-screen w-full gap-1 font-semibold text-lg">
      {/* step 1 */}
      <div className="flex justify-center items-center flex-col gap-2">
        <h2>Complete Profile</h2>
        <button
          disabled={screenValidation.isProfileCompleted}
          onClick={() => router.push("/complete-profile")}
          className={` text-black flex  justify-center items-center text-center ${
            screenValidation.isProfileCompleted
              ? "bg-green-400"
              : "bg-yellow-200"
          } rounded-full p-4 h-[50px] w-[50px]`}
        >
          1
        </button>
      </div>
      {/* step 2 */}
      <div
        className={`line h-[10vh] w-[10px] rounded-sm  ${
          screenValidation.isProfileCompleted ? "bg-green-400" : "bg-gray-500"
        }`}
      ></div>
      <div className="flex justify-center items-center flex-col gap-2">
        <h2>Goal Creation</h2>
        <button
          disabled={
            !screenValidation.isProfileCompleted && !screenValidation.isGoalSet
          }
          onClick={() => router.push("/explore/travel")}
          className={`text-black flex  justify-center items-center text-center ${
            screenValidation.isProfileCompleted && screenValidation.isGoalSet
              ? "bg-green-400"
              : screenValidation.isProfileCompleted &&
                !screenValidation.isGoalSet
              ? "bg-yellow-200"
              : "bg-gray-300 text-white"
          } rounded-full p-4 h-[50px] w-[50px]`}
        >
          2
        </button>
      </div>

      {/* Step 3 */}

      <div
        className={`line h-[10vh] w-[10px] rounded-sm  ${
          screenValidation.isProfileCompleted && screenValidation.isGoalSet ? "bg-green-400" : "bg-gray-500"
        }`}
      ></div>
      <div className="flex justify-center items-center flex-col gap-2">
        <h2>Conquer Your Rooms</h2>
        <button
          disabled={
            !screenValidation.isProfileCompleted || !screenValidation.isGoalSet
          }
          onClick={() => router.push("/")}
          className={`${
            screenValidation.isGoalSet && screenValidation.isProfileCompleted
              ? "bg-green-400"
              : "bg-gray-300 text-white"
          } text-black flex  justify-center items-center text-center bg-yellow-400 rounded-full p-4 h-[50px] w-[50px]`}
        >
          3
        </button>
      </div>
    </div>
  );
};

export default JourneyValidation;
