import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="welcome-card">
        <h1>Welcome to AI Resume Coach</h1>
        <p>
          Improve your resume, optimize ATS performance, prepare for interviews,
          and accelerate your career growth with AI-powered insights.
        </p>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Resume Score</h3>
          <h2>85%</h2>
          <p>Overall quality of your resume.</p>
        </div>

        <div className="stat-card">
          <h3>ATS Match</h3>
          <h2>78%</h2>
          <p>Compatibility with Applicant Tracking Systems.</p>
        </div>

        <div className="stat-card">
          <h3>Interview Readiness</h3>
          <h2>72%</h2>
          <p>Preparedness for technical interviews.</p>
        </div>

        <div className="stat-card">
          <h3>Career Progress</h3>
          <h2>64%</h2>
          <p>Progress toward your target role.</p>
        </div>

      </div>

      <div className="features-section">

        <div className="feature-card">
          <h3>📄 Resume Analysis</h3>
          <p>
            Get AI-generated feedback on formatting, skills,
            keywords, and professional impact.
          </p>
        </div>

        <div className="feature-card">
          <h3>🎯 ATS Optimization</h3>
          <p>
            Improve keyword matching and increase your chances
            of passing automated resume screening.
          </p>
        </div>

        <div className="feature-card">
          <h3>💼 Mock Interviews</h3>
          <p>
            Practice behavioral and technical interviews
            with AI-generated questions.
          </p>
        </div>

        <div className="feature-card">
          <h3>🚀 Career Roadmaps</h3>
          <p>
            Follow personalized learning paths for Software Engineering,
            AI/ML, Data Science, and more.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;