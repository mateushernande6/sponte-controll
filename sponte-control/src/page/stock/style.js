import styled from "styled-components";

const media = {
  mobile1: "@media(max-width: 950px)",
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
  display: flex;
  .error {
    color: #cc2525;
    font-family: monospace;
    margin-bottom: 5px;
  }

  ${media.mobile1} {
    flex-direction: column;
    height: 100vh;
  }
`;

export const ShowProducts = styled.div`
  width: 50%;
  overflow-y: auto;
  ${media.mobile1} {
    width: 100%;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #00aee6;
  }
  .titleh2 {
    text-align: center;
  }
`;
export const DetailsProduct = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding: 0 15px;
  img {
    width: 250px;
    border-radius: 5px;
  }
  li {
    margin-bottom: 10px;
  }
  ::-webkit-scrollbar {
    width: 5px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #00aee6;
  }
  .btnUpdate {
    border: none;
    outline: none;
    height: 25px;
    padding: 0 10px;
    border-radius: 5px;
    background: #00aee6;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }
  .btnCloseDelete {
    border: none;
    outline: none;
    height: 25px;
    padding: 0 10px;
    border-radius: 5px;
    background: #ca161c;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }
  ${media.mobile1} {
    width: 95.5%;
    margin-top: 20px;

    ::-webkit-scrollbar {
      width: 5px;
      background: #c4c4c4;
    }
    ::-webkit-scrollbar-thumb {
      background: #c4c4c4;
    }
  }
`;

export const DivProduct = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
  h3 {
    font-size: 14px;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
  }
  .simpleDescription {
    width: 50%;
  }
  cursor: pointer;
`;

export const Modal = styled.div`
  width: 250px;

  input {
    outline: none;
    width: 90%;
    height: 20px;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
  }
`;
