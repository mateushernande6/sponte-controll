import { Switch, Route } from "react-router-dom";
import { InitPage } from "../components/initPage";
import { Home } from "../page/home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={InitPage} />

      <Route path="/home" component={Home} />
    </Switch>
  );
};

export default Routes;
