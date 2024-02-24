"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { LOGO } from "@/assets/images";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login, updateOnboarding } from "@/store/slices/authSlice";
import { UserData, useUpdateUserMutation } from "@/store/api/userApi";
import { RootState } from "@/store/store";

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
}

const OnBoarding = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.authSlice);
  const [Step, setStep] = useState<number>(1);
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [updateUserFunc, updateUserData] = useUpdateUserMutation();

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  let validationErrors: Record<string, string> = {};
  const handleSkip = () => {
    setStep((prev) => prev + 1);
    setErrors({});
  };

  const validateAndProceed = async () => {
    // Validate firstName ,middleName and lastName
    if (Step === 1) {
      if (
        !formData.firstName ||
        !/^[A-Z][a-z]*$/.test(formData.firstName) || // Check if the first character is capitalized
        formData.firstName.length === 0
      ) {
        validationErrors.firstName =
          "Please enter a valid first name with the first character capitalized";
      }
    }
    if (Step === 2) {
      if (
        !formData.middleName ||
        !/^[A-Z][a-z]*$/.test(formData.middleName) || // Check if the first character is capitalized
        formData.middleName.length === 0
      ) {
        validationErrors.middleName =
          "Please enter a valid middle name with the first character capitalized";
      }
    }
    if (Step === 3) {
      if (
        !formData.lastName ||
        !/^[A-Z][a-z]*$/.test(formData.lastName) || // Check if the first character is capitalized
        formData.lastName.length === 0
      ) {
        validationErrors.lastName =
          "Please enter a valid last name with the first character capitalized";
      }
    }

    // Validate phoneNumber
    if (Step === 4) {
      if (
        !formData.phoneNumber ||
        !/^\d+$/.test(formData.phoneNumber) ||
        formData.phoneNumber.length !== 10
      ) {
        validationErrors.phoneNumber =
          "Please enter a valid phone number (10 digits)";
      }
    }

    setErrors(validationErrors);

    // Proceed only if there are no validation errors
    if (Object.keys(validationErrors).length === 0) {
      if (Step !== 4) {
        setStep((prev) => prev + 1);
      } else {
        const payloadData = {
          ...user,
          isOnboarding: undefined, // Exclude isOnboarding
          isAuthenticated: undefined, // Exclude isAuthenticated
          name: (
            formData.firstName +
            " " +
            formData.middleName +
            " " +
            formData.lastName
          ).trim(),
          phoneNumber: formData.phoneNumber,
        };
        updateUserFunc(payloadData)
          .then((res) => {
            if ("data" in res) {
              if ("success" in res.data) {
                dispatch(
                  login({
                    ...payloadData,
                    isAuthenticated: true,
                    isOnboarding: false,
                  })
                );
                router.push("/");
              } else {
                alert("some error occured");
              }
            } else {
              alert("some error occured");
            }
          })
          .catch((err) => {
            console.log({ err });
            alert("some error occured");
          });
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
            type="text"
            placeholder="First name"
            onChange={(e) => handleInputChange("firstName", e.target.value)}
          />
        )}
        {Step === 2 && (
          <Input
            type="text"
            placeholder="Middle name"
            onChange={(e) => handleInputChange("middleName", e.target.value)}
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
        <div className="flex justify-between w-full">
          {Step == 2 && (
            <Button onClick={handleSkip} variant={"secondary"}>
              Skip
            </Button>
          )}
          <Button onClick={validateAndProceed}>Proceed</Button>
        </div>
      </div>
      {/* Display validation errors */}
      {errors.firstName && (
        <p className="text-red-500 w-[90vw] text-center">{errors.firstName}</p>
      )}
      {errors.middleName && (
        <p className="text-red-500 w-[90vw] text-center">{errors.middleName}</p>
      )}
      {errors.lastName && (
        <p className="text-red-500 w-[90vw] text-center">{errors.lastName}</p>
      )}
      {errors.phoneNumber && (
        <p className="text-red-500 w-[90vw] text-center">
          {errors.phoneNumber}
        </p>
      )}
    </div>
  );
};

export default OnBoarding;
