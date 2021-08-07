import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { HOME } from "./constants/routes";
import Home from "./containers/Home";
import { ToastProvider } from "react-toast-notifications";

const App = () => (
  <Router>
    <Switch>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={2000}
        placement="top-right"
      >
        <Route exact path={HOME} component={Home} />
      </ToastProvider>
    </Switch>
  </Router>
);

export default App;
