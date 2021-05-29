import {
  DivHeader,
  ImgLogo,
  MainContainer,
  TitleH2,
  DivColumn1,
  DivColumn2,
} from "./style";
import sponteLogo from "../../assets/imagem-sponte-removebg-preview.png";

export const Home = () => {
  return (
    <>
      <DivHeader>
        <ImgLogo src={sponteLogo} alt="sponte" />
      </DivHeader>

      <TitleH2>CADASTRO DE PRODUTOS</TitleH2>

      <MainContainer>
        <DivColumn1>
          <input type="text" placeholder="Titulo" />
          <input type="text" placeholder="Valor do produto" />
          <input type="text" placeholder="Medidas" />
          <input type="text" placeholder="Peso" />
          <textarea
            name="description"
            cols="30"
            rows="10"
            placeholder="Descrição"
          />
        </DivColumn1>
        <DivColumn2>
          <input type="text" placeholder="Categoria" />
          <input type="text" placeholder="Código de barras" />
          <input type="text" placeholder="Data de aquisição" />
          <input type="text" placeholder="Url do produto" />
          <div>
            <button>Cadastrar</button>
          </div>
        </DivColumn2>
      </MainContainer>
    </>
  );
};
