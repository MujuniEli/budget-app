import { useState } from 'react';
import BudgetForm from './BudgetForm';
import BudgetProgressBar from './BudgetProgressBar';

const BudgetList = () => {
  const [budgets, setBudgets] = useState(
    [
      {
        "title": "Groceries",
        "budget": 100,
        "spent": 50
      },
      {
        "title": "Entertainment",
        "budget": 50,
        "spent": 20
      },
      {
        "title": "Transportation",
        "budget": 50,
        "spent": 25
      },
      {
        "title": "Housing",
        "budget": 1000,
        "spent": 800
      },
      {
        "title": "Utilities",
        "budget": 100,
        "spent": 75
      },
      {
        "title": "Healthcare",
        "budget": 50,
        "spent": 0
      },
      {
        "title": "Personal Care",
        "budget": 50,
        "spent": 25
      },
      {
        "title": "Savings",
        "budget": 500,
        "spent": 0
      },
      {
        "title": "Debt Repayment",
        "budget": 200,
        "spent": 100
      },
      {
        "title": "Other",
        "budget": 100,
        "spent": 50
      }
    ]
    
  );

  const handleAddBudget = (budget) => {
    // Add the new budget to the array of budgets
    setBudgets([budget, ...budgets]);
  };

  return (
    <div>
      <h1>Budget List</h1>
      <BudgetForm handleAddBudget={handleAddBudget} />
      
        {budgets.map((budget, index) => (
            <BudgetProgressBar key={index} budget={budget} />
          // <div key={index}>
            
          //   <h2>{budget.budgetTitle}</h2>
          //    <p>{budget.budget}</p>
          //    <p>{budget.spent}</p>
          // </div>
        ))}
      
    </div>
  );
};

export default BudgetList;
