import Header from "./components/layouts/Header";
import AvailableMeals from "./components/meals/AvailableMeals";
import MealsSummary from "./components/meals/MealsSummary";

function App() {
  return (
    <div>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
}

export default App;
