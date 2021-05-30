import { Header } from "../../components/header";
import { useEffect, useState } from "react";
import api from "../../service";
import {
  TitleH2,
  MainContainer,
  ShowProducts,
  DetailsProduct,
  DivProduct,
} from "./style";

export const Stock = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("products").then((response) => setProducts(response.data));
  }, []);

  console.log(products);
  return (
    <>
      <Header />
      <TitleH2>ESTOQUE DE PRODUTOS</TitleH2>

      <MainContainer>
        <ShowProducts>
          {products &&
            products.map((item, index) => (
              <>
                <DivProduct>
                  <img src={item.image} />
                  <div className="simpleDescription">
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <p>{item.bar_code}</p>
                  </div>
                </DivProduct>
                <hr />
              </>
            ))}
        </ShowProducts>
        <DetailsProduct></DetailsProduct>
      </MainContainer>
    </>
  );
};
