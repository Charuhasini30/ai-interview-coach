import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import ResumeAnalysis from "./pages/ResumeAnalysis";
import ATSScore from "./pages/ATSScore";
import MockInterview from "./pages/MockInterview";
import CareerRoadmaps from "./pages/CareerRoadmaps";
import ResumeTemplates from "./pages/ResumeTemplates";
import JobTracker from "./pages/JobTracker";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="app-layout">
        <button
  className="menu-btn"
  onClick={() => setSidebarOpen(!sidebarOpen)}
>
  ☰
</button>

        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <h2>AI Resume Coach</h2>

          <Link to="/">Dashboard</Link>
          <Link to="/resume-analysis">Resume Analysis</Link>
          <Link to="/ats-score">ATS Score</Link>
          <Link to="/mock-interview">Mock Interview</Link>
          <Link to="/career-roadmaps">Career Roadmaps</Link>
          <Link to="/resume-templates">Resume Templates</Link>
          <Link to="/job-tracker">Job Tracker</Link>
        </aside>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/resume-analysis" element={<ResumeAnalysis />} />
            <Route path="/ats-score" element={<ATSScore />} />
            <Route path="/mock-interview" element={<MockInterview />} />
            <Route path="/career-roadmaps" element={<CareerRoadmaps />} />
            <Route path="/resume-templates" element={<ResumeTemplates />} />
            <Route path="/job-tracker" element={<JobTracker />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;