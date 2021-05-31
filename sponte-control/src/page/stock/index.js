import { Header } from "../../components/header";
import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import api from "../../service";
import * as Yup from "yup";
import {
  TitleH2,
  MainContainer,
  ShowProducts,
  DetailsProduct,
  DivProduct,
  Modal,
} from "./style";
import { motion } from "framer-motion";

const schema = Yup.object().shape({
  title: Yup.string().max(100, "Maximo de 100 caracteres"),

  price: Yup.number().min(2, "Minimo de 2 caracteres"),

  image: Yup.string(),
});

export const Stock = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [update, setUpdate] = useState();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const deleted = () => {
    api.delete(`products/${currentProduct.id}`).then((response) => {
      setCurrentProduct(false);
      setUpdate(response);
    });
  };

  useEffect(() => {
    api.get("products").then((response) => setProducts(response.data));
  }, [update]);

  return (
    <>
      <motion.div
        initial={{ translateX: "-100%" }}
        animate={{ translateX: "0%" }}
        transition={{ duration: 0.4 }}
      >
        <Header />
        <TitleH2>ESTOQUE DE PRODUTOS</TitleH2>

        <MainContainer>
          <ShowProducts>
            <h2 className="titleh2">Produtos</h2>
            {products &&
              products.map((item, index) => (
                <>
                  <DivProduct
                    key={index}
                    onClick={() => setCurrentProduct(item)}
                  >
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
            <h2>Detalhes do produto</h2>
            {currentProduct && (
              <>
                <img src={currentProduct.image} />
                <h3>{currentProduct.title}</h3>
                <div>
                  <ul>
                    <li>{currentProduct.description}</li>
                    <li>Valor: {currentProduct.price}</li>
                    <li>Categoria: {currentProduct.category}</li>
                    <li>
                      Data de aquisição: {currentProduct.acquisition_date}
                    </li>
                    <li>Código de barras: {currentProduct.bar_code}</li>
                  </ul>
                </div>
                {isModalOpen && (
                  <Modal>
                    <Formik
                      validationSchema={schema}
                      initialValues={{
                        title: "",
                        price: currentProduct.price,
                        image: currentProduct.image,
                      }}
                      onSubmit={(values, { resetForm }) =>
                        api
                          .patch(`products/${currentProduct.id}`, values)
                          .then((response) => {
                            setCurrentProduct(response.data);
                            setUpdate(response);
                            resetForm();
                          })
                      }
                    >
                      {({ errors }) => (
                        <Form>
                          <div className="divInput">
                            <Field
                              type="text"
                              name="title"
                              placeholder="Titulo"
                            />
                            {errors.title && (
                              <div className="error">{errors.title}</div>
                            )}
                          </div>

                          <div className="divInput">
                            <Field
                              type="number"
                              name="price"
                              placeholder="Valor do produto"
                            />
                            {errors.price && (
                              <div className="error">{errors.price}</div>
                            )}
                          </div>

                          <div className="divInput">
                            <Field
                              type="url"
                              name="image"
                              placeholder="Url do produto"
                            />
                            {errors.image && (
                              <div className="error">{errors.image}</div>
                            )}
                          </div>

                          <div>
                            <button className="btnUpdate" type="submit">
                              Atualizar
                            </button>
                            <button
                              className="btnCloseDelete"
                              onClick={toggleModal}
                            >
                              Fechar
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </Modal>
                )}
                {!isModalOpen && (
                  <div>
                    <button className="btnUpdate" onClick={toggleModal}>
                      Atualizar
                    </button>
                    <button className="btnCloseDelete" onClick={deleted}>
                      Deletar
                    </button>
                  </div>
                )}
              </>
            )}
          </DetailsProduct>
        </MainContainer>
      </motion.div>
    </>
  );
};
