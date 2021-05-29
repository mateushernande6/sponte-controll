import { ImgSponte, ImgControl, DivInitPage, H2Control } from "./style";
import sponteLogo from "../../assets/imagem-sponte-removebg-preview.png";
import sponteControl from "../../assets/_svgControlSponte.svg";

export const InitPage = () => {
  return (
    <>
      <DivInitPage>
        <div className="divCont">
          <ImgSponte src={sponteLogo} alt="sponte" />
          <br />
          <H2Control>CONTROL</H2Control>
        </div>
        <ImgControl src={sponteControl} alt="sponte control" />
      </DivInitPage>
    </>
  );
};
