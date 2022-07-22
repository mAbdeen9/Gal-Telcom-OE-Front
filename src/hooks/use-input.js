import { useState } from "react";

const useInput = (validateFunc) => {
  const [enterdValue, setEnterdValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const ValueIsValid = validateFunc(enterdValue);
  const hasError = isTouched && !ValueIsValid;

  const valueChangeHandler = (e) => {
    setEnterdValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };

  const resetForm = () => {
    setIsTouched(false);
    setEnterdValue("");
  };

  return {
    enterdValue,
    ValueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetForm,
    setIsTouched,
  };
};

export default useInput;

