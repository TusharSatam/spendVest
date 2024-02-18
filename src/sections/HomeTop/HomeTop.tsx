import { FC } from "react";

interface HomeTopProps {}

const HomeTop: FC<HomeTopProps> = ({}) => {
  return (
    <section className="flex w-full justify-center items-center p-3 ">
      <div className="flex justify-start items-center border border-slate-800 text-slate-100 font-bold text-sm w-full py-2 rounded-md pl-2">
        <p>Understand SpendVest</p><span className="font-normal ml-[0.75ch]">in a min!</span>
      </div>
    </section>
  );
};

export default HomeTop;
