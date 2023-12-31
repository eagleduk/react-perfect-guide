import styles from "./Header.module.css";

import meals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton clickButton={props.clickButton} />
      </header>
      <div className={styles["main-image"]}>
        <img src={meals} alt="" />
      </div>
    </>
  );
}

export default Header;
