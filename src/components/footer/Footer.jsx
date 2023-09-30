import React from "react";
import LogoImg from "../../image/위니브.svg";
import { FooterCtn } from "./footer.styled";

export default function Footer() {
  return (
    <FooterCtn>
      <img src={LogoImg} alt="위니브 로고" />
      <p>
        ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.
      </p>
      <p>수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.</p>
    </FooterCtn>
  );
}
