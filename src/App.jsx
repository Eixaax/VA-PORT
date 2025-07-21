"use client";

import { useEffect, useState, useRef } from "react";
import "./App.css";
import "./modal-styles.css";
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
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPaperPlane,
  FaTimes,
  FaUser,
  FaCommentDots,
} from "react-icons/fa";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [showForm, setShowForm] = useState(false);

  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const openForm = () => {
    setShowForm(true);
    // Reset form state when opening
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitted(false);
    setFormErrors({});
  };

  const closeForm = () => {
    setShowForm(false);
    setIsSubmitted(false);
    setFormErrors({});
  };

  // Form handling functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_atoo066",
        "template_oht2yug",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "Collaboration Request", 
        },
        "-JtC18JZmYI4yEIpU"
      );

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
        closeForm();
      }, 3000);
    } catch (error) {
      console.error("Email failed to send:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeForm();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const whyRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("page");
        } else {
          entry.target.classList.remove("page");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    [heroRef, aboutRef, skillsRef, whyRef, contactRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="main-cont">
        <header>
          <a href="">ABOUT</a>
          <a href="">SERVICES</a>
          <a href="">TOOLS</a>
          <a href="">CONTACT</a>
        </header>

        <div
          className="hero"
          ref={heroRef}
          style={{ top: `${scrollY * 0.3}px` }}
        >
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

        <div className="about" ref={aboutRef}>
          <h1>About me</h1>
          <div className="pictures">
            <div className="img-cont left">
              <img src={me || "/placeholder.svg"} alt="" />
            </div>
            <div className="img-cont middle">
              <img src={me || "/placeholder.svg"} alt="" />
            </div>
            <div className="img-cont right">
              <img src={me || "/placeholder.svg"} alt="" />
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

        <div className="skills" ref={skillsRef}>
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
                <img src={gmail || "/placeholder.svg"} alt="" />
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
                <img src={word || "/placeholder.svg"} alt="" />
                <img src={sheets || "/placeholder.svg"} alt="" />
                <img src={excel || "/placeholder.svg"} alt="" />
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
                <img src={drive || "/placeholder.svg"} alt="" />
                <img src={dropbox || "/placeholder.svg"} alt="" />
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
                <img src={gpt || "/placeholder.svg"} alt="" />
              </div>
            </div>
            <div className="skill">
              <lord-icon
                src="https://cdn.lordicon.com/cfoaotmk.json"
                trigger="hover"
                colors="primary:#121331,secondary:#2d3142"
              ></lord-icon>
              <h1>OTHERS</h1>
              <div className="tools">
                <img src={github || "/placeholder.svg"} alt="" />
                <img src={calendar || "/placeholder.svg"} alt="" />
                <img src={meet || "/placeholder.svg"} alt="" />
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
                <img src={trello || "/placeholder.svg"} alt="" />
                <img src={slack || "/placeholder.svg"} alt="" />
                <img src={asana || "/placeholder.svg"} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="why-cont" ref={whyRef}>
          <h1>Why you should hire me</h1>
          <div className="why-me-info">
            <div className="why-me">
              <div className="img-cont">
                <img src={me || "/placeholder.svg"} alt="" />
              </div>
            </div>
            <div className="why-info">
              <div className="info">
                <strong>Tech-Savvy</strong>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Proficient in
                  using various software applications and online tools — the
                  internet is my turf and digital platforms feel second nature.
                </p>
              </div>
              <div className="info">
                <strong>Adaptive</strong>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quick to
                  adjust to new tasks, tools, or environments; thrives in
                  fast-changing or unfamiliar situations.
                </p>
              </div>
              <div className="info">
                <strong>Fast Learner</strong>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Able to absorb
                  new information and skills rapidly, often requiring little to
                  no repetition or guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact" ref={contactRef}>
          <h1>Let's work together</h1>
          <div className="contact-info">
            <p>
              While I may not have prior professional experience, I bring with
              me a strong foundation in tech skills, a mindset rooted in
              continuous learning, and the ability to quickly adapt to new tools
              and environments. I am a fast learner who thrives both in
              collaborative settings and when working independently. You can
              count on me to take initiative, communicate effectively, and
              consistently deliver results — even with minimal supervision.
            </p>
            <button className="contact-button" onClick={openForm}>
              GET IN TOUCH
              <FaPaperPlane className="btn-icon" />
            </button>
            <div className="links">
              <a
                href="https://www.facebook.com/eixaax"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="social-icon" />
              </a>
              <a
                href="https://www.instagram.com/eixaxx/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3F__coig_login%3D1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Modal */}
        {showForm && (
          <div
            className="modal-overlay"
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div
              className="modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="modal-header">
                <h2 id="modal-title">Contact Me</h2>
                <button
                  className="close-button"
                  onClick={closeForm}
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Content */}
              <div className="modal-content">
                {isSubmitted ? (
                  <div className="success-message">
                    <div className="success-icon">
                      <FaPaperPlane />
                    </div>
                    <h3>Message Sent!</h3>
                    <p>
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-field">
                      <label htmlFor="name" className="form-label">
                        <FaUser className="label-icon" />
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`form-input ${
                          formErrors.name ? "error" : ""
                        }`}
                        required
                      />
                      {formErrors.name && (
                        <span className="error-message">{formErrors.name}</span>
                      )}
                    </div>

                    <div className="form-field">
                      <label htmlFor="email" className="form-label">
                        <FaEnvelope className="label-icon" />
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`form-input ${
                          formErrors.email ? "error" : ""
                        }`}
                        required
                      />
                      {formErrors.email && (
                        <span className="error-message">
                          {formErrors.email}
                        </span>
                      )}
                    </div>

                    <div className="form-field">
                      <label htmlFor="message" className="form-label">
                        <FaCommentDots className="label-icon" />
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or question..."
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`form-textarea ${
                          formErrors.message ? "error" : ""
                        }`}
                        required
                      />
                      {formErrors.message && (
                        <span className="error-message">
                          {formErrors.message}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="submit-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="spinner" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="button-icon" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
