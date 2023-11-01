import { useState } from 'react';


const BudgetForm = ({ handleAddBudget }) => {
  const [budgetTitle, setBudgetTitle] = useState('');
  const [budget, setBudget] = useState(0);
  const [spent, setSpent] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new budget to the array of budgets
    handleAddBudget({ budgetTitle, budget, spent })

    // Reset the form
    setBudgetTitle('');
    setBudget(0);
    setSpent(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Budget title"
        value={budgetTitle}
        onChange={(e) => setBudgetTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
      <input
        type="number"
        placeholder="Spent"
        value={spent}
        onChange={(e) => setSpent(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BudgetForm;
