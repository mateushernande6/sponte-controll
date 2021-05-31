import { ImgSponte, ImgControl, DivInitPage, H2Control } from "./style";
import sponteLogo from "../../assets/imagem-sponte-removebg-preview.png";
import sponteControl from "../../assets/_svgControlSponte.svg";
import { motion } from "framer-motion";

export const InitPage = () => {
  return (
    <>
      <motion.div
        initial={{ translateX: "-100%" }}
        animate={{ translateX: "0%" }}
        transition={{ duration: 0.5 }}
      >
        <DivInitPage>
          <div className="divCont">
            <ImgSponte src={sponteLogo} alt="sponte" />
            <br />
            <H2Control>CONTROL</H2Control>
          </div>
          <ImgControl src={sponteControl} alt="sponte control" />
        </DivInitPage>
      </motion.div>
    </>
  );
};
