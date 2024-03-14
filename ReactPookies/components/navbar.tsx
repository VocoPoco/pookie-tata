// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Assuming Navbar is ready
import Home from "./pages/Home"; // Your initial App component renamed to Home.tsx
import AboutUs from "./pages/AboutUs";
import Settings from "./pages/Settings";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
};

export default App;
