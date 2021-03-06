import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grommet, Main, Box } from "grommet";
import Projects from "../Projects";
import About from "../About";
import Contact from "../Contact";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Placeholder from '../../containers/Placeholder';

const theme = {
  global: {
    font: {
      family: "Arial, Helvetica, sans-serif"
    },
    breakpoints: {}
  }
};

const renderPlaceholder = true;

const App = () => (
  <Router>
    <Grommet theme={theme} full>
      {renderPlaceholder 
        ? <Placeholder />
        : <Main>
          <NavBar />
          <Box flex overflow='auto'>
            <Route path='/projects' component={Projects} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route exact path='/' component={Projects} />
          </Box>
          <Footer />
        </Main>
      }
    </Grommet>
  </Router>
);

export default App;
