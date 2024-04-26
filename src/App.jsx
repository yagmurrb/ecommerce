import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import BuyNow from "./components/BuyNow";
import Featured from "./components/Featured";
import GreenCarousel from "./components/GreenCarousel";
function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
        <GreenCarousel />
        <BuyNow />

        <Featured />
      </Route>
    </Switch>
  );
}

export default App;
