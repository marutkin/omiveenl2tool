
import React from "react";

import RoutingModule from "./components/Routing.jsx";

import styles from "../sass/styles.scss";

class L2Tool extends React.Component {

  render() {
    return (
      <main className={styles["main-container"]}>
        <RoutingModule />
      </main>
    );
  }
}

export default L2Tool;
