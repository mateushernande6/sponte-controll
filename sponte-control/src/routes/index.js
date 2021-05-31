import { Switch, Route } from "react-router-dom";
import { InitPage } from "../components/initPage";
import { Home } from "../page/home";
import { Stock } from "../page/stock";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/" component={InitPage} />

        <Route path="/home" component={Home} />

        <Route path="/stock" component={Stock} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
