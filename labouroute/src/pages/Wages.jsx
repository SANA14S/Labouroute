import { useState, useEffect } from "react";

const Wages = () => {
  const [workerName, setWorkerName] = useState("");
  const [jobType, setJobType] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [reportData, setReportData] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState(""); // Weekly or Monthly

  // Function to handle wage submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5002/api/wages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ workerName, jobType, date, amount }),
    });

    if (response.ok) {
      alert("Wage saved successfully!");
     
      setJobType("");
      setDate("");
      setAmount("");
    } else {
      alert("Failed to save wage.");
    }
  };

  // Function to fetch weekly or monthly report
  const fetchReport = async () => {
    if (!workerName) {
      alert("Please enter worker's name first");
      return;
    }
  
    console.log("Fetching report for:", workerName); // Debugging log
  
    try {
      const response = await fetch(`http://localhost:5002/api/wages/report?workerName=${workerName}`);
      const data = await response.json();
  
      console.log("Received data:", data); // Debugging log
  
      if (response.ok) {
        setReport(data);
      } else {
        alert("Failed to fetch report.");
      }
    } catch (error) {
      console.error("Error fetching report:", error);
      alert("Error fetching report.");
    }
  };
  

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Wage Tracker</h2>

      {/* Wage Entry Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Worker Name"
          value={workerName}
          onChange={(e) => setWorkerName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Job Type (e.g., Construction, Plumbing)"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Save Wage</button>
      </form>

      {/* Report Section */}
      <div>
        <h2>View Report</h2>
        <button onClick={() => fetchReport("weekly")}>View Weekly Report</button>
        <button onClick={() => fetchReport("monthly")}>View Monthly Report</button>

        <h3>{selectedPeriod ? `Report (${selectedPeriod})` : "No report selected"}</h3>
        {reportData.length > 0 ? (
          <ul>
            {reportData.map((entry, index) => (
              <li key={index}>
                {new Date(entry.date).toLocaleDateString()} - ₹{entry.amount}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default Wages;
