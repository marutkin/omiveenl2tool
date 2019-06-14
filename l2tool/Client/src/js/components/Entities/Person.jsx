
// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../../../sass/styles.scss";

export default function Person(props) {
  return (
    <div className={styles.person}>
      { Object.keys(props.data).map((key) => <div key={key} className={styles.person__row}>{ props.data[key] }</div>) }
    </div>
  );
}
