"use client";
import { EditIcon } from "@/assets/images";
import { avatar } from "@/assets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Loader from "@/components/Loader/Loader";
import { useUpdateUserMutation } from "@/store/api/userApi";
import { login } from "@/store/slices/authSlice";
import { update_ProfileAndGoal } from "@/store/slices/screenValidation";

const CompletedProfile: React.FC = () => {
  const [image, setImage] = useState<File | null>(null); // State for the selected image
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [panNumber, setPanNumber] = useState<string>("");
  const [monthlySalary, setMonthlySalary] = useState<number>(0);
  const [dob, setDob] = useState<string>("");
  const [firstNameError, setFirstNameError] = useState<string>("");
  const [middleNameError, setMiddleNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [phoneNumberError, setPhoneNumberError] = useState<string>("");
  const [panError, setPanError] = useState<string>("");
  const [salaryError, setSalaryError] = useState<string>("");
  const [dobError, setDobError] = useState<string>("");
  const imageRef = useRef<HTMLInputElement | null>(null);
  console.log({ dob });

  const user = useSelector((state: RootState) => state.authSlice);

  const [updateUserFunc, updateUserData] = useUpdateUserMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    setFirstName(user.name ?? "");
    setPhoneNumber(user.phoneNumber ?? "");
    setPanNumber(user.panNumber ?? "");
    setMonthlySalary(user.salary ?? 0);
    setDob(user?.DOB ?? "");
  }, [user]);

  const validateName = (name: string, fieldName: string) => {
    if (!name.trim()) {
      return `${fieldName} is required.`;
    }
    return "";
  };

  const validatePhoneNumber = (number: string) => {
    const phoneNumberRegex = /^\d{10}$/;
    if (!phoneNumberRegex.test(number)) {
      return "Please enter a valid 10-digit phone number.";
    }
    return "";
  };

  const validatePan = () => {
    if (panNumber.length !== 10) {
      return "Please enter a valid PAN Card number.";
    }
    return "";
  };

  const validateSalary = () => {
    if (
      monthlySalary === 0 ||
      isNaN(Number(monthlySalary)) ||
      Number(monthlySalary) <= 0
    ) {
      return "Monthly salary should be a valid positive number.";
    }
    return "";
  };

  const validateDob = () => {
    if (dob === "") {
      return "Date of birth is required.";
    }

    const currentDate = new Date();
    const selectedDate = new Date(dob);

    if (selectedDate > currentDate) {
      return "Please provide a valid date of birth.";
    }

    return "";
  };

  const handleSubmitProfileData = async () => {
    const firstNameValidation = validateName(firstName, "First Name");
    // const middleNameValidation = validateName(middleName, "Middle Name");
    // const lastNameValidation = validateName(lastName, "Last Name");
    const phoneNumberValidation = validatePhoneNumber(phoneNumber);
    const panValidation = validatePan();
    const salaryValidation = validateSalary();
    const dobValidation = validateDob();

    setFirstNameError(firstNameValidation);
    // setMiddleNameError(middleNameValidation);
    // setLastNameError(lastNameValidation);
    setPhoneNumberError(phoneNumberValidation);
    setPanError(panValidation);
    setSalaryError(salaryValidation);
    setDobError(dobValidation);

    // Check if all validations pass before submitting
    if (
      !firstNameValidation &&
      // !middleNameValidation &&
      // !lastNameValidation &&
      !phoneNumberValidation &&
      !panValidation &&
      !salaryValidation &&
      !dobValidation
    ) {
      // Handle form submission logic here
      const { isAuthenticated, isOnboarding, ...payLoadData } = {
        ...user,
        firstName,
        phoneNumber,
        panNumber,
        salary: monthlySalary,
        DOB: dob,
      };
      dispatch(
        update_ProfileAndGoal({ isProfileCompleted: true, isGoalSet: false })
      );

      updateUserFunc(payLoadData).then((res) => {
        if ("data" in res) {
          if ("success" in res.data) {
            dispatch(
              login({
                isAuthenticated: true,
                isOnboarding: false,
                ...payLoadData,
              })
            );
          }
        }
      });
      // console.log("Submitted Data:", {
      //   firstName,
      //   phoneNumber,
      //   panNumber,
      //   monthlySalary,
      //   dob,
      // });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Get the selected image file
    const selectedFile = e.target.files && e.target.files[0];

    // Update the state with the selected image file
    setImage(selectedFile);

    // Create a preview URL for the selected image
    const previewURL = selectedFile ? URL.createObjectURL(selectedFile) : null;
    setImagePreview(previewURL);
  };
  const handleChangeImage = () => {
    // Reset the image state and image preview
    setImage(null);
    setImagePreview(null);

    // Clear the file input by resetting its value
    const fileInput = document.getElementById("imageInput") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const handleImageClick = () => {
    imageRef?.current?.click();
  };

  const handleEditImgBtn = async () => {
    await handleChangeImage();
    handleImageClick();
  };

  useEffect(() => {
    if (updateUserData.isError) {
      alert("Some error occured during data updateing");
    }
  }, [updateUserData.isError]);

  return (
    <>
      {updateUserData.isLoading && <Loader />}
      <div className="flex flex-col justify-center items-center px-[10%] py-[5%]  gap-4 min-h-screen  my-3">
        <div className="w-full flex justify-center items-center ">
          {!imagePreview ? (
            <div
              className="relative h-[120px] w-[120px] mt-4 "
              onClick={handleImageClick}
            >
              <Input
                className=" h-full w-full rounded-full  text-center text-white hidden"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={imageRef}
              />
              <Image
                src={avatar}
                alt="avatar"
                className="absolute h-full w-full rounded-full top-0 left-0 z-[-1]"
                style={{ border: "2px solid white" }}
              />
            </div>
          ) : (
            <div className="h-[120px] w-[120px] my-3 relative rounded-full">
              <Image
                src={imagePreview}
                alt="Selected"
                className="h-full w-full "
                width={150}
                height={150}
              />
              <button
                className="absolute h-[30px] w-[30px] !right-0 !top-0 bg-white rounded-full p-1 flex justify-center items-center"
                onClick={handleEditImgBtn}
              >
                <Image
                  src={EditIcon}
                  alt="EditIcon"
                  className=""
                  height={24}
                  width={24}
                  objectFit="cover"
                />
              </button>
            </div>
          )}
        </div>
        <div className="grid  grid-cols-2 gap-2 w-full">
          <div className="flex flex-col col-span-2  gap-4 w-full">
            <Label className="w-full">
              Full Name *
              <Input
                className="mt-4 h-[40px] w-full"
                style={{ border: "2px solid white" }}
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Label>
            {firstNameError && (
              <p className="text-red-500 text-sm">{firstNameError}</p>
            )}
          </div>

          {/* <div className="flex flex-col  gap-4 ">
          <Label>
            Middle Name *
            <Input
              className="mt-4 h-[40px] "
              style={{ border: "2px solid white" }}
              type="text"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              required
            />
          </Label>
          {middleNameError && (
            <p className="text-red-500 text-sm">{middleNameError}</p>
          )}
        </div> */}
        </div>
        <div className="grid  grid-cols-2 gap-2 w-full">
          {/* <div className="flex flex-col  gap-4 ">
          <Label>
            Last Name *
            <Input
              className="mt-4 h-[40px] "
              style={{ border: "2px solid white" }}
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </Label>
          {lastNameError && (
            <p className="text-red-500 text-sm">{lastNameError}</p>
          )}
        </div> */}

          <div className="flex flex-col col-span-2 gap-4 w-full">
            <Label className="w-full">
              {" Monthly Salary (₹)"}
              *
              <Input
                className="mt-4 h-[40px] w-full"
                style={{ border: "2px solid white" }}
                type="number"
                value={monthlySalary}
                onChange={(e) => setMonthlySalary(Number(e.target.value))}
              />
            </Label>
            {salaryError && (
              <p className="text-red-500 text-sm">{salaryError}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col  gap-4 w-full ">
          <Label>
            Phone Number *
            <Input
              className="mt-4 h-[40px] "
              style={{ border: "2px solid white" }}
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </Label>
          {phoneNumberError && (
            <p className="text-red-500 text-sm">{phoneNumberError}</p>
          )}
        </div>

        <div className="flex flex-col  gap-4 w-full ">
          <Label>
            PAN Card Number *
            <Input
              className="mt-4 h-[40px] "
              style={{ border: "2px solid white" }}
              type="text"
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value)}
              required
            />
          </Label>
          {panError && <p className="text-red-500 text-sm">{panError}</p>}
        </div>

        <div className="flex flex-col  gap-4 w-full ">
          <Label>
            DOB*
            <Input
              className="mt-4 h-[40px] "
              style={{ border: "2px solid white" }}
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </Label>
          {dobError && <p className="text-red-500 text-sm">{dobError}</p>}
        </div>

        <div className="flex justify-between">
          <Button type="submit" onClick={handleSubmitProfileData}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default CompletedProfile;
