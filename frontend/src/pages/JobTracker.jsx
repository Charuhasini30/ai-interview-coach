import "./JobTracker.css";

function JobTracker() {
  return (
    <div className="jobtracker-container">

      <div className="jobtracker-header">
        <h1>Job Application Tracker</h1>
        <p>
          Organize and monitor your job applications, interviews, and offers
          in one place.
        </p>
      </div>

      <div className="tracker-stats">

        <div className="tracker-card">
          <h3>Applications</h3>
          <h2>12</h2>
          <p>Total jobs applied</p>
        </div>

        <div className="tracker-card">
          <h3>Interviews</h3>
          <h2>4</h2>
          <p>Interview rounds scheduled</p>
        </div>

        <div className="tracker-card">
          <h3>Offers</h3>
          <h2>1</h2>
          <p>Offers received</p>
        </div>

        <div className="tracker-card">
          <h3>Pending</h3>
          <h2>7</h2>
          <p>Awaiting response</p>
        </div>

      </div>

      <div className="applications-section">
        <h2>Recent Applications</h2>

        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Status</th>
              <th>Date Applied</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Google</td>
              <td>Software Engineer Intern</td>
              <td className="pending">Pending</td>
              <td>12 Jun 2026</td>
            </tr>

            <tr>
              <td>Microsoft</td>
              <td>Software Engineer</td>
              <td className="interview">Interview</td>
              <td>08 Jun 2026</td>
            </tr>

            <tr>
              <td>Amazon</td>
              <td>SDE Intern</td>
              <td className="rejected">Rejected</td>
              <td>01 Jun 2026</td>
            </tr>

            <tr>
              <td>Meta</td>
              <td>AI Engineer Intern</td>
              <td className="offer">Offer</td>
              <td>15 Jun 2026</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="tips-section">
        <h2>Job Search Tips</h2>

        <ul>
          <li>Tailor your resume for every application.</li>
          <li>Track application deadlines and follow-ups.</li>
          <li>Prepare interview notes for each company.</li>
          <li>Keep a record of recruiter communications.</li>
          <li>Apply consistently to increase opportunities.</li>
        </ul>
      </div>

    </div>
  );
}

export default JobTracker;