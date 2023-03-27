import React from "react";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home/>
      <About />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;