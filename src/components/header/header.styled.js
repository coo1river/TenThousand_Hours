import styled from "styled-components";
import before from "../../image/before.png";
import after from "../../image/after.png";

export const QuoteFirst = styled.strong`
  font-family: "OTEnjoystoriesBA";
  font-size: 36px;
  color: yellow;

  margin-bottom: 50px;
`;

export const QuoteSecond = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 100px;

  text-align: center;

  font-family: "gmarketMedium";
  font-size: 17px;
  line-height: 1.7;

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

export const Title = styled.div`
  margin: 50px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const QuoteStrong = styled.strong`
  font-size: 20px;
  font-family: "gmarketMedium";
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
`;

export const ClockImg = styled.img`
  position: relative;
  width: 221.604px;
  height: 225px;
`;
