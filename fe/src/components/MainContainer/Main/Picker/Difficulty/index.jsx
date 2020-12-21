import React, { useRef, useState } from "react";
import { Container, DropBoxContainer, Subtitle } from "./style";

const Difficulty = ({ selectedDifficulty, setSelectedDifficulty }) => {
  const minRef1 = useRef();
  const minRef2 = useRef();
  const maxRef1 = useRef();
  const maxRef2 = useRef();

  const onChange = (e) => {
    if (
      minRef1.current.options.selectedIndex >
        maxRef1.current.options.selectedIndex ||
      (minRef1.current.options.selectedIndex ==
        maxRef1.current.options.selectedIndex &&
        minRef2.current.options.selectedIndex >
          maxRef2.current.options.selectedIndex)
    ) {
      alert("최소 난이도가 최대 난이도 보다 높을 수 없습니다.");
      minRef1.current.options.selectedIndex = selectedDifficulty[0];
      minRef2.current.options.selectedIndex = selectedDifficulty[1];
      maxRef1.current.options.selectedIndex = selectedDifficulty[2];
      maxRef2.current.options.selectedIndex = selectedDifficulty[3];
    } else {
      setSelectedDifficulty([
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
