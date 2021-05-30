import sponteLogo from "../../assets/imagem-sponte-removebg-preview.png";
import { DivHeader, ImgLogo, ImgIconInventoryBack } from "./style";
import InventoryIcon from "../../assets/inventory_2_white_24dp.svg";
import ToBack from "../../assets/keyboard_return_white_24dp.svg";
import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

export const Header = () => {
  const [local, setLocal] = useState("");
  const history = useHistory();

  const usePageViews = () => {
    let location = useLocation();
    useEffect(() => {
      setLocal(location.pathname);
    }, [location]);
  };
  usePageViews();

  return (
    <>
      <DivHeader>
        <div></div>
        <ImgLogo src={sponteLogo} alt="sponte" />
        {local && local === "/home" ? (
          <ImgIconInventoryBack
            onClick={() => history.push("/stock")}
            src={InventoryIcon}
            alt="inventory"
          />
        ) : (
          <ImgIconInventoryBack
            onClick={() => history.push("/home")}
            src={ToBack}
            alt="to back"
          />
        )}
      </DivHeader>
    </>
  );
};
