import React from "react";

const TextInput = ({ label, inputChangeHandler, amount, ...props }) => {
  return (
    <div className="input-group mb-5">
      <label htmlFor="nep" className="mb-2 block">
        {label}
      </label>
      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md p-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="0.00"
        {...props}
        value={amount}
        onChange={(e) => inputChangeHandler(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
