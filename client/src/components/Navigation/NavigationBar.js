import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className={styles.navBar}>
      <div>
        <div className={styles.logo}>
          {/* <img src="./logo.svg" /> */}
          LOGO
        </div>
      </div>
      <div className={styles.navLinks}>
        <Link to="/cart"  className={styles.navLink}>
          Cart
        </Link>
        <Link to="/signup" className={styles.navLink}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;

