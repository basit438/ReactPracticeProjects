import React, { useState } from 'react';
import PieChart from './components/PieChart';
import LoanCalculator from './components/LoanCalculator';
import './App.css';

function App() {
  const [financialData, setFinancialData] = useState({
    Savings: 5000,
    Investments: 3000,
    Loans: 2000,
    Expenses: 1000,
    Interest: 0
  });

  // Function to update financial data based on loan calculation
  const updateFinancialData = (category, amount) => {
    setFinancialData((prevData) => ({
      ...prevData,
      [category]: amount
    }));
  };

  return (
    <div className="App">
      <h1>Bank Dashboard</h1>

      <div className="dashboard">
        {/* Loan Calculator */}
        <LoanCalculator updateFinancialData={updateFinancialData} />

        {/* Pie Chart */}
        <PieChart data={financialData} />
      </div>
    </div>
  );
}

export default App;
