import React, { useState } from "react";

export default function CalorieTracker() {
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");
  const [meals, setMeals] = useState([]);

  const addMeal = () => {
    if (!food || !calories) return;
    setMeals([...meals, { food, calories: parseInt(calories) }]);
    setFood("");
    setCalories("");
  };

  const totalCalories = meals.reduce((sum, m) => sum + m.calories, 0);

  return (
    <div className="tracker">
      <h2>Diet Calorie Tracker</h2>
      <input value={food} onChange={(e) => setFood(e.target.value)} placeholder="Food Item" />
      <input value={calories} onChange={(e) => setCalories(e.target.value)} placeholder="Calories" />
      <button onClick={addMeal}>Add</button>

      <h3>Meals</h3>
      <ul>
        {meals.map((m, i) => (
          <li key={i}>{m.food} - {m.calories} kcal</li>
        ))}
      </ul>
      <h4>Total: {totalCalories} kcal</h4>
      <p>{totalCalories > 2000 ? " Over target! Try lighter meals." : " On track today!"}</p>
    </div>
  );
}
