import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Emaillist from './pages/emaillist';
import About from './pages/about';
import Program from './pages/program';
import Pricing from './pages/pricing';
import './App.css';
import './firebase';

function App() {
  return (
    <BrowserRouter>

    <Switch>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/programs" component={Program} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/emaillist" component={Emaillist} />

    </Switch>

    </BrowserRouter>
  );
}

export default App;
