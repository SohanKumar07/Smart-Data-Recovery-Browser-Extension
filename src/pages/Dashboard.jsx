import "../App.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Smart Data Recovery</h1>

      <p className="subtitle">
        Browser Data Recovery & Security Analysis
      </p>

      <div className="stats">
        <div className="card">
          <h3>Total Artifacts</h3>
          <p>125</p>
        </div>

        <div className="card">
          <h3>Recoverable Data</h3>
          <p>32</p>
        </div>

        <div className="card">
          <h3>Security Alerts</h3>
          <p>7</p>
        </div>

        <div className="card">
          <h3>Last Scan</h3>
          <p>Today</p>
        </div>
      </div>

      <div className="scan-section">
        <h2>Recovery Scanner</h2>

        <p>
          Scan your browser for available data artifacts.
        </p>

        <button className="scan-button">
          Start Scan
        </button>
      </div>
    </div>
  );
}

export default Dashboard;