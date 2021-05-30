import { MainContainer, TitleH2, DivColumn1, DivColumn2 } from "./style";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import api from "../../service";
import { Header } from "../../components/header";

const schema = Yup.object().shape({
  title: Yup.string()
    .max(100, "Maximo de 100 caracteres")
    .required("* Campo obrigatório *"),

  weight: Yup.number().required("* Campo obrigatório *"),

  price: Yup.number()
    .min(2, "Minimo de 2 caracteres")
    .required("* Campo obrigatório *"),

  measures: Yup.string()
    .matches(/[0-9]*\/[0-9]*\/[0-9]*/gm, "exemplo esperado 00/00/00")
    .required("* Campo obrigatório *"),

  description: Yup.string().required("* Campo obrigatório *"),

  category: Yup.string().required("* Campo obrigatório *"),

  bar_code: Yup.number().required("* Campo obrigatório *"),

  acquisition_date: Yup.date().required("* Campo obrigatório *"),

  image: Yup.string().required("* Campo obrigatório *"),
});

export const Home = () => {
  const date = new Date();
  let actualDay = date.toJSON();
  actualDay = actualDay.slice(0, 10);

  const CustomInputComponent = (props) => (
    <textarea className="my-custom-input" type="text" {...props} />
  );

  console.log(actualDay);
  return (
    <>
      <Header />

      <TitleH2>CADASTRO DE PRODUTOS</TitleH2>

      <MainContainer>
        <Formik
          validationSchema={schema}
          initialValues={{
            title: "",
            price: "",
            weight: "",
            measures: "",
            description: "",
            category: "",
            bar_code: "",
            acquisition_date: "",
            image: "",
          }}
          onSubmit={(values) =>
            api
              .post("products", values)
              .then((response) => console.log(response))
              .catch((err) => console.log(err))
          }
        >
          {({ errors }) => (
            <Form>
              <DivColumn1>
                <div className="divInput">
                  <Field type="text" name="title" placeholder="Titulo" />
                  {errors.title && <div className="error">{errors.title}</div>}
                </div>

                <div className="divInput">
                  <Field
                    type="number"
                    name="price"
                    placeholder="Valor do produto"
                  />
                  {errors.price && <div className="error">{errors.price}</div>}
                </div>

                <div className="divInput">
                  <Field
                    type="text"
                    name="measures"
                    placeholder="Medidas A/L/C"
                  />
                  {errors.measures && (
                    <div className="error">{errors.measures}</div>
                  )}
                </div>

                <div className="divInput">
                  <Field type="text" name="weight" placeholder="Peso (Kg)" />
                  {errors.weight && (
                    <div className="error">{errors.weight}</div>
                  )}
                </div>

                <div className="txta">
                  <Field
                    name="description"
                    as={CustomInputComponent}
                    cols="30"
                    rows="10"
                    placeholder="Descrição"
                  />
                  {errors.description && (
                    <div className="error">{errors.description}</div>
                  )}
                </div>
              </DivColumn1>

              <DivColumn2>
                <div className="divInput">
                  <Field type="text" name="category" placeholder="Categoria" />
                  {errors.category && (
                    <div className="error">{errors.category}</div>
                  )}
                </div>

                <div className="divInput">
                  <Field
                    type="number"
                    name="bar_code"
                    placeholder="Código de barras"
                  />
                  {errors.bar_code && (
                    <div className="error">{errors.bar_code}</div>
                  )}
                </div>

                <div className="divInput">
                  <Field
                    type="date"
                    name="acquisition_date"
                    max={actualDay}
                    placeholder="Data de aquisição"
                    className="inputDate"
                  />
                  {errors.acquisition_date && (
                    <div className="error">{errors.acquisition_date}</div>
                  )}
                </div>

                <div className="divInput">
                  <Field type="url" name="image" placeholder="Url do produto" />
                  {errors.image && <div className="error">{errors.image}</div>}
                </div>

                <div className="btn">
                  <button type="submit">Cadastrar</button>
                  {errors.description && <div className="visual">dsadf</div>}
                </div>
              </DivColumn2>
            </Form>
          )}
        </Formik>
      </MainContainer>
    </>
  );
};
