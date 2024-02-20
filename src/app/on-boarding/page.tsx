"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { LOGO } from "@/assets/images";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

const OnBoarding = () => {
  const [Step, setStep] = useState<number>(1);
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateAndProceed = () => {
    let validationErrors: Record<string, string> = {};

    // Validate email
    if (Step === 1) {
      if (!formData.email || !/^\S+@\S+$/.test(formData.email)) {
        validationErrors.email = "Please enter a valid email address";
      }
    }

    // Validate firstName and lastName
    if (Step === 2 ) {
      if (!formData.firstName || !/^[A-Za-z]+$/.test(formData.firstName) || formData.firstName.length===0) {
        validationErrors.firstName = "Please enter a valid first name";
      }

    }
    if ( Step === 3) {
      if (!formData.lastName || !/^[A-Za-z]+$/.test(formData.lastName) || formData.lastName.length===0) {
        validationErrors.lastName = "Please enter a valid last name";
      }
    }

    // Validate phoneNumber
    if (Step === 4) {
      if (
        !formData.phoneNumber ||
        !/^\d+$/.test(formData.phoneNumber) ||
        formData.phoneNumber.length !== 10
      ) {
        validationErrors.phoneNumber = "Please enter a valid phone number (10 digits)";
      }
    }

    setErrors(validationErrors);

    // Proceed only if there are no validation errors
    if (Object.keys(validationErrors).length === 0) {
      if (Step !== 4) {
        setStep((prev) => prev + 1);
      } else {
        router.push("/");
      }
    }
  };

  return (
    <div className="flex gap-[16px] flex-col justify-center items-center h-screen w-screen bg-black">
      <div className="h-[20vh]">
        <Image src={LOGO} alt="BG_LOGO" className="h-full w-full" />
      </div>
      <div className="flex gap-[16px] flex-col justify-center items-center">
        {Step === 1 && (
          <Input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        )}
        {Step === 2 && (
          <Input
            type="text"
            placeholder="First name"
            onChange={(e) => handleInputChange("firstName", e.target.value)}
          />
        )}
        {Step === 3 && (
          <Input
            type="text"
            placeholder="Last name"
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
        )}
        {Step === 4 && (
          <Input
            type="text"
            placeholder="Phone number"
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
          />
        )}
        <Button onClick={validateAndProceed}>Proceed</Button>
      </div>
      {/* Display validation errors */}
      {errors.email && <p>{errors.email}</p>}
      {errors.firstName && <p>{errors.firstName}</p>}
      {errors.lastName && <p>{errors.lastName}</p>}
      {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
    </div>
  );
};

export default OnBoarding;