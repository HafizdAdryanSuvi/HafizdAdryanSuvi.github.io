import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./components/Home"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Educations from "./components/Educations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Organization from "./components/Organization";
import Form from "./components/Form";
import Experience from "./components/Experience";
import Me from "./components/Me";
import Hobby from "./components/Hobby";
import Aso from "./components/Aso";
import Class from "./components/Class";
import Kongres from "./components/Kongres";

function App() {
  return (
    <Router>
        <div className="App">
            <Navbar/>
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/about">
                        <About/>
                    </Route>
                    <Route exact path="/skills">
                        <Skills/>
                    </Route>
                    <Route exact path="/educations">
                        <Educations/>
                    </Route>
                    <Route exact path="/contact">
                        <Contact/>
                    </Route>
                    <Route exact path="/gallery">
                        <Gallery/>
                    </Route>
                    <Route exact path="/organization">
                        <Organization/>
                    </Route>
                    <Route exact path="/form">
                        <Form/>
                    </Route>
                    <Route exact path="/experience">
                        <Experience/>
                    </Route>
                    <Route exact path="/hobby">
                        <Hobby/>
                    </Route>
                    <Route exact path="/me">
                        <Me/>
                    </Route>
                    <Route exact path="/aso">
                        <Aso/>
                    </Route>
                    <Route exact path="/class">
                        <Class/>
                    </Route>
                    <Route exact path="/kongres">
                        <Kongres/>
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </div>
    </Router>
  );
}

export default App;
