import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";

import { Home, Profile, Settings } from "./pages";

const App: React.FC = () => {
  return (
    <Router>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/settings" component={Settings} />
    </Router>
  );
};

export default hot(App);
