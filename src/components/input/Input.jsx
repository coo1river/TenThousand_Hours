import React from "react";
import { ClickIcon, InputCtn, TimeBtn } from "./input.styled";
import ClickImg from "../../image/클릭 아이콘.svg";

export default function Input() {
  return (
    <>
      <InputCtn>
        <p>
          나는 <input placeholder="예)프로그래밍" type="text" /> 전문가가 될
          것이다.
        </p>
        <p>
          그래서 앞으로 매일 하루에 <input placeholder="예)5시간" type="text" />{" "}
          시간씩 훈련할 것이다.
        </p>
        <TimeBtn>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</TimeBtn>
        <ClickIcon src={ClickImg} />
      </InputCtn>
    </>
  );
}
