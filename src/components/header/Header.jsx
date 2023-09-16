import React from "react";
import Logo from "../../image/Logo.svg";
import Bg from "../../image/시계.svg";
import {
  LogoImg,
  HeaderStyle,
  QuoteSecond,
  QuoteFirst,
  QuoteStrong,
  ClockImg,
} from "./header.styled";

export default function Header() {
  return (
    <>
      <HeaderStyle>
        <ClockImg src={Bg} />
        <LogoImg src={Logo} alt="" />
        <QuoteFirst>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</QuoteFirst>
        <QuoteSecond>
          <div className="container">
            <p>
              <QuoteStrong>1만 시간의 법칙</QuoteStrong>은
            </p>
            <p>어떤 분야의 전문가가 되기 위해서는</p>
            <p>최소한 1만 시간의 훈련이 필요하다는 법칙이다.</p>
          </div>
        </QuoteSecond>
      </HeaderStyle>
    </>
  );
}
