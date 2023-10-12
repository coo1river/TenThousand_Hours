import React from "react";
import { BtnOutput, OutputCtn } from "./output.styled";

export default function Output() {
  return (
    <div>
      <OutputCtn>
        당신은 프로그래밍 전문가가 되기 위해서
        <br />
        대략 5110일 이상 훈련하셔야 합니다! :)
      </OutputCtn>
      <BtnOutput>훈련하러 가기 GO!GO!</BtnOutput>
      <button>공유하기</button>
    </div>
  );
}
