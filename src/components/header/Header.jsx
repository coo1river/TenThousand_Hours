import React from "react";
import Logo from "../../image/Logo.svg";
import Bg from "../../image/시계.svg";
import { BgImg, LogoImg, HeaderStyle } from "./header.styled";

export default function Header() {
  return (
    <>
      <HeaderStyle>
        <BgImg src={Bg} />
        <LogoImg src={Logo} alt="" />
        <HeaderQuote />
      </HeaderStyle>
    </>
  );
}

function HeaderQuote() {
  return <p>"연습은 어제의 당신보다 당신을 더 낫게 만든다."</p>;
}
