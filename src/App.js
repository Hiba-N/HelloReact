import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Signup from "./Signup";
import About from "./About";
import "./styles.css";
import MapComponent from "./Map"; // Ensure the file name matches

function App() {
    let component;
    switch (window.location.pathname) {
        default:
            component = <MapComponent />;
            break;
        case "/signup":
            component = <Signup />;
            break;
        case "/about":
            component = <About />;
            break;
    }
    return (
        <>
            <Navbar />
            <div className="container">{component}</div>
        </>
    );
}

export default App;
