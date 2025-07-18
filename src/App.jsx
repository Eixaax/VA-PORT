import React from "react";
import "./App.css";
import me from "./assets/me.jpg";
import asana from "./assets/images/asana.png";
import gpt from "./assets/images/chatgpt.png";
import dropbox from "./assets/images/dropbox.png";
import excel from "./assets/images/excel.png";
import github from "./assets/images/github.png";
import gmail from "./assets/images/gmail.png";
import calendar from "./assets/images/google-calendar.png";
import drive from "./assets/images/google-drive.png";
import meet from "./assets/images/meet.png";
import sheets from "./assets/images/sheets.png";
import slack from "./assets/images/slack.png";
import trello from "./assets/images/trello.png";
import word from "./assets/images/word.png";
// import asana from "./assets/images/asana.png";
// import asana from "./assets/images/asana.png";

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

        <div className="skills">
          <h1>MY SKILLS</h1>

          <div className="skillset">
            <div className="skill">
              <lord-icon
                src="https://cdn.lordicon.com/apmrcxtj.json"
                trigger="hover"
                colors="primary:#2d3142,secondary:#2d3142"
              ></lord-icon>
              <h1>EMAIL MANAGEMENT</h1>
              <div className="tools">
                  <img src={gmail} alt="" />
              </div>
            </div>
            <div className="skill">
              <lord-icon
                src="https://cdn.lordicon.com/fikcyfpp.json"
                trigger="hover"
                colors="primary:#121331,secondary:#2d3142"
              ></lord-icon>
              <h1>DATA ENTRY</h1>
              <div className="tools">
                <img src={word} alt="" />
                <img src={sheets} alt="" />
                <img src={excel} alt="" />
              </div>
            </div>
            <div className="skill">
              <lord-icon
                src="https://cdn.lordicon.com/tsrgicte.json"
                trigger="hover"
                colors="primary:#2d3142,secondary:#2d3142"
              ></lord-icon>
              <h1>FILE MANAGEMENT</h1>
              <div className="tools">
                <img src={drive} alt="" />
                <img src={dropbox} alt="" />
              </div>
            </div>
            <div className="skill">
              <lord-icon
                src="https://cdn.lordicon.com/wjyqkiew.json"
                trigger="hover"
                colors="primary:#2d3142,secondary:#2d3142"
              ></lord-icon>
              <h1>RESEARCHING</h1>
              <div className="tools">
                <img src={gpt} alt="" />
              </div>
            </div>
            <div className="skill">
              <lord-icon
                src="https://cdn.lordicon.com/cfoaotmk.json"
                trigger="hover"
                colors="primary:#121331,secondary:#2d3142">
              </lord-icon>
              <h1>OTHERS</h1>
              <div className="tools">
                <img src={github} alt="" />
                <img src={calendar} alt="" />
                <img src={meet} alt="" />
              </div>
            </div>
            <div className="skill">
              <lord-icon
                src="https://cdn.lordicon.com/bsmnglum.json"
                trigger="hover"
                colors="primary:#121331,secondary:#2d3142"
              ></lord-icon>
              <h1>TASK MANAGEMENT</h1>
              <div className="tools">
                <img src={trello} alt="" />
                <img src={slack} alt="" />
                <img src={asana} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="why-cont">
          <h1>Why you should hire me</h1>

          <div className="why-me-info">
            <div className="why-me">
              <div className="img-cont">
                <img src={me} alt="" />
              </div>
            </div>
            <div className="why-info">
              <div className="info">
                <strong>Tech-Savvy</strong>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Proficient in using various software applications and online tools — the internet is my turf and digital platforms feel second nature.</p>
              </div>
              <div className="info">
                <strong>Adaptive</strong>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quick to adjust to new tasks, tools, or environments; thrives in fast-changing or unfamiliar situations.</p>
              </div>
              <div className="info">
                <strong>Fast Learner</strong>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Able to absorb new information and skills rapidly, often requiring little to no repetition or guidance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
