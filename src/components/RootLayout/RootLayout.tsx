"use client";

import { RootState } from "@/store/store";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "../Navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = useSelector(
    (state: RootState) => state.authSlice.isAuthenticated
  );
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 768);
  const [loading, setLoading] = useState<boolean>(true);

  const pathname = usePathname();
  const router = useRouter();
  const unProtectedRoutes = ["/login", "/signup"];

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

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const authVerifier = useCallback(() => {
    setLoading(true);
    if (isAuth !== undefined) {
      if (unProtectedRoutes.some((str) => str === pathname)) {
        if (!isAuth) {
          setLoading(false);
        } else {
          router.push("/");
        }
      } else {
        if (!isAuth) {
          router.push("/login");
        } else {
          setLoading(false);
        }
      }
    }
  }, [pathname, isAuth]);

  useEffect(() => {
    authVerifier();
  }, [authVerifier]);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : isDesktop ? (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center text-white">
          <p>
            This website is designed for mobile. Please use a mobile device.
          </p>
        </div>
      ) : (
        children
      )}
      {isAuth&&<Navbar/>}
    </>
  );
}
