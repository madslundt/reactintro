import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "Components/Header";
import { Home, Profile, Settings, Window } from "Pages";

const App: React.FC = () => {
  return (
    <Router>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/settings" component={Settings} />
      <Route path="/window" component={Window} />
    </Router>
  );
};

export default hot(App);
