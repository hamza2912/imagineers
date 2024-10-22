import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Emaillist from './pages/emaillist';
import About from './pages/about';
import Program from './pages/program';
import Pricing from './pages/pricing';
import Sessions from './pages/sessions';
import Course1 from './pages/course1';
import Course2 from './pages/course2';
import Course3 from './pages/course3';
import Course4 from './pages/course4';
import Course5 from './pages/course5';
import Course6 from './pages/course6';
import Course7 from './pages/course7';
import Course8 from './pages/course8';
import Course9 from './pages/course9';
import Course10 from './pages/course10';
import Course11 from './pages/course11';
import Course12 from './pages/course12';
import Blogs from './pages/blogs';
import Blog from './pages/blog';
import './App.css';
import './firebase';

function App() {
  return (
    <BrowserRouter>

    <Switch>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/sessions" component={Sessions} />
      <Route path="/programs" component={Program} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/emaillist" component={Emaillist} />
      <Route path="/icl-animations-and-games-with-scratch" component={Course1} />
      <Route path="/icl-logic-with-scratch" component={Course2} />
      <Route path="/icl-introduction-to-python-programming-for-data-analysis" component={Course3} />
      <Route path="/icl-web-development-mastery" component={Course4} />
      <Route path="/icl-intro-to-datascience" component={Course5} />
      <Route path="/icl-intro-to-cloud-computing" component={Course6} />
      <Route path="/icl-intro-to-ai" component={Course7} />
      <Route path="/icl-c-plus-development" component={Course8} />
      <Route path="/icl-cybersecurity" component={Course9} />
      <Route path="/icl-ai-with-machine-learning" component={Course10} />
      <Route path="/icl-social-media-management" component={Course11} />
      <Route path="/icl-video-design-creation" component={Course12} />
      <Route path="/blogs:id" component={Blog} />
      <Route path="/blogs" component={Blogs} />
      

    </Switch>

    </BrowserRouter>
  );
}

export default App;
