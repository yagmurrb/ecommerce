import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import BuyNow from "./components/BuyNow";
import Featured from "./components/Featured";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
        <BuyNow />
        <Featured />
      </Route>
    </Switch>
  );
}

export default App;
