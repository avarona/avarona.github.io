import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "../Projects";
import About from "../About";
import Contact from "../Contact";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import styles from "./styles.module.scss";

const App = () => (
  <div className={styles.container}>
    <Router>
      <NavBar />
      <div className={styles.content}>
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route exact path='/' />
      </div>
      <Footer />
    </Router>
  </div>
);

export default App;
