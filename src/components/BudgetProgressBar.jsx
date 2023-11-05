/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const BudgetProgressBar = ({ budget }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const newProgress = budget.spent / budget.budget;
    setProgress(newProgress);
  }, [budget.spent]);

  const progressBarColor = () => {
    if (progress >= 1) {
      return 'red';
    } else if (progress >= 0.75) {
      return 'orange';
    } else {
      return 'green';
    }
  };

  return (
    <div className="budget">
        <h2>{budget.title}</h2>
        <div className="budget-progress-bar">
        <div className="inner" style={{ width: `${progress * 100}%`, backgroundColor: progressBarColor() }}></div>
        <span>Budget: {budget.budget} | Spent: {budget.spent}</span>
        </div>
    </div>
  );
};

export default BudgetProgressBar;
