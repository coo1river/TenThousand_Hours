import styled from "styled-components";

export const InputCtn = styled.div`
  text-align: center;

  font-family: "GmarketSansMedium";
  font-size: 24px;
  font-weight: 400;

  input {
    width: 148px;
    height: 24px;
    padding: 17px 41px 16px 39px;
    margin: 0 17px 27px 17px;

    font-size: 24px;

    border-radius: 7px;
  }

  input::placeholder {
    text-align: center;
    font-family: "GmarketSansMedium";
    font-size: 24px;
    color: #babcbe;
  }

  input:focus {
  }
`;

export const TimeBtn = styled.button`
  background-color: #fcee21;
  color: #5b2386;
  padding: 21px 49px;
  margin-top: 115px;

  border-radius: 56px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  font-family: "GmarketSansMedium";
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const ClickIcon = styled.img`
  width: 64px;
  height: 72px;

  position: absolute;
  bottom: -100px;
`;
