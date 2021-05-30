import styled from "styled-components";

const media = {
  mobile1: "@media(max-width: 750px)",
};

export const TitleH2 = styled.h2`
  font-family: "Roboto", sans-serif;
  color: #00aee6;
  font-weight: bold;
  text-align: center;
`;

export const MainContainer = styled.main`
  width: 80%;
  max-width: 1250px;
  background-color: #c4c4c4;
  height: 70vh;
  margin: 0 auto;
  border-radius: 8px;
  padding: 15px;
  Form {
    display: flex;
    height: 100%;
    .error {
      color: #cc2525;
      font-family: monospace;
    }
    ${media.mobile1} {
      flex-direction: column;
    }
  }
  ${media.mobile1} {
    height: 100%;
  }
  .divInput {
    width: 80%;
    ${media.mobile1} {
      margin-bottom: 10px;
    }
  }
`;

export const DivColumn1 = styled.div`
  width: 50%;
  ${media.mobile1} {
    width: 100%;
  }

  input {
    width: 100%;
    height: 38px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-family: "Roboto", sans-serif;
  }
  input::-webkit-input-placeholder {
    color: #908d8d;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-align: center;
  }
  .txta {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 81%;
    ${media.mobile1} {
      margin-bottom: 10px;
    }
  }
  textarea {
    width: 100%;
    height: 100px;
    border: none;
    border-radius: 5px;
    outline: none;
  }
  textarea::-webkit-input-placeholder {
    color: #908d8d;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const DivColumn2 = styled.div`
  width: 50%;
  ${media.mobile1} {
    width: 100%;
  }

  input {
    width: 100%;
    height: 38px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-family: "Roboto", sans-serif;
  }
  input::-webkit-input-placeholder {
    color: #908d8d;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-align: center;
  }
  .btn {
    width: 80%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    button {
      height: 60px;
      border: none;
      border-radius: 5px;
      background-color: #00aee6;
      color: white;
      font-size: 20px;
      font-family: "Roboto", sans-serif;
      cursor: pointer;
      :active {
        background-color: #03779c;
      }
    }
    .visual {
      color: transparent;
    }
  }
  .inputDate {
    margin-right: 50px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
