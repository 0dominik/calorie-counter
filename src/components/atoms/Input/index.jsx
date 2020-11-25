import React from "react";
import { StyledInput } from "./style";

const Input = ({ size, type, id, onChange, value, placeholder }) => {
  return (
    <StyledInput
      type={type}
      size={size}
      id={id}
      onChange={(e) => onChange(e)}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
