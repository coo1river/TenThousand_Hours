import React from "react";
import Logo from "../../image/Logo.svg";
import Bg from "../../image/시계.svg";
import { BgImg, LogoImg, HeaderStyle } from "./header.styled";

export default function Header() {
  return (
    <HeaderStyle>
      <BgImg src={Bg} />
      <LogoImg src={Logo} alt="" />
    </HeaderStyle>
  );
}
