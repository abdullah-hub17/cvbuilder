import React from "react";
import "./App.css";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Body from "./components/Body";
import Progress from "./components/Progress";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Body />
      <Progress />
      <Footer />
    </div>
  );
}

export default App;
