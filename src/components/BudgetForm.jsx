import { useState } from 'react';


const BudgetForm = ({ handleAddBudget }) => {
  const [budgetTitle, setBudgetTitle] = useState('');
  const [budget, setBudget] = useState("");
  const [spent, setSpent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new budget to the array of budgets
    handleAddBudget({ budgetTitle, budget, spent })

    // Reset the form
    setBudgetTitle('');
    setBudget("");
    setSpent("");
  };

  return (
    <form onSubmit={handleSubmit}className='budget-form'>
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
      <button type="submit">Add Budget</button>
    </form>
  );
};

export default BudgetForm;
