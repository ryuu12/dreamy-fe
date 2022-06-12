import Footer from "./components/Footer";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Essays from "./pages/Essays";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/essays" element={<Essays />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
