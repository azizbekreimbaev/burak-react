import React from "react";
import "../css/app.css";
import { Box, Container, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { RippleBadge } from "./MaterialTheme/styled";
import { Switch, Link, Route } from "react-router-dom";
import { About } from "./screens/About";
import { Users } from "./screens/User";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>)
}


function Home() {
  return <h2>Home</h2>;
}



export default App;





