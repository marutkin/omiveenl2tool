
import React from "react";
import Person from "./../Entities/Person.jsx";
import styles from "../../../sass/styles.scss";

import testdata from "./../../../settings/testdata.js";

class OnlinePage extends React.Component {

  fetchPersonData() {
    // TODO [KD]: Provide BE Api.
    return testdata.online;
  }

  render() {
    const persons = this.fetchPersonData();
    return (
      <div className={`${styles.animated} ${styles.flex}`}>
        {
          Object.keys(persons).map((key, index) => <Person key={index} data={persons[key]} />)
        }
      </div>
    );
  }

}

export default OnlinePage;
