import styled from "styled-components";

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
`;

export const ShowProducts = styled.div`
  width: 50%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #00aee6;
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
  }
  li {
    margin-bottom: 10px;
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
  }
  .simpleDescription {
    width: 50%;
  }
  cursor: pointer;
`;
