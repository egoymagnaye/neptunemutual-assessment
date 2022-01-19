import { useState } from "react";
import TextInput from "../layout/ui/forms/TextInput";
import { RiArrowUpDownFill } from "react-icons/ri";

const Converter = () => {
  const [input1Amount, setInput1Amount] = useState("");
  const [input2Amount, setInput2Amount] = useState("");

  // Input 1 onChange Handler
  const handleAmount1Change = (amount1) => {
    setInput2Amount((amount1 * 3).toFixed(2));
    setInput1Amount(amount1);
  };

  // Input 2 onChange Handler
  const handleAmount2Change = (amount2) => {
    setInput1Amount((amount2 / 3).toFixed(2));
    setInput2Amount(amount2);
  };

  // Form submission handler
  const formSubmitHandler = async (e) => {
    e.preventDefault();

    console.log(input1Amount, input2Amount);
  };

  return (
    <div className="shadow-xl p-5 mt-5 rounded-lg">
      <h1 className="text-2xl font-bold">Crypto Converter</h1>
      <form
        onSubmit={formSubmitHandler}
        autoComplete="off"
        className="converter mt-5"
      >
        <TextInput
          label="NEP"
          inputChangeHandler={handleAmount1Change}
          placeholder="0.00"
          type="number"
          name="nep"
          id="nep"
          amount={input1Amount}
        />
        <p className="text-center mb-2">
          <RiArrowUpDownFill className="text-3xl m-auto text-black font-bold" />
        </p>
        <TextInput
          label="BUSD"
          inputChangeHandler={handleAmount2Change}
          placeholder="0.00"
          type="number"
          name="busd"
          id="busd"
          amount={input2Amount}
        />
      </form>
    </div>
  );
};

export default Converter;
