import "./CareerRoadmaps.css";

function CareerRoadmaps() {
  return (
    <div className="roadmap-container">

      <div className="roadmap-header">
        <h1>Career Roadmaps</h1>
        <p>
          Explore structured learning paths designed to help you achieve your
          dream career. Follow step-by-step roadmaps and track your progress.
        </p>
      </div>

      <div className="roadmap-grid">

        <div className="roadmap-card">
          <h2>Software Engineer</h2>
          <p>
            Learn programming, data structures, algorithms, system design,
            databases, and interview preparation.
          </p>

          <ul>
            <li>Programming Fundamentals</li>
            <li>Data Structures & Algorithms</li>
            <li>Databases</li>
            <li>System Design</li>
            <li>Interview Preparation</li>
          </ul>

          <button>View Roadmap</button>
        </div>

        <div className="roadmap-card">
          <h2>Data Scientist</h2>
          <p>
            Build expertise in statistics, machine learning, data analysis,
            visualization, and AI technologies.
          </p>

          <ul>
            <li>Python</li>
            <li>Statistics</li>
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Projects & Portfolio</li>
          </ul>

          <button>View Roadmap</button>
        </div>

        <div className="roadmap-card">
          <h2>AI / ML Engineer</h2>
          <p>
            Master machine learning, deep learning, LLMs, MLOps, and AI
            deployment pipelines.
          </p>

          <ul>
            <li>Mathematics</li>
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Generative AI</li>
            <li>MLOps</li>
          </ul>

          <button>View Roadmap</button>
        </div>

        <div className="roadmap-card">
          <h2>Frontend Developer</h2>
          <p>
            Become proficient in HTML, CSS, JavaScript, React, and modern web
            development practices.
          </p>

          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>State Management</li>
            <li>Deployment</li>
          </ul>

          <button>View Roadmap</button>
        </div>

      </div>

    </div>
  );
}

export default CareerRoadmaps;