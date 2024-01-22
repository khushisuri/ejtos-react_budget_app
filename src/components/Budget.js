import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget ,expenses, currency} = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    const totalExpense = expenses.reduce((total, item) => {
      return (total = total + item.cost);
    }, 0);
    console.log(totalExpense);
    if (event.target.value <= 20000) {
        if(event.target.value >= 2000){
           setNewBudget(event.target.value);
           return
        }
        alert("The value of budget cannot be less than spending");
        setNewBudget(2000);
        return
    }
    alert("The value of budget cannot exceed 20000");
    setNewBudget(2000);
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}{budget}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
