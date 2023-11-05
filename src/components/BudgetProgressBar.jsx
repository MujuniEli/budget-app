/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const BudgetProgressBar = ({ budget }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const newProgress = Math.min(budget.spent / budget.budget, 1);
    setProgress(newProgress);
  }, [budget.spent]);

  const progressBarColor = () => {
    if (progress > 1) {
      return 'red';
    } else {
      return '#6c5b7b';
    }
  };

  return (
    <div className="budget">
        <h2 className="budget-title">{budget.title}</h2>
        <div className="budget-progress-bar">
        <div className="inner" style={{ width: `${progress * 100}%`, backgroundColor: progressBarColor() }}></div>
        <p className="budget-info">Budget: {budget.budget} | Spent: {budget.spent}</p>
        </div>
    </div>
  );
};

export default BudgetProgressBar;
