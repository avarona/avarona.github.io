import React from "react";
import logo from "../../images/logo.svg";
import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <img src={logo} alt='react logo' />
    </div>
  );
}

export default App;
