import "./ATSScore.css";

function ATSScore() {
  return (
    <div className="ats-container">

      <div className="ats-header">
        <h1>ATS Score Checker</h1>
        <p>
          Evaluate how well your resume performs in Applicant Tracking Systems
          used by recruiters and hiring managers.
        </p>
      </div>

      <div className="ats-score-cards">

        <div className="score-card">
          <h3>Overall ATS Score</h3>
          <h2>78%</h2>
          <p>Good compatibility with ATS systems.</p>
        </div>

        <div className="score-card">
          <h3>Keyword Match</h3>
          <h2>82%</h2>
          <p>Relevant keywords detected.</p>
        </div>

        <div className="score-card">
          <h3>Formatting</h3>
          <h2>75%</h2>
          <p>Resume structure is mostly ATS-friendly.</p>
        </div>

      </div>

      <div className="analysis-section">
        <h2>ATS Analysis</h2>

        <ul>
          <li>✔ Professional experience is clearly structured.</li>
          <li>✔ Skills section is present and readable.</li>
          <li>✔ Education details are ATS compatible.</li>
          <li>⚠ Add more role-specific keywords.</li>
          <li>⚠ Include measurable achievements.</li>
        </ul>
      </div>

      <div className="recommendation-section">
        <h2>Recommendations</h2>

        <div className="recommendation-card">
          <h3>Keyword Optimization</h3>
          <p>
            Include more keywords from the target job description.
          </p>
        </div>

        <div className="recommendation-card">
          <h3>Improve Impact Statements</h3>
          <p>
            Quantify achievements using numbers and measurable results.
          </p>
        </div>

        <div className="recommendation-card">
          <h3>ATS-Friendly Formatting</h3>
          <p>
            Avoid tables, excessive graphics, and unusual fonts.
          </p>
        </div>

      </div>

    </div>
  );
}

export default ATSScore;