import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import './App.css'

function App() {
  return (
    <BrowserRouter>

    <Switch>

      <Route path="/" component={Home} />

    </Switch>

    </BrowserRouter>
  );
}

export default App;
