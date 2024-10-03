import React, { useState } from 'react';

const LoanCalculator = ({ updateFinancialData }) => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');

  const calculateLoanDetails = () => {
    const totalLoanMonths = loanTerm * 12;
    const interestPerMonth = interestRate / 100 / 12;

    const monthlyPayment = (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonths) / 
      ((1 + interestPerMonth) ** totalLoanMonths - 1);
    
    const totalInterestGenerated = (monthlyPayment * totalLoanMonths) - loanAmount;

    // Update financial data
    updateFinancialData('Loans', loanAmount);
    updateFinancialData('Interest', totalInterestGenerated);

    alert(`Monthly Payment: $${monthlyPayment.toFixed(2)}, Total Interest: $${totalInterestGenerated.toFixed(2)}`);
  };

  return (
    <div className="loan-calculator">
      <h2>Loan Calculator</h2>

      <input 
        type="number" 
        placeholder="Loan Amount" 
        value={loanAmount} 
        onChange={(e) => setLoanAmount(Number(e.target.value))} 
      />

      <input 
        type="number" 
        placeholder="Loan Term (in years)" 
        value={loanTerm} 
        onChange={(e) => setLoanTerm(Number(e.target.value))} 
      />

      <input 
        type="number" 
        placeholder="Interest Rate (%)" 
        value={interestRate} 
        onChange={(e) => setInterestRate(Number(e.target.value))} 
      />

      <button onClick={calculateLoanDetails}>Calculate Loan</button>
    </div>
  );
};

export default LoanCalculator;
