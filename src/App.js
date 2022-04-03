import React from "react";
// import Navbar from "./Navbar";
// import { Routing } from "./Routning";
import Home from "./Page/Hero"
import About from "./Page/About"
import Motive from "./Page/Services"
import Contact from "./Page/Contact"
import Blogs from "./Page/Blogs"
import Project from "./Page/Projects"
const App = () => {
  return (
    <>
    <Home/>
    <About/>
    <Motive/>
    <Project/>
    <Blogs/>
    <Contact/>
    </>
  );
};

export default App;
