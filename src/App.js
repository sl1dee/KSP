import React from "react";
import './styles/App.css'
import logo from "./images/Full_logo.svg"
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
