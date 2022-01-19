import React from "react";

import styles from "../../../../styles/Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
