import React, { Component } from "react";
import "./App.css";

// ---- Functional component ----
function Header() {
  return (
    <div className="header">
      <h2>Profile</h2>
      <p>Ashish Kumar Pandey</p>
      <p>Gopalganj ,Bihar .</p>
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
        <p>I have seen the Mistakes of Developer since my First Project and improves my Skills over that mistakes ,I Commited to my continous improvements to Enhance the Productivity . To work as an AI/ML Engineer  and build Top Quality AI Agents  using the LangChain and LangGraph.</p>
      </div>

      <Education />

      <div className="section">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;