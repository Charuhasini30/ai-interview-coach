import "./ResumeTemplates.css";

function ResumeTemplates() {
  return (
    <div className="templates-container">

      <div className="templates-header">
        <h1>Resume Templates</h1>
        <p>
          Browse ATS-optimized resume templates designed for different career paths.
          Each template follows industry best practices and professional formatting standards.
        </p>
      </div>

      <div className="templates-grid">

        <div className="template-card">
          <div className="template-badge">ATS Score: 95%</div>

          <h2>Software Engineer Resume</h2>

          <p>
            Designed for software developers and engineering roles.
            Highlights projects, technical skills, internships, and coding achievements.
          </p>

          <div className="template-info">
            <span>Industry: Technology</span>
            <span>Used by 5,000+ candidates</span>
          </div>

          <button>View Sample Resume</button>
        </div>

        <div className="template-card">
          <div className="template-badge">ATS Score: 94%</div>

          <h2>Data Scientist Resume</h2>

          <p>
            Showcases machine learning projects, analytics experience,
            research work, and technical expertise.
          </p>

          <div className="template-info">
            <span>Industry: Data & AI</span>
            <span>Used by 3,200+ candidates</span>
          </div>

          <button>View Sample Resume</button>
        </div>

        <div className="template-card">
          <div className="template-badge">ATS Score: 96%</div>

          <h2>AI / ML Engineer Resume</h2>

          <p>
            Optimized for AI, deep learning, LLMs, MLOps,
            and machine learning engineering positions.
          </p>

          <div className="template-info">
            <span>Industry: Artificial Intelligence</span>
            <span>Used by 2,800+ candidates</span>
          </div>

          <button>View Sample Resume</button>
        </div>

        <div className="template-card">
          <div className="template-badge">ATS Score: 92%</div>

          <h2>Student / Fresher Resume</h2>

          <p>
            Ideal for students applying for internships,
            placements, and entry-level opportunities.
          </p>

          <div className="template-info">
            <span>Industry: Entry Level</span>
            <span>Used by 8,000+ candidates</span>
          </div>

          <button>View Sample Resume</button>
        </div>

        <div className="template-card">
          <div className="template-badge">ATS Score: 93%</div>

          <h2>Product Manager Resume</h2>

          <p>
            Focuses on leadership, product strategy,
            stakeholder management, and business impact.
          </p>

          <div className="template-info">
            <span>Industry: Product Management</span>
            <span>Used by 2,100+ candidates</span>
          </div>

          <button>View Sample Resume</button>
        </div>

        <div className="template-card">
          <div className="template-badge">ATS Score: 91%</div>

          <h2>Business Analyst Resume</h2>

          <p>
            Highlights analytical thinking, reporting,
            SQL skills, dashboards, and business insights.
          </p>

          <div className="template-info">
            <span>Industry: Business Analytics</span>
            <span>Used by 1,900+ candidates</span>
          </div>

          <button>View Sample Resume</button>
        </div>

      </div>

    </div>
  );
}

export default ResumeTemplates;