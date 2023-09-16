import styled from "styled-components";
import before from "../../image/before.png";
import after from "../../image/after.png";

export const QuoteFirst = styled.strong`
  margin-top: 66px;
  margin-bottom: 78px;

  font-family: "OTEnjoystoriesBA";
  font-size: 36px;
  color: yellow;
`;

export const QuoteSecond = styled.div`
  display: flex;
  gap: 14px;

  text-align: center;

  font-family: "GmarketSansMedium";
  font-size: 18px;
  font-weight: 400;
  line-height: normal;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    background-repeat: no-repeat;

    width: 46px;
    height: 46px;
    margin-top: 13px;
    margin-bottom: 50px;
  }

  &::before {
    background-image: url(${before});
  }

  &::after {
    background-image: url(${after});
  }

  .container {
    display: flex;
    flex-direction: column;
  }
`;

export const QuoteStrong = styled.strong`
  font-size: 24px;
  font-weight: 700;
`;

export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  width: 564px;
  height: 112px;

  position: absolute;
  top: 200px;
`;

export const ClockImg = styled.img`
  width: 221px;
  height: 225px;
  margin-top: 140px;
`;
