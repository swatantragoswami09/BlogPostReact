import "./App.css";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Article from "./pages/Article";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/articles/:id" exact component={Article} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
