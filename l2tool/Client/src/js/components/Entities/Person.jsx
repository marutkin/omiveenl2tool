
// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../../../sass/styles.scss";

function formatKey(keyString) {
  const string = keyString.match(/[a-zA-Z]+/g).join(" ").toLocaleLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Person(props) {
  const { data } = props;
  return (
    <div className={styles.person}>
      {
        Object.keys(data).map((key) => (
          <div key={key} className={styles.person__row}>
            { formatKey(key) } : { data[key] }
          </div>))
      }
    </div>
  );
}
