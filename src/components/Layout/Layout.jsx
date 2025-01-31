import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader.jsx";
import AppBar from "../AppBar/AppBar.jsx";

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <Toaster />
    </>
  );
};
