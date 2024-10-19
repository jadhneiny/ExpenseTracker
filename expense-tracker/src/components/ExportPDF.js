import React from 'react';
import { useSelector } from 'react-redux';
import { jsPDF } from 'jspdf';

const ExportPDF = () => {
  const expenses = useSelector(state => state.expenses.expenses);
  const budget = useSelector(state => state.expenses.budget);
  const currency = useSelector(state => state.expenses.currency);

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(18);
    doc.text('Expense Report', 20, 20);
    
    // Add budget and currency information
    doc.setFontSize(12);
    doc.text(`Budget: ${currency} ${budget}`, 20, 30);
    
    // Add expenses table header
    doc.text('Expenses:', 20, 40);
    doc.text('Description', 20, 50);
    doc.text('Amount', 100, 50);
    doc.text('Category', 140, 50);
    doc.text('Date', 180, 50);
    
    // Loop through expenses and add them to the PDF
    expenses.forEach((exp, index) => {
      const y = 60 + index * 10;
      doc.text(exp.description, 20, y);
      doc.text(`${currency} ${exp.amount}`, 100, y);
      doc.text(exp.category, 140, y);
      doc.text(exp.date, 180, y);
    });
    
    // Save the generated PDF
    doc.save('expense_report.pdf');
  };

  return (
    <div className="max-w-lg mx-auto mb-4">
      <button 
        onClick={generatePDF} 
        className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-600"
      >
        Download Expenses PDF
      </button>
    </div>
  );
};

export default ExportPDF;