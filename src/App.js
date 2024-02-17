import { useDispatch, useSelector } from "react-redux";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/AuthPages/SignUp/SignUp";
import LogIn from "./Pages/AuthPages/LogIn/LogIn";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { login } from "./store/slices/authSlice";
import GetStarted from "./Pages/AuthPages/GetStarted/GetStarted";

export default function App() {
  const dispatch = useDispatch();
  let isAuth = useSelector((state) => state.authSlice.isAuthenticated);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    if (isAuth) {
      console.log(isAuth);
      dispatch(login());
    }
  }, [dispatch, isAuth]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {isDesktop ? (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center text-white">
        <div>
          <p>This website is designed for mobile. Please use a mobile device.</p>
        </div>
      </div>
      ) : (
        <Routes>
          <Route path="/" element={isAuth ? <Home /> : <GetStarted />} />
          <Route path="/signup" element={isAuth ? <Home /> : <SignUp />} />
          <Route path="/login" element={isAuth ? <Home /> : <LogIn />} />
          <Route
            path="/get-started"
            element={isAuth ? <Home /> : <GetStarted />}
          />
        </Routes>
      )}
    </div>
  );
}
