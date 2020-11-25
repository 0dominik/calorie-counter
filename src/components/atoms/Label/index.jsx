import React from "react";
import { StyledLabel } from "./style";

const Label = ({ text, htmlFor }) => {
  return <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>;
};

export default Label;
