import React from "react";

import { Label, Input } from "../styles/components/stylesInput";

export default function Inputs({
  name,
  type,
  handleChange,
  placeholder,
  value,
  ...rest
}) {
  return (
    <>
      <Label htmlFor={name}>
        {name}
        <Input
          {...rest}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        ></Input>
      </Label>
    </>
  );
}
