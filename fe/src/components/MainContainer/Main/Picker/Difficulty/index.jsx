import React, { useRef, useState } from "react";
import { Container, DropBoxContainer, Subtitle } from "./style";

const Difficulty = () => {
  const minRef1 = useRef();
  const minRef2 = useRef();
  const maxRef1 = useRef();
  const maxRef2 = useRef();
  const [selected, setSelected] = useState([0, 0, 0, 0]);
  const onChange = (e) => {
    if (
      minRef1.current.options.selectedIndex >
        maxRef1.current.options.selectedIndex ||
      (minRef1.current.options.selectedIndex ==
        maxRef1.current.options.selectedIndex &&
        minRef2.current.options.selectedIndex >
          maxRef2.current.options.selectedIndex)
    ) {
      alert("error");
      minRef1.current.options.selectedIndex = selected[0];
      minRef2.current.options.selectedIndex = selected[1];
      maxRef1.current.options.selectedIndex = selected[2];
      maxRef2.current.options.selectedIndex = selected[3];
    } else {
      setSelected([
        minRef1.current.options.selectedIndex,
        minRef2.current.options.selectedIndex,
        maxRef1.current.options.selectedIndex,
        maxRef2.current.options.selectedIndex,
      ]);
    }
  };
  return (
    <Container>
      <Subtitle>난이도</Subtitle>
      <DropBoxContainer>
        <select onChange={onChange} name="minTier1" ref={minRef1}>
          <option value="0">Bronze</option>
          <option value="1">Silver</option>
          <option value="2">Gold</option>
          <option value="3">Platinum</option>
          <option value="4">Diamond</option>
        </select>
        <select onChange={onChange} name="minTier2" ref={minRef2}>
          <option value="0">5</option>
          <option value="1">4</option>
          <option value="2">3</option>
          <option value="3">2</option>
          <option value="4">1</option>
        </select>
        ~
        <select onChange={onChange} name="maxTier1" ref={maxRef1}>
          <option value="0">Bronze</option>
          <option value="1">Silver</option>
          <option value="2">Gold</option>
          <option value="3">Platinum</option>
          <option value="4">Diamond</option>
        </select>
        <select onChange={onChange} name="maxTier2" ref={maxRef2}>
          <option value="0">5</option>
          <option value="1">4</option>
          <option value="2">3</option>
          <option value="3">2</option>
          <option value="4">1</option>
        </select>
      </DropBoxContainer>
    </Container>
  );
};

export default Difficulty;
