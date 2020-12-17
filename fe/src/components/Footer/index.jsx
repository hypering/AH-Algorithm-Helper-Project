import React from "react";
import { Container, TextLabel } from "./style.js";

const Footer = () => {
  return (
    <Container>
      &copy; Copyright {new Date().getFullYear()} Algorithm Helper{" "}
    </Container>
  );
};

export default Footer;
