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
  const [currentProduct, setCurrentProdunt] = useState({});

  useEffect(() => {
    api.get("products").then((response) => setProducts(response.data));
  }, []);

  console.log(currentProduct);
  return (
    <>
      <Header />
      <TitleH2>ESTOQUE DE PRODUTOS</TitleH2>

      <MainContainer>
        <ShowProducts>
          {products &&
            products.map((item, index) => (
              <>
                <DivProduct key={index} onClick={() => setCurrentProdunt(item)}>
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
        <DetailsProduct>
          {currentProduct && (
            <>
              <img src={currentProduct.image} />
              <h3>{currentProduct.title}</h3>
              <div>
                <ul>
                  <li>{currentProduct.description}</li>
                  <li>Valor: {currentProduct.price}</li>
                  <li>Categoria: {currentProduct.category.join(", ")}</li>
                  <li>Data de aquisição: {currentProduct.acquisition_date}</li>
                  <li>Código de barras: {currentProduct.bar_code}</li>
                </ul>
              </div>
            </>
          )}
        </DetailsProduct>
      </MainContainer>
    </>
  );
};
