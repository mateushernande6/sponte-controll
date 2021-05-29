import Routes from "./routes";
import { useHistory } from "react-router-dom";
const App = () => {
  const history = useHistory();

  const alterPage = () => {
    setTimeout(() => {
      history.push("/home");
    }, 2000);
  };

  alterPage();

  return (
    <>
      <div>
        <Routes />
      </div>
    </>
  );
};

export default App;
