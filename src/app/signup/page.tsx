"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {  useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LOGO } from "@/assets/images";
import Image from "next/image";
import Router from "next/router";

const formSchema = z
  .object({
    email: z.string().email({
      message: "Please provide a valid email address",
    }),
    pass: z.string().min(8),
    cPass: z.string(),
  })
  .refine((data) => data.pass === data.cPass, {
    message: "Passwords do not match",
    path: ["cPass"],
  });

const Signup = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      pass: "",
      cPass: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex gap-[16px] flex-col justify-center items-center h-screen w-screen bg-black">
      <div className="h-[20vh] ">
        <Image src={LOGO} alt="BG_LOGO"  className="h-full w-full"/>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-[80%] z-10"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Email"
                    {...field}
                    className="bg-white outline-none border-none text-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pass"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    className="bg-white outline-none border-none text-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cPass"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    {...field}
                    className="bg-white outline-none border-none text-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <div className="">
      Already an user? <span className="underline cursor-pointer" onClick={()=>router.push('/login')}>Login</span>
      </div>
    </div>
  );
};
export default Signup;
