import { useState } from "react";
import "./ResumeAnalysis.css";

function ResumeAnalysis() {
  const [resume, setResume] = useState("");

  return (
    <div className="resume-analysis">

      <div className="resume-header">
        <h1>AI Resume Analysis</h1>
        <p>
          Upload or paste your resume to receive AI-powered feedback,
          ATS recommendations, skill gap analysis, and improvement suggestions.
        </p>
      </div>

      <div className="resume-features">

        <div className="feature-box">
          <h3>ATS Optimization</h3>
          <p>
            Improve resume keywords and formatting for Applicant Tracking Systems.
          </p>
        </div>

        <div className="feature-box">
          <h3>Skill Gap Analysis</h3>
          <p>
            Discover missing skills required for your target role.
          </p>
        </div>

        <div className="feature-box">
          <h3>Professional Feedback</h3>
          <p>
            Get actionable suggestions to strengthen your resume.
          </p>
        </div>

      </div>

      <div className="resume-input-card">
        <h2>Paste Your Resume</h2>

        <textarea
          placeholder="Paste your resume content here..."
          value={resume}
          onChange={(e) => setResume(e.target.value)}
        />

        <button>Analyze Resume</button>
      </div>

      <div className="tips-card">
        <h2>Resume Tips</h2>

        <ul>
          <li>Use measurable achievements whenever possible.</li>
          <li>Include relevant technical skills.</li>
          <li>Tailor your resume to the job description.</li>
          <li>Keep formatting clean and professional.</li>
          <li>Use action verbs to describe accomplishments.</li>
        </ul>
      </div>

    </div>
  );
}

export default ResumeAnalysis;