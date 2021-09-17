import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";

const Red = (props) => {
  return (
    <div className="red">
      <h1>RED</h1>
    </div>
  );
};

const Blue = (props) => {
  return (
    <div className="blue">
      <h1>BLUE</h1>
    </div>
  );
};

const Green = (props) => {
  return (
    <div className="green">
      <h1>BLUE</h1>
    </div>
  );
};

<<<<<<< HEAD
const Purple = (props) => {
  return (
    <div className="purple">
      <h1>Purple</h1>
=======
const Yellow = (props) => {
  return (
    <div className="yellow">
      <h1>Yellow</h1>
>>>>>>> main
    </div>
  );
};

const Main = (props) => {
  return (
    <div id="container">
      <div id="navbar">
        {/* vv Navigation vv */}
        <Link to="/blue">Go to Blue</Link>
        <Link to="/red">Go to Red</Link>
        <Link to="/green">Go to Green</Link>
<<<<<<< HEAD

        <Link to="/purple">Go to Purple</Link>
=======
        <Link to="/yellow">Go to Yellow</Link>
>>>>>>> main
      </div>

      <div id="main-section">
        {/* vv Routes vv */}
        <Route path="/blue" component={Blue} />
        <Route path="/red" component={Red} />
        <Route path="/green" component={Green} />
<<<<<<< HEAD

        <Route path="/purple" component={Purple} />

=======
        <Route path="/yellow" component={Yellow} />
>>>>>>> main
        <Route exact path="/" component={Red} />
      </div>
    </div>
  );
};

const app = document.getElementById("app");
ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  app
);
