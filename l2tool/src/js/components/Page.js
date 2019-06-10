
import React from 'react';
import styles from './../../sass/styles.scss';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someData: "SomeData"
    };
  }

  render() {
    return (
      <section className={styles["page-container"]}>
        {this.props.data}
      </section>
    );
  }
}

export default Page;
