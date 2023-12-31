import { useState } from "react";
import Cart from "./components/carts/Cart";
import Header from "./components/layouts/Header";
import AvailableMeals from "./components/meals/AvailableMeals";
import MealsSummary from "./components/meals/MealsSummary";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  const [display, setDisplay] = useState(false);
  const clickButton = () => {
    setDisplay(true);
  };
  return (
    <CartContextProvider>
      {display && <Cart onDisplay={setDisplay} />}
      <Header clickButton={clickButton} />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </CartContextProvider>
  );
}

export default App;
