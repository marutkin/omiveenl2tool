
import React from "react";
import Person from "./../Entities/Person.jsx";
import styles from "../../../sass/styles.scss";

import testdata from "./../../../settings/testdata.json";

class OnlinePage extends React.Component {

  fetchPersonData() {
    // TODO [KD]: Provide BE Api.
    return testdata;
  }

  render() {
    return (
      <div className={styles.animated}>
        <Person data={this.fetchPersonData()} />
      </div>
    );
  }

}

export default OnlinePage;
