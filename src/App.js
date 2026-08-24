import React, { Component } from "react";
import "./App.css";

// ---- Functional component ----
function Header() {
  return (
    <div className="header">
      <h1>Ashish Kumar Pandey</h1>
      <p>AI/ML Engineer</p>
      <p>ashishpandey99052@gmail.com | +91-9905256515 | Bengaluru</p>
    </div>
  );
}

// ---- Class component ----
class Education extends Component {
  render() {
    return (
      <div className="section">
        <h2>Education</h2>
        <p>MCA - Nitte Meenakshi Institute of Technology (NMIT), 2025-2027</p>
        <p>BCA - Anugrah Narayan  College , 2022-2025</p>
      </div>
    );
  }
}

// ---- Main App component ----
function App() {
  const skills = ["Python", "Machine Learning","LangChain","LangGraph", "SQL", "MongoDB"];

  return (
    <div className="resume">
      <Header />

      <div className="section">
        <h2>Objective</h2>
        <p>To work as an AI/ML Engineer  and build Top Quality AI Agents  using the LangChain and LangGraph.</p>
      </div>

      <Education />

      <div className="section">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;