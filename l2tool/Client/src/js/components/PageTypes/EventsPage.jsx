
import React from "react";
import styles from "../../../sass/styles.scss";

class EventsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.animated}>
        { this.props.children }
      </div>
    );
  }
}

export default EventsPage;
