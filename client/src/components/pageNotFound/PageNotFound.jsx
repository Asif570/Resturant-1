import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src="/404.png" alt="" className="h-[70vh]" />
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-gray-700">
        We're sorry, the page you requested could not be found.
      </p>
      <Link
        to={"/"}
        className="text-lg text-blue-600 underline cursor-pointer "
      >
        Go To Home
      </Link>
    </div>
  );
};

export default PageNotFound;
