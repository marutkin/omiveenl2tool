
// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../../../sass/styles.scss";

function formatKey(keyString) {
  const string = keyString.match(/[a-zA-Z]+/g).join(" ").toLocaleLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class Person extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    const { data } = this.props;
    return (
      <div className={styles.person}>
        {
          Object.keys(data).map((key, index) => (
            <div key={index} className={styles.person__row}>
              {
                index > 4 ?
                  <div className={styles.person__head}>
                    { formatKey(key) } : { data[key] }
                  </div>
                  : <div className={styles.person__body}>
                    { formatKey(key) } : { data[key] }
                  </div>
              }
            </div>
          ))
        }
      </div>
    );
  }

}

export default Person;
