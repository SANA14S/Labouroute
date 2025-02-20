import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2'; // Import Pie chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; // Import Chart.js components
import '../styles/Wages.css'; // Import CSS

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function Wages() {
  const [hoursWorked, setHoursWorked] = useState(0);
  const [hourlyWage, setHourlyWage] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [monthlyReport, setMonthlyReport] = useState([]);
  const [reportFilter, setReportFilter] = useState('month'); // Default filter: month

  const calculateEarnings = () => {
    const earnings = hoursWorked * hourlyWage;
    setTotalEarnings(earnings);

    // Add entry to monthly report
    const newEntry = {
      date,
      hoursWorked,
      hourlyWage,
      earnings,
    };
    setMonthlyReport([...monthlyReport, newEntry]);
  };

  // Filter report based on selected filter (month, week, year)
  const filteredReport = monthlyReport.filter((entry) => {
    const entryDate = new Date(entry.date);
    const now = new Date();

    if (reportFilter === 'month') {
      return (
        entryDate.getMonth() === now.getMonth() &&
        entryDate.getFullYear() === now.getFullYear()
      );
    } else if (reportFilter === 'week') {
      const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
      const endOfWeek = new Date(now.setDate(now.getDate() + 6));
      return entryDate >= startOfWeek && entryDate <= endOfWeek;
    } else if (reportFilter === 'year') {
      return entryDate.getFullYear() === now.getFullYear();
    }
    return true;
  });

  // Prepare data for the pie chart
  const pieChartData = {
    labels: filteredReport.map((entry) => entry.date),
    datasets: [
      {
        label: 'Earnings (₹)',
        data: filteredReport.map((entry) => entry.earnings),
        backgroundColor: [
          '#FFC300',
          '#556B2F',
          '#4682B4',
          '#87CEEB',
          '#BC8F8F',
          '#663399',
          '#DB7093',
        ],
        hoverBackgroundColor: [
          '#FFC300',
          '#556B2F',
          '#4682B4',
          '#87CEEB',
          '#BC8F8F',
          '#663399',
          '#DB7093',
        ],
      },
    ],
  };

  return (
    <div className="wages">
      {/* Left Section: Wage Tracker */}
      <div className="wage-left">
        <h1>Wage Tracker</h1>
        <p>Calculate your total earnings based on hours worked and hourly wage.</p>

        <div className="wage-tracker">
          <div className="input-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="hoursWorked">Hours Worked:</label>
            <input
              type="number"
              id="hoursWorked"
              value={hoursWorked}
              onChange={(e) => setHoursWorked(parseFloat(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label htmlFor="hourlyWage">Hourly Wage (₹):</label>
            <input
              type="number"
              id="hourlyWage"
              value={hourlyWage}
              onChange={(e) => setHourlyWage(parseFloat(e.target.value))}
            />
          </div>

          <button onClick={calculateEarnings}>Calculate Earnings</button>

          <div className="result">
            <h3>Total Earnings: ₹{totalEarnings.toFixed(2)}</h3>
          </div>
        </div>

        <div className="report-controls">
          <button onClick={() => setReportFilter('month')}>Month</button>
          <button onClick={() => setReportFilter('week')}>Week</button>
          <button onClick={() => setReportFilter('year')}>Year</button>
        </div>
      </div>

      {/* Right Section: Pie Chart and Report Table */}
      <div className="wage-right">
        <div className="pie-chart-container">
          <h2>Earnings Distribution</h2>
          <div className="pie-chart">
            <Pie data={pieChartData} />
          </div>
        </div>

        <div className="monthly-report">
          <h2>{reportFilter.charAt(0).toUpperCase() + reportFilter.slice(1)} Report</h2>
          {filteredReport.length === 0 ? (
            <p>No entries yet. Start tracking your earnings!</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Hours Worked</th>
                  <th>Hourly Wage (₹)</th>
                  <th>Earnings (₹)</th>
                </tr>
              </thead>
              <tbody>
                {filteredReport.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.date}</td>
                    <td>{entry.hoursWorked}</td>
                    <td>{entry.hourlyWage}</td>
                    <td>{entry.earnings.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Wages;