import React from "react";

const Button = ({ onClickHandler, label, className, ...props }) => {
  return (
    <button
      className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm ${className}`}
      onClick={onClickHandler}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
