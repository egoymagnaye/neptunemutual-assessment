import React from "react";
import Spinner from "../ui/spinner/Spinner";

const Loading = () => {
  return (
    <div className="py-10 text-center absolute inset-0 bg-white/90">
      <Spinner />
    </div>
  );
};

export default Loading;
