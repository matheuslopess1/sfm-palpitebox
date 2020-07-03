import React from "react";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <React.Fragment>
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
      <div className="bg-gray-300 p-4 shadow-md">sobre</div>
    </React.Fragment>
  );
};

export default Header;
