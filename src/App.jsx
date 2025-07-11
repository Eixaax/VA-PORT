import React from "react";
import "./App.css";
import me from "./assets/me.jpg";

function App() {
  return (
    <>
      <div className="main-cont">
        <header>
          <a href="">ABOUT</a>
          <a href="">SERVICES</a>
          <a href="">TOOLS</a>
          <a href="">CONTACT</a>
        </header>
        <div className="hero">
          <h1>
            Hello
            <lord-icon
              src="https://cdn.lordicon.com/pbamwmcj.json"
              trigger="loop"
              colors="primary:#ebe6ef,secondary:#2d3142,tertiary:#2d3142"
            ></lord-icon>
          </h1>

          <div className="name">
            <h2>I'm</h2>
            <h2 className="namecol">Isaac Adjaluddin</h2>
          </div>
          <p>VIRTUAL ASSISTANT</p>
        </div>

        <div className="about">
          <h1>About me</h1>
          <div className="pictures">
            <div className="img-cont left">
              <img src={me} alt="" />
            </div>
            <div className="img-cont middle">
              <img src={me} alt="" />
            </div>
            <div className="img-cont right">
              <img src={me} alt="" />
            </div>
          </div>
          <div className="me-info">
            <p>
              Highly adaptable and resourceful BS Information Technology
              graduate from Western Mindanao State University, with strong
              multitasking abilities, computer literate and excellent time
              management skills. Proven capacity to quickly learn new
              technologies and thrive in fast-paced environments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
