import React from "react";
import General from "./General.js";
import Health from "./Health.js";
import Sports from "./Sports.js";
import Business from "./Business.js";
import Entertainment from "./Entertainment.js";
import Technology from "./Technology.js";
import Science from "./Science.js";
import SearchResult from "./SearchResult.js";
import "./Content.css";
import Categorybar from "./Categorybar.js";
import { Route, Switch } from "react-router-dom";

function Content() {
  return (
    <section className="contentmain">
      <Switch>
        <Route exact path="/" component={General} />
        <Route exact path="/entertainment" component={Entertainment} />
        <Route exact path="/sports" component={Sports} />
        <Route exact path="/science" component={Science} />
        <Route exact path="/health" component={Health} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/Technology" component={Technology} />
        <Route exact path="/q=:query" component={SearchResult} />
      </Switch>
    </section>
  );
}

export default Content;
