
import React from "react";
import styles from "../../sass/styles.scss";

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoading, children } = this.props;
    return (
      <section className={styles["page-container"]}>
        {
          isLoading && children && children.map
          && children.map((item, index) => {
            return <div key={index} >{ item }</div>;
          })
          || children
        }
      </section>
    );
  }
}

export default Page;
