import React from "react";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container mx-auto">
        <img
          className="mx-auto"
          src="/logo_palpitebox.png"
          alt="PalpiteBox"
          style={{ maxWidth: "144px" }}
        />
      </div>
    </div>
  );
};

export default Header;
