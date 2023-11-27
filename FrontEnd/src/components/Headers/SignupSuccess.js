import React from "react";
import { Link } from "react-router-dom";

const SuccessMessage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-slate-100 text-black p-8 rounded shadow-xl">
        <p className="text-2xl font-bold mb-4">
          You successfully completed registration.
        </p>
        <p>
          Now you can{" "}
          <Link
            to="/signIn"
            className="text-2xl p-2 rounded-xl bg-blue-500 text-white "
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SuccessMessage;
