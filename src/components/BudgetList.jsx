import { useState } from 'react';
import BudgetForm from './BudgetForm';

const BudgetList = () => {
  const [budgets, setBudgets] = useState([]);

  const handleAddBudget = (budget) => {
    // Add the new budget to the array of budgets
    setBudgets([budget, ...budgets]);
  };

  return (
    <div>
      <h1>Budget List</h1>
      <BudgetForm handleAddBudget={handleAddBudget} />
      
        {budgets.map((budget, index) => (
          <div key={index}>
            <h2>{budget.budgetTitle}</h2>
             <p>{budget.budget}</p>
             <p>{budget.spent}</p>
          </div>
        ))}
      
    </div>
  );
};

export default BudgetList;
