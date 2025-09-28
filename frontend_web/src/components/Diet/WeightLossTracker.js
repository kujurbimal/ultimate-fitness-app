import React, { useState } from "react";

export default function WeightLossTracker() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (!height || !weight) return;
    const hMeters = height / 100;
    const bmiVal = (weight / (hMeters * hMeters)).toFixed(2);
    setBmi(bmiVal);
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  return (
    <div className="weight-loss">
      <h2>Weight Loss Tracker</h2>
      <input value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height (cm)" />
      <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight (kg)" />
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <p>Status: {getBMICategory(bmi)}</p>
          {bmi >= 25 ? <p>Suggestion: Reduce calorie intake & add cardio.</p> : <p>Great! Maintain your current lifestyle.</p>}
        </div>
      )}
    </div>
  );
}
