import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import BuyMe from "./components/BuyMe";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
        <BuyMe />
      </Route>
    </Switch>
  );
}

export default App;
