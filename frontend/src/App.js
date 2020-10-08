import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Jumbotron from "./components/jumbotron/jumbotron";
import Footer from "./components/footer/footer";
import Content from "./components/content/content";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron>
        <Content />
      </Jumbotron>
      <Footer />
    </div>
  );
}

export default App;
