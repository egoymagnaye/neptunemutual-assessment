import React, { useContext } from "react";

import { AppContext } from "../../../context/AppContext";

const Footer = () => {
  const { toggleModalHandler } = useContext(AppContext);
  return (
    <div className="shadow-lg p-5 mt-5 rounded-lg">
      <button
        type="button"
        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        onClick={toggleModalHandler}
      >
        Check Wallet Balance
      </button>
    </div>
  );
};

export default Footer;
