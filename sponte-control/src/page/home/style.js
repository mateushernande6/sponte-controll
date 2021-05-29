import styled from "styled-components";

export const DivHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: #2f2e41;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgLogo = styled.img`
  width: 165px;
  height: 50px;
`;

export const TitleH2 = styled.h2`
  font-family: "Roboto", sans-serif;
  color: #00aee6;
  font-weight: bold;
  text-align: center;
`;

export const MainContainer = styled.main`
  width: 80%;
  background-color: #c4c4c4;
  display: flex;
  height: 70vh;
`;

export const DivColumn1 = styled.div`
  width: 50%;
  input {
    width: 60%;
    height: 38px;
    border-radius: 5px;
    border: none;
    outline: none;
  }
  textarea {
    width: 60%;
    height: 150px;
    border: none;
    border-radius: 5px;
    outline: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid red;
`;

export const DivColumn2 = styled.div`
  width: 50%;
  border: 1px solid red;
  input {
    width: 60%;
    height: 38px;
    border-radius: 5px;
    border: none;
    outline: none;
  }
  div {
    width: 60%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
