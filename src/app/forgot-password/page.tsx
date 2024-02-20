"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

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
import { useState } from "react";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({
    message: "Please provide a valid email address",
  }),
});

const ForgotPassword = () => {
  const [isEmailSend, setisEmailSend] = useState<Boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (values?.email) {
      setisEmailSend(true);
    }
    console.log(values);
  }

  const handleChangeEmail = () => {
    setisEmailSend(false);
  };
  return (
    <div className="flex gap-[16px] flex-col justify-center items-center h-screen w-screen bg-black">
      <div className="h-[20vh] ">
        <Image src={LOGO} alt="BG_LOGO" className="h-full w-full" />
      </div>
      {!isEmailSend ? (
        <>
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
                    <FormLabel className="">Enter your email *</FormLabel>
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

              <Button type="submit">Proceed</Button>
            </form>
          </Form>
          <div className="">
            <span
              className="underline cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Back
            </span>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-5 w-[90%] justify-center items-center text-center">
          <p>
            A verification Link has been sent to your Email address. Please
            click on ‘verify’ to complete the verification process.
          </p>
          <Button>Resend Verification Link</Button>
          <div>
            <p>Trouble receiving verification link?</p>
            <button onClick={handleChangeEmail} className="underline">Change Email address</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ForgotPassword;
