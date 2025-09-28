import CalorieTracker from "./Diet/CalorieTracker";
import WeightLossTracker from "./Diet/WeightLossTracker";

export default function Diet() {
  return (
    <div>
      <h1>Diet & Weight Loss</h1>
      <CalorieTracker />
      <WeightLossTracker />
    </div>
  );
}
