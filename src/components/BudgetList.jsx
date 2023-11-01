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
      <BudgetForm onAddBudget={handleAddBudget} />
      <ul>
        {budgets.map((budget) => (
          <div key={budget.id}>
            <h2>{budget.title}</h2>
             <p>{budget.budget}</p>
             <p>{budget.spent}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BudgetList;
