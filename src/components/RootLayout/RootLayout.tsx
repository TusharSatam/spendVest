"use client";

import { RootState } from "@/store/store";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "../Navbar/Navbar";
import Loader from "../Loader/Loader";
import { useLazyCheckUserQuery } from "@/store/api/userApi";
import { AuthState, login, logout } from "@/store/slices/authSlice";
import { ISOStringFormat } from "date-fns";
import { Toaster } from "../ui/toaster";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = useSelector(
    (state: RootState) => state.authSlice.isAuthenticated
  );
  const isOnBoarding = useSelector(
    (state: RootState) => state.authSlice.isOnboarding
  );
  const jwtToken = useSelector((state: RootState) => state.authSlice.jwt);
  const userId = useSelector((state: RootState) => state.authSlice._id);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const [checkUserFunc, checkUserData] = useLazyCheckUserQuery();

  const pathname = usePathname();
  const router = useRouter();
  const unProtectedRoutes = [
    "/login",
    "/signup",
    "/getStarted",
    "/forgot-password",
    "/create-password",
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resizeHandler = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (typeof window !== "undefined") {
          setIsDesktop(window.innerWidth >= 768);
        }
      }, 100); // Debounce time: 100ms
    };

    // Initial call to set the initial state based on window size
    resizeHandler();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", resizeHandler);
      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    }
  }, []);

  const dispatch = useDispatch();
  const [userAPIFunc, userData] = useLazyCheckUserQuery();

  const authVerifier = useCallback(async () => {
    setLoading(true);
    const userIdLocal = localStorage.getItem("userId");
    const jwtLocal = localStorage.getItem("jwt");
    if (jwtLocal && userIdLocal && !isAuth && !jwtToken) {
      userAPIFunc({ _id: userIdLocal, jwt: jwtLocal })
        .then((res) => {
          if (res.error) {
            // throttling with cookie that can count the API calls can be used

            // localStorage.removeItem("jwt"); // commenting this is bad for scale but good for jugaad
            // localStorage.removeItem("userId");
            // dispatch(logout());
            setLoading(false);
          }
          const userData = res?.data?.data;
          if (userData) {
            const date = new Date(userData.DOB as ISOStringFormat);
            if (!isNaN(date.getTime())) {
              // Check if the date is valid
              const day = date.getDate().toString().padStart(2, "0");
              const month = (date.getMonth() + 1).toString().padStart(2, "0");
              const year = date.getFullYear();
              const formattedDate = `${year}-${month}-${day}`;
              dispatch(
                login({
                  ...userData,
                  DOB: formattedDate,
                  jwt: jwtLocal,
                  _id: userIdLocal,
                  isAuthenticated: true,
                  isOnboarding: false,
                })
              );
            } else {
              dispatch(
                login({
                  ...userData,
                  jwt: jwtLocal,
                  _id: userIdLocal,
                  isAuthenticated: true,
                  isOnboarding: false,
                })
              );
            }
          }
        })
        .catch((err) => {
          console.log({ err });
          // dispatch(logout());
          // localStorage.removeItem("jwt");
          // localStorage.removeItem("userId");
        });
    }
    if (isAuth !== undefined && jwtToken !== undefined) {
      if (unProtectedRoutes.some((str) => str === pathname)) {
        if (!isAuth && !jwtToken && !jwtLocal) {
          setLoading(false);
        } else {
          if (isOnBoarding) {
            router.push("/on-boarding");
            setLoading(false);
          } else {
            router.push("/");
            setLoading(false);
          }
        }
      } else {
        if (!isAuth && !jwtToken && !jwtLocal) {
          router.push("/getStarted");
          setLoading(false);
        } else {
          setLoading(false);
        }
      }
    }
  }, [pathname, isAuth, isOnBoarding, jwtToken]);

  useEffect(() => {
    authVerifier();
  }, [authVerifier]);

  return (
    <div className="min-h-screen">
      {loading ? (
        <Loader />
      ) : isDesktop ? (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center text-white">
          <p>
            This website is designed for mobile. Please use a mobile device.
          </p>
        </div>
      ) : (
       loading===false && children
      )}
      {isAuth && !isOnBoarding && <Navbar />}
      <Toaster/>
    </div>
  );
}
