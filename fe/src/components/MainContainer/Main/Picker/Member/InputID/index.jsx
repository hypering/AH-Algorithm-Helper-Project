import React, { useState } from "react";
import { Input } from "./style";
const InputID = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <Input
      type="text"
      placeholder="ID 입력"
      value={value}
      onChange={onChange}
    />
  );
};

export default InputID;
