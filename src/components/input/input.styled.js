import styled from "styled-components";

export const InputCtn = styled.form`
  text-align: center;

  font-family: "gmarketMedium";
  font-size: 24px;

  p {
    font-size: 20px;
    margin-bottom: 20px;
    line-height: 17px;
  }

  input {
    width: 200px;
    padding: 15px 20px;
    margin: 0 15px;
    border-radius: 10px;
    font-size: 20px;
    font-family: "gmarketMedium";
  }

  input::placeholder {
    text-align: center;
    font-family: "gmarketMedium";
    font-size: 24px;
    color: #babcbe;
  }

  input:focus {
    outline: 4px solid #a874cf;
  }
`;

export const TimeBtn = styled.button`
  background-color: #fcee21;
  color: #5b2386;
  margin-top: 70px;
  border-radius: 30px;
  padding: 10px 40px;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  font-family: "gmarketBold";
  font-size: 20px;
  font-weight: bold;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export const ClickIcon = styled.img`
  width: 64px;
  height: 72px;
  margin-left: 3px;

  position: absolute;
  bottom: -5px;
`;
