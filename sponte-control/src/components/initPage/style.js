import styled from "styled-components";

const media = {
  mobile1: "@media(max-width: 1138px)",
  mobile2: "@media(max-width: 450px)",
};

export const DivInitPage = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  .divCont {
    width: 350px;
    height: 120px;
    ${media.mobile2} {
      width: 250px;
    }
  }
  ${media.mobile1} {
    flex-direction: column;
    align-items: center;
    padding: 30px 10px;
  }
`;

export const ImgSponte = styled.img`
  width: 100%;
  height: 106px;
`;

export const ImgControl = styled.img`
  width: 70%;
  height: 450px;
  margin-top: 50px;
  margin-right: 50px;
  ${media.mobile1} {
    width: 80%;
    height: 350px;
    margin-top: 20px;
    margin-right: 0;
  }
`;

export const H2Control = styled.h2`
  font-family: "Roboto", sans-serif;
  text-align: right;
  margin-top: 0;
  position: relative;
  bottom: 22px;
  color: #00aee6;
`;
