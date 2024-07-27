/**
 * Main component of app. Gets rendered by index.js
 * Central hub where we assemble our other components and
 * tie everything together like layout, routes, etc.
 */
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Problems from "./pages/problems";
import ProblemDetail from "./pages/problemDetail";
import SignUp from "./pages/signup";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/problems" element={<Problems />} />
                <Route path="/problems/:id" element={<ProblemDetail />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
