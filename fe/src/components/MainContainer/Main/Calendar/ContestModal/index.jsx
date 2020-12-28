import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalWrapper,
  ModalInner,
  ButtonWrap,
  ButtonBox,
  Text,
  Name,
  InputContainer,
} from './style';

const onChangeHook = () => {
  const [value, setValue] = useState('');

  const handler = (e) => {
    setValue(e.target.value);
  };

  return [value, handler, setValue];
};

const ContestModal = ({ visible, setvisible }) => {
  const [organizer, changeOrganizer, setOrganizer] = onChangeHook();
  const [name, changeName, setName] = onChangeHook();
  const [date, changeDate, setDate] = onChangeHook();
  const [link, changeLink, setLink] = onChangeHook();

  const cancelonClick = () => {
    setvisible(false);
  };
  const getonClick = async () => {
    if (
      organizer.length === 0 ||
      name.length === 0 ||
      date.length === 0 ||
      link.length === 0
    ) {
      alert('선택되지 않은 항목이 있습니다.');
      return;
    }
    await fetch('http://localhost:4000/contest/add', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: organizer,
        title: name,
        startDate: date,
        url: link,
      }),
    });
    setOrganizer('');
    setName('');
    setDate('');
    setLink('');
    setvisible(false);
    alert('대회가 등록되었습니다!');
  };

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper visible={visible}>
        <ModalInner>
          <InputContainer>
            <div>
              <Name>주최</Name>
              <Text
                value={organizer}
                onChange={changeOrganizer}
                placeholder="주최지"
              />
            </div>
            <div>
              <Name>이름</Name>
              <Text value={name} onChange={changeName} placeholder="대회 명" />
            </div>
            <div>
              <Name>날짜</Name>
              <Text
                value={date}
                onChange={changeDate}
                type="datetime-local"
                placeholder="날짜"
              />
            </div>
            <div>
              <Name>링크</Name>
              <Text value={link} onChange={changeLink} placeholder="URL" />
            </div>
          </InputContainer>
          <ButtonWrap>
            <ButtonBox>
              <div onClick={getonClick}>등록</div>
              <div onClick={cancelonClick}>취소</div>
            </ButtonBox>
          </ButtonWrap>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default ContestModal;