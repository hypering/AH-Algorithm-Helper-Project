import React from "react";

import { faSquare, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { Execute } from "./style";

const BtnExecute = ({ onClick }) => {
  return (
    <Execute icon={faCheckCircle} size="2x" color="#707070" onClick={onClick} />
  );
};
export default BtnExecute;
